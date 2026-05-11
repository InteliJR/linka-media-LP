import { randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import {
  LeadTrackingPayload,
  sendMetaLeadEvent,
} from "@/lib/tracking/meta";

export const runtime = "nodejs";

interface LeadRequestBody {
  email?: unknown;
  empresa?: unknown;
  eventId?: unknown;
  mensagem?: unknown;
  nome?: unknown;
  pageUrl?: unknown;
  sobrenome?: unknown;
  telefone?: unknown;
}

function getOptionalString(value: unknown) {
  if (typeof value !== "string") {
    return undefined;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function getRequiredString(value: unknown, fieldName: string) {
  const normalized = getOptionalString(value);

  if (!normalized) {
    throw new Error(`O campo ${fieldName} e obrigatorio.`);
  }

  return normalized;
}

function buildLeadPayload(body: LeadRequestBody): LeadTrackingPayload {
  return {
    email: getOptionalString(body.email),
    empresa: getOptionalString(body.empresa),
    eventId: getOptionalString(body.eventId) ?? randomUUID(),
    mensagem: getOptionalString(body.mensagem),
    nome: getRequiredString(body.nome, "nome"),
    pageUrl: getOptionalString(body.pageUrl),
    sobrenome: getRequiredString(body.sobrenome, "sobrenome"),
    telefone: getRequiredString(body.telefone, "telefone"),
  };
}

async function sendLeadToEmailJs(payload: LeadTrackingPayload) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error("EmailJS environment variables are missing.");
  }

  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        email: payload.email,
        empresa: payload.empresa,
        mensagem: payload.mensagem,
        nome: payload.nome,
        reply_to: payload.email,
        sobrenome: payload.sobrenome,
        telefone: payload.telefone,
        to_email: "contato@linkamidia.com.br",
      },
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`EmailJS request failed: ${errorText}`);
  }
}

export async function POST(request: NextRequest) {
  let payload: LeadTrackingPayload;

  try {
    const body = (await request.json()) as LeadRequestBody;
    payload = buildLeadPayload(body);
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Nao foi possivel processar os dados do formulario.",
        ok: false,
      },
      { status: 400 }
    );
  }

  try {
    await sendLeadToEmailJs(payload);
  } catch (error) {
    console.error("Lead delivery failed:", error);

    return NextResponse.json(
      {
        message: "Nao foi possivel enviar a sua mensagem. Tente novamente.",
        ok: false,
      },
      { status: 500 }
    );
  }

  let trackingAccepted = false;

  try {
    const trackingResult = await sendMetaLeadEvent(request, payload);
    trackingAccepted = trackingResult.ok;

    if (!trackingResult.ok) {
      console.error("Meta CAPI dispatch failed:", trackingResult);
    }
  } catch (error) {
    console.error("Unexpected Meta CAPI error:", error);
  }

  return NextResponse.json({
    eventId: payload.eventId,
    ok: true,
    trackingAccepted,
  });
}
