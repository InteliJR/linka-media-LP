import { NextResponse } from "next/server";

type ContactRequestBody = {
  nome?: unknown;
  sobrenome?: unknown;
  empresa?: unknown;
  telefone?: unknown;
  mensagem?: unknown;
};

function getString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const serviceId =
    process.env.EMAILJS_SERVICE_ID || process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId =
    process.env.EMAILJS_TEMPLATE_ID || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey =
    process.env.EMAILJS_PUBLIC_KEY || process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;
  const contactEmail =
    process.env.CONTACT_EMAIL ||
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
    "contato@linkamidia.com.br";

  if (!serviceId || !templateId || !publicKey) {
    return NextResponse.json(
      {
        message:
          "Configuracao do formulario incompleta. Defina EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID e EMAILJS_TEMPLATE_ID no arquivo .env.local.",
      },
      { status: 500 }
    );
  }

  let body: ContactRequestBody;

  try {
    body = (await request.json()) as ContactRequestBody;
  } catch {
    return NextResponse.json(
      { message: "Nao foi possivel ler os dados enviados pelo formulario." },
      { status: 400 }
    );
  }

  const nome = getString(body.nome);
  const sobrenome = getString(body.sobrenome);
  const empresa = getString(body.empresa);
  const telefone = getString(body.telefone);
  const mensagem = getString(body.mensagem);

  if (!nome || !sobrenome || !telefone) {
    return NextResponse.json(
      { message: "Preencha nome, sobrenome e telefone antes de enviar." },
      { status: 400 }
    );
  }

  const nomeCompleto = `${nome} ${sobrenome}`.trim();

  const templateParams = {
    nome,
    sobrenome,
    empresa: empresa || "Nao informado",
    telefone,
    mensagem: mensagem || "Nao informada",
    nome_completo: nomeCompleto,
    first_name: nome,
    last_name: sobrenome,
    company: empresa || "Nao informado",
    phone: telefone,
    message: mensagem || "Nao informada",
    from_name: nomeCompleto,
    from_company: empresa || "Nao informado",
    contact_phone: telefone,
    to_email: contactEmail,
  };

  const emailJsResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      ...(privateKey ? { accessToken: privateKey } : {}),
      template_params: templateParams,
    }),
    cache: "no-store",
  });

  if (!emailJsResponse.ok) {
    const errorDetails = await emailJsResponse.text();
    const isNonBrowserAccessBlocked =
      emailJsResponse.status === 403 &&
      errorDetails.includes("non-browser environments is currently disabled");
    const isSmtpInvalidLogin =
      emailJsResponse.status === 412 &&
      errorDetails.includes("SMTP: Invalid login");

    console.error("EmailJS request failed", {
      status: emailJsResponse.status,
      details: errorDetails,
    });

    return NextResponse.json(
      {
        message: isNonBrowserAccessBlocked
          ? "O EmailJS bloqueou envio pelo servidor. Ative 'API access from non-browser environments' em Account > Security no painel do EmailJS."
          : isSmtpInvalidLogin
            ? "O EmailJS nao conseguiu autenticar no SMTP. Revise o usuario, a senha ou a app password do servico de email configurado no painel."
            : "O servico de email recusou o envio. Revise o template, o destinatario e a configuracao de seguranca do EmailJS.",
        details: errorDetails,
      },
      { status: emailJsResponse.status }
    );
  }

  return NextResponse.json({ message: "Mensagem enviada com sucesso." });
}
