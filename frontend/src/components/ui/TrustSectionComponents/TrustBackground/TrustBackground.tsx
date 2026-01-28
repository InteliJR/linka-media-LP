import styles from './TrustBackground.module.css';

export function TrustBackground() {
  return (
    <div className={styles.bgDecorations}>
      <img src="/images/tomada/plug-versao-final.svg" alt="" className={styles.plugImage} />
      <img src="/images/tomada/receptor.svg" alt="" className={styles.receptorImage} />
    </div>
  );
}

//frontend/public/images/tomada/plug-versao-final.svg