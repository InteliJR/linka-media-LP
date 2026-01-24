import { Title } from '@/components/ui/Title/Title';
import { TrustLogos } from '../../ui/TrustSectionComponents/TrustLogos/TrustLogos';
import { TrustText } from '../../ui/TrustSectionComponents/TrustText/TrustText';
import { TrustForm } from '../../ui/TrustSectionComponents/TrustForm/TrustForm';
import { TrustBackground } from '../../ui/TrustSectionComponents/TrustBackground/TrustBackground';

import styles from './TrustSection.module.css';

export default function TrustSection() {
  return (
    <section id="trust-section" className={styles.container}>
      
      {/* --- PARTE 1: TOPO (Título + Carrossel) --- */}
      <div className={styles.topSection}>
        <div className={styles.titleWrapper}>
          <Title whiteText="Empresas que" purpleText="confiam em nós" />
        </div>
        
        {/* Componente do Carrossel Isolado */}
        <TrustLogos />
      </div>

      {/* --- PARTE 2: INFERIOR (Background + Texto + Form) --- */}
      <div className={styles.contentContainer}>
        
        {/* Tomadas (Fundo) */}
        <TrustBackground />

        {/* Grid (Frente) */}
        <div className={styles.gridSplit}>
          <TrustText />
          <TrustForm />
        </div>

      </div>
    </section>
  );
}