import type { ReactNode } from "react";

import styles from "./VideoSection.module.css";

const leftQuotes: ReactNode[] = [
  <>
    A Linka Mídia trouxe a proatividade que a gente precisava,{" "}
    <span className={styles.highlight}>
      indo muito além do básico e propondo soluções reais.
    </span>
  </>,
  <>
    O que mais me impressionou foi,{" "}
    <span className={styles.highlight}>
      a facilidade com que eles entenderam a nossa linguagem e a essência do nosso negócio.
    </span>
  </>,
  "Ter essa parceria nos dá a segurança de focar na nossa operação, sabendo que o marketing está em mãos competentes.",
  "A qualidade da entrega visual e estratégica elevou o patamar da nossa marca perante os nossos clientes.",
  <>
    O que realmente nos conquistou foi o{" "}
    <span className={styles.highlight}>
      tempo de resposta e a agilidade em colocar nossas ideias em prática, sem nunca perder a qualidade técnica.
    </span>
  </>,
];

const rightQuotes: ReactNode[] = [
  <>
    O que mais me impressionou foi,{" "}
    <span className={styles.highlight}>
      a facilidade com que eles entenderam a nossa linguagem e a essência do nosso negócio.
    </span>
  </>,
  "Não é apenas uma prestação de serviço, é uma parceria de verdade que se preocupa com os nossos resultados.",
  "Eles conseguiram traduzir o que a Silo Eventos representa em um conteúdo digital de altíssimo nível.",
  <>
    <span className={styles.highlight}>
      Sentimos uma diferença nítida no nosso posicionamento de mercado
    </span>
    {" "} desde que a Linka Mídia assumiu nossa comunicação.
  </>,
  "É um alívio trabalhar com uma equipe que antecipa problemas e entrega inovação de forma constante.",
];

export function VideoSection() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Assista ao <span>vídeo</span>
        </h2>

        <div className={styles.layout}>
          <div className={styles.cardsColumn}>
            {leftQuotes.map((quote, index) => (
              <article key={`left-${index}`} className={styles.card}>
                <p>{quote}</p>
              </article>
            ))}
          </div>

          <div className={styles.videoWrapper}>
            <iframe
              src="https://www.youtube.com/embed/I_dTi0mTzvg"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>

          <div className={styles.cardsColumn}>
            {rightQuotes.map((quote, index) => (
              <article key={`right-${index}`} className={styles.card}>
                <p>{quote}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
