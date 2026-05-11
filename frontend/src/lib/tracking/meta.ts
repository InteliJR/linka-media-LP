import { createHash } from "node:crypto";
import type { NextRequest } from "next/server";

export interface LeadTrackingPayload {
  email?: string;
  empresa?: string;
  eventId: string;
  mensagem?: string;
  nome: string;
  pageUrl?: string;
  sobrenome: string;
  telefone: string;
}

interface MetaDispatchResult {
  error?: string;
  ok: boolean;
  response?: unknown;
}

function sha256(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

function normalizeEmail(email?: string) {
  const normalized = email?.trim().toLowerCase();

  if (!normalized || !normalized.includes("@")) {
    return undefined;
  }

  return normalized;
}

function normalizePhone(phone: string) {
  const digits = phone.replace(/\D/g, "");

  if (!digits) {
    return undefined;
  }

  if (digits.startsWith("55")) {
    return digits;
  }

  if (digits.length === 10 || digits.length === 11) {
    return `55${digits}`;
  }

  return digits;
}

function getClientIpAddress(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (!forwardedFor) {
    return undefined;
  }

  return forwardedFor.split(",")[0]?.trim() || undefined;
}

function getFbcFromUrl(pageUrl?: string) {
  if (!pageUrl) {
    return undefined;
  }

  try {
    const url = new URL(pageUrl);
    const fbclid = url.searchParams.get("fbclid");

    if (!fbclid) {
      return undefined;
    }

    return `fb.1.${Date.now()}.${fbclid}`;
  } catch {
    return undefined;
  }
}

export async function sendMetaLeadEvent(
  request: NextRequest,
  payload: LeadTrackingPayload
): Promise<MetaDispatchResult> {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const accessToken = process.env.META_ACCESS_TOKEN;
  const apiVersion = process.env.META_API_VERSION ?? "v24.0";
  const testEventCode = process.env.META_TEST_EVENT_CODE;

  if (!pixelId || !accessToken) {
    return {
      ok: false,
      error: "Meta Pixel ID or access token is missing.",
    };
  }

  const normalizedEmail = normalizeEmail(payload.email);
  const normalizedPhone = normalizePhone(payload.telefone);
  const fbp = request.cookies.get("_fbp")?.value;
  const fbc = request.cookies.get("_fbc")?.value ?? getFbcFromUrl(payload.pageUrl);
  const graphUrl = new URL(
    `https://graph.facebook.com/${apiVersion}/${pixelId}/events`
  );

  graphUrl.searchParams.set("access_token", accessToken);

  const requestBody: Record<string, unknown> = {
    data: [
      {
        action_source: "website",
        custom_data: {
          company_name: payload.empresa,
          content_category: "lead",
          content_name: "Landing Page Linka Midia",
          form_name: "trust_form",
        },
        event_id: payload.eventId,
        event_name: "Lead",
        event_source_url: payload.pageUrl,
        event_time: Math.floor(Date.now() / 1000),
        user_data: {
          client_ip_address: getClientIpAddress(request),
          client_user_agent: request.headers.get("user-agent") ?? undefined,
          em: normalizedEmail ? [sha256(normalizedEmail)] : undefined,
          fbc,
          fbp,
          ph: normalizedPhone ? [sha256(normalizedPhone)] : undefined,
        },
      },
    ],
  };

  if (testEventCode) {
    requestBody.test_event_code = testEventCode;
  }

  const response = await fetch(graphUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
    cache: "no-store",
  });

  const responseBody = await response.json().catch(() => null);

  if (!response.ok) {
    return {
      ok: false,
      error: "Meta Conversions API request failed.",
      response: responseBody,
    };
  }

  return {
    ok: true,
    response: responseBody,
  };
}
