import { TrustText } from '../../ui/TrustSectionComponents/TrustText/TrustText';
import { TrustForm } from '../../ui/TrustSectionComponents/TrustForm/TrustForm';
import { TrustBackground } from '../../ui/TrustSectionComponents/TrustBackground/TrustBackground';

import styles from './TrustSection.module.css';

export default function TrustSection() {
  return (
    <section id="trust-section" className={styles.container}>
      
      {/* Container Centralizado */}
      <div className={styles.contentContainer}>
        
        {/* Elementos de Fundo (Tomadas) */}
        <TrustBackground />

        {/* Grid Principal (Texto + Form) */}
        <div className={styles.gridSplit}>
          <TrustText />
          <TrustForm />
        </div>

      </div>
    </section>
  );
}