import { Logo } from "../../ui/Logo";
import { Button } from "../../ui/Button/Button";
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroContainer}>
      <Logo />
      
      <h1 className={styles.title}>
        Transformamos sua <span className={styles.highlight}>presença digital</span><br />
        em resultados reais
      </h1>

      <p className={styles.description}>
        Especialistas em <span className={styles.highlight}>redes sociais</span> e <span className={styles.highlight}>tráfego pago</span> para escalar seu negócio
      </p>

      <Button text="Entrar em contato" />
    </section>
  );
}