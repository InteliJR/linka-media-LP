import styles from './ServiceSection.module.css';
import { ServiceCard } from '../../ui/ServiceCard/ServiceCard';
import { Share2, BarChart3, Video, PlusSquare } from 'lucide-react';

export default function ServiceSection() {
  const services = [
    {
      title: "CONTEÚDO",
      subtitle: "Criação de conteúdo e gestão de redes sociais",
      description: "Planejamos, criamos e publicamos o conteúdo da sua marca de forma estratégica e consistente. Da ideia inicial à entrega final, nossa equipe cuida de tudo para você ter tranquilidade.",
      icon: <Share2 size={24} />
    },
    {
      title: "AUDIOVISUAL",
      subtitle: "Captação e produção audiovisual",
      description: "Vídeos com qualidade profissional e alto impacto visual. Roteirizamos, gravamos e editamos com equipe própria, utilizando equipamentos de ponta, iluminação profissional e drone para elevar o posicionamento da sua marca.",
      icon: <Video size={24} />
    },
    {
      title: "PERFORMANCE",
      subtitle: "Gestão de anúncios online em Meta e Google",
      description: "Não é apenas tráfego pago. Planejamos, analisamos e otimizamos campanhas com foco em performance, acompanhando métricas, resultados comerciais e ajustes constantes, sempre alinhados à estratégia e com relatórios claros e objetivos.",
      icon: <BarChart3 size={24} />
    },
    {
      title: "SOLUÇÕES DIGITAIS",
      subtitle: "Serviços que sustentam a estrutura digital",
      description: "Atuamos com landing pages, identidade visual, organização de processos comerciais e automações de atendimento para fortalecer a base do seu negócio.",
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
          <div 
            key={i} 
            className={styles.cardWrapper}
            style={{ '--index': i } as React.CSSProperties}
          >
            <ServiceCard {...s} />
          </div>
        ))}
      </div>
    </section>
  );
}