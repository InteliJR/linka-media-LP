import styles from './ServiceSection.module.css';
import { ServiceCard } from '../../ui/ServiceCard/ServiceCard';
import { Share2, BarChart3, Video, PlusSquare } from 'lucide-react';

export default function ServiceSection() {
  const services = [
    {
      title: "Conteúdo",
      description: "Planejamos, criamos e publicamos o conteúdo da sua marca de forma estratégica e consistente. Da ideia inicial à entrega final, nossa equipe cuida de tudo para você ter tranquilidade.",
      icon: <Share2 size={24} />
    },
    {
      title: "Performance",
      description: "Não é apenas gestão de tráfego pago. Planejamos, analisamos e otimizamos campanhas em Meta e Google com foco em performance, acompanhando métricas, resultados comerciais e ajustes constantes, sempre alinhados à estratégia e com relatórios claros e objetivos.",
      icon: <BarChart3 size={24} />

    },
    {
      title: "Audiovisual",
      description: "Conteúdo com qualidade profissional e alto impacto visual. Roteirizamos, gravamos e editamos com equipe própria, utilizando equipamentos de ponta, iluminação profissional e drone para elevar o posicionamento da sua marca.",
      icon: <Video size={24} />

    },
    {
      title: "Complementares",
      description: "Serviços estratégicos que fortalecem a estrutura digital da sua marca. Atuamos com sites e landing pages, identidade visual e organização de processos comerciais e automações de atendimento.",
      icon: <PlusSquare size={24} />
    }
  ];
  return (
    <section className={styles.container}>
      <div className={styles.introBox}>
        <p className={styles.introText}>
          A <span className={styles.highlightPurple}>Linka Mídia</span> cuida de toda a comunicação da sua <br />
          empresa, do estratégico ao operacional.
        </p>
      </div>

      <hr className={styles.divider} />

      <h2 className={styles.sectionTitle}>
        Nossos <span className={styles.highlightPurple}>serviços</span>
      </h2>

      <div className={styles.grid}>
        {services.map((s, i) => (
          <ServiceCard key={i} {...s} />
        ))}
      </div>
    </section>
  );
}