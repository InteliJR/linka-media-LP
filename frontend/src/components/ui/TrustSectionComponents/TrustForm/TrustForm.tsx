"use client";

import { FormEvent, useState } from "react";
import styles from "./TrustForm.module.css";
import Button from "../../Button/Button";

export function TrustForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    setIsLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: data.nome,
          sobrenome: data.sobrenome,
          empresa: data.empresa,
          telefone: data.telefone,
          mensagem: data.mensagem,
        }),
      });

      const result = (await response.json().catch(() => null)) as
        | { message?: string; details?: string }
        | null;

      if (!response.ok) {
        const error = new Error(
          result?.message || "Ocorreu um erro ao enviar a mensagem."
        ) as Error & { status?: number; details?: string };

        error.status = response.status;
        error.details = result?.details;
        throw error;
      }

      console.log("Email enviado com sucesso:", result);
      setSuccessMessage("Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.");

      form.reset();

      setTimeout(() => setSuccessMessage(""), 5000);
    } catch (error) {
      const contactError = error as Error & { status?: number; details?: string };

      if (process.env.NODE_ENV === "development") {
        console.warn("Falha no envio do formulario:", {
          message: contactError.message,
          status: contactError.status,
          details: contactError.details,
        });
      }

      setErrorMessage(
        contactError.message || "Ocorreu um erro ao enviar a mensagem. Tente novamente."
      );

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
