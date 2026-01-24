"use client";

import { Logo } from "../../ui/Logo";
import { Title } from "../../ui/Title/Title";
import { Subtitle } from "../../ui/Subtitle/Subtitle";
import Silk from "../../ui/Silk/Silk"; 
import styles from './HeroSection.module.css';
import Button from "@/components/ui/Button/Button";

export default function HeroSection() {
  
  const scrollToTrust = () => {
    const section = document.getElementById('trust-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.heroContainer}>
      
      {/* --- BACKGROUND LAYER --- */}
      <div className={styles.bgWrapper}>
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Silk 
            speed={0.10} 
            scale={0.70} 
            color="#2f2447" 
            noiseIntensity={4} 
          />
        </div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className={styles.contentWrapper}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
        
        <div className={styles.titleWrapper}>
          <Title 
            whiteText="Transformamos sua" 
            purpleText="presença digital" 
          />
          <Title whiteText="em resultados reais" />
        </div>

        <div className={styles.subtitleWrapper}>
          <Subtitle>
            Especialistas em <span className={styles.highlightSub}>redes sociais</span> e <span className={styles.highlightSub}>tráfego pago</span> para escalar seu negócio
          </Subtitle>
        </div>

        <div className={styles.buttonWrapper}>
          <div onClick={scrollToTrust} style={{ cursor: 'pointer' }}>
            <Button text="Entrar em contato" />
          </div>
        </div>
      </div>
    </section>
  );
}