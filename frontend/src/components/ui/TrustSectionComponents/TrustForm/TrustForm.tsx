"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./TrustForm.module.css";
import Button from "../../Button/Button";

if (typeof window !== "undefined") {
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
}

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;

export function TrustForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          nome: data.nome,
          sobrenome: data.sobrenome,
          empresa: data.empresa,
          telefone: data.telefone,
          mensagem: data.mensagem,
          to_email: "contato@linkamidia.com.br",
        }
      );

      console.log("Email enviado com sucesso:", result);
      setSuccessMessage("Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.");
      
      (e.target as HTMLFormElement).reset();

      setTimeout(() => setSuccessMessage(""), 5000);
    } catch (error) {
      console.error("Erro ao enviar email:", error);
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
