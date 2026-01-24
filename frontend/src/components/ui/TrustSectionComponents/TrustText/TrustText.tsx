import styles from './TrustText.module.css';

export function TrustText() {
  return (
    <div className={styles.container}>
      <h2 className={styles.ctaTitle}>
        Otimize os <span className={styles.highlightPurple}>resultados</span><br />
        do seu negócio!
      </h2>
      <p className={styles.ctaDescription}>
        Preencha os campos ao lado e nossa equipe entrará
        em contato para entender suas necessidades e
        oferecer a melhor solução!
      </p>
    </div>
  );
}