import { Title } from '@/components/ui/Title/Title';
import { TrustLogos } from '../../ui/TrustSectionComponents/TrustLogos/TrustLogos';
import styles from './LogoSection.module.css';

export default function LogoSection() {
  return (
    <section className={styles.container}>
      <div className={styles.contentWrapper}>

        <TrustLogos />
        
      </div>
    </section>
  );
}