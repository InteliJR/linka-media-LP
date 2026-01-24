"use client";
import { FormEvent } from 'react';
import styles from './TrustForm.module.css';
import Button from '../../Button/Button';

export function TrustForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    // --- 📧 INTEGRAÇÃO HOSTINGER AQUI ---
    console.log("Enviando:", data);
  };

  return (
    <form className={styles.formCard} onSubmit={handleSubmit}>
      <div className={styles.rowInputs}>
        <div className={styles.halfGroup}>
          <label htmlFor="nome" className={styles.srOnly}>Nome</label>
          <input id="nome" name="nome" placeholder="Seu nome" required className={styles.input} />
        </div>
        <div className={styles.halfGroup}>
          <label htmlFor="sobrenome" className={styles.srOnly}>Sobrenome</label>
          <input id="sobrenome" name="sobrenome" placeholder="Sobrenome" required className={styles.input} />
        </div>
      </div>
      
      <div className={styles.group}>
        <label htmlFor="empresa" className={styles.srOnly}>Empresa</label>
        <input id="empresa" name="empresa" placeholder="Nome da empresa" className={styles.input} />
      </div>

      <div className={styles.group}>
        <label htmlFor="telefone" className={styles.srOnly}>Telefone</label>
        <input id="telefone" name="telefone" type="tel" placeholder="Telefone" required className={styles.input} />
      </div>

      <div className={styles.group}>
        <label htmlFor="mensagem" className={styles.srOnly}>Mensagem</label>
        <textarea id="mensagem" name="mensagem" placeholder="Como podemos lhe ajudar?" rows={4} className={styles.textarea}></textarea>
      </div>

      <Button text="Quero mais resultados!" />
    </form>
  );
}