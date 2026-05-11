"use client";

import { FormEvent, useState } from "react";
import styles from "./TrustForm.module.css";
import Button from "../../Button/Button";

interface LeadApiResponse {
  eventId?: string;
  message?: string;
  ok?: boolean;
  trackingAccepted?: boolean;
}

function createLeadEventId() {
  return (
    globalThis.crypto?.randomUUID?.() ??
    `lead-${Date.now()}-${Math.round(Math.random() * 1_000_000)}`
  );
}

function pushGenerateLeadEvent(eventId: string, pageLocation: string) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({
    event: "generate_lead",
    event_id: eventId,
    event_name: "Lead",
    form_name: "trust_form",
    page_location: pageLocation,
  });
}

export function TrustForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const pageUrl =
      typeof window !== "undefined" ? window.location.href : undefined;
    const eventId = createLeadEventId();

    const payload = {
      nome: String(formData.get("nome") ?? ""),
      sobrenome: String(formData.get("sobrenome") ?? ""),
      empresa: String(formData.get("empresa") ?? ""),
      email: String(formData.get("email") ?? ""),
      telefone: String(formData.get("telefone") ?? ""),
      mensagem: String(formData.get("mensagem") ?? ""),
      eventId,
      pageUrl,
    };

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as LeadApiResponse;

      if (!response.ok || !result.ok) {
        throw new Error(
          result.message ?? "Nao foi possivel enviar a sua mensagem."
        );
      }

      pushGenerateLeadEvent(result.eventId ?? eventId, pageUrl ?? "");
      setSuccessMessage(
        "Sua mensagem foi enviada com sucesso! Entraremos em contato em breve."
      );

      form.reset();
      setTimeout(() => setSuccessMessage(""), 5000);
    } catch (error) {
      console.error("Erro ao enviar lead:", error);
      setErrorMessage("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
      setTimeout(() => setErrorMessage(""), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={styles.formCard} onSubmit={handleSubmit}>
      <div className={styles.rowInputs}>
        <div className={styles.halfGroup}>
          <label htmlFor="nome" className={styles.srOnly}>
            Nome
          </label>
          <input
            id="nome"
            name="nome"
            placeholder="Seu nome"
            required
            className={styles.input}
            disabled={isLoading}
          />
        </div>

        <div className={styles.halfGroup}>
          <label htmlFor="sobrenome" className={styles.srOnly}>
            Sobrenome
          </label>
          <input
            id="sobrenome"
            name="sobrenome"
            placeholder="Sobrenome"
            required
            className={styles.input}
            disabled={isLoading}
          />
        </div>
      </div>

      <div className={styles.group}>
        <label htmlFor="empresa" className={styles.srOnly}>
          Empresa
        </label>
        <input
          id="empresa"
          name="empresa"
          placeholder="Nome da empresa"
          className={styles.input}
          disabled={isLoading}
        />
      </div>

      <div className={styles.group}>
        <label htmlFor="email" className={styles.srOnly}>
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="E-mail (opcional)"
          className={styles.input}
          disabled={isLoading}
        />
      </div>

      <div className={styles.group}>
        <label htmlFor="telefone" className={styles.srOnly}>
          Telefone
        </label>
        <input
          id="telefone"
          name="telefone"
          type="tel"
          placeholder="Telefone"
          required
          className={styles.input}
          disabled={isLoading}
        />
      </div>

      <div className={styles.group}>
        <label htmlFor="mensagem" className={styles.srOnly}>
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          placeholder="Como podemos lhe ajudar?"
          rows={4}
          className={styles.textarea}
          disabled={isLoading}
        ></textarea>
      </div>

      {successMessage && (
        <div className={styles.successMessage}>{successMessage}</div>
      )}

      {errorMessage && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}

      <Button
        text={isLoading ? "Enviando..." : "QUERO MAIS RESULTADOS!"}
        isLoading={isLoading}
        type="submit"
      />
    </form>
  );
}
