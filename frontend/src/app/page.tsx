"use client"; // Necessário para usar useEffect e animações no Next.js

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa os estilos da biblioteca

// Importação dos Componentes
import FooterSection from "@/components/sections/FooterSection/FooterSection";
import HeroSection from "@/components/sections/HeroSection/HeroSection";
import OfficeSection from "@/components/sections/OfficeSection/OfficeSection";
import PortfolioSection from "@/components/sections/PortfolioSection/PortfolioSection";
import ServiceSection from "@/components/sections/ServiceSection/ServiceSection";
import TeamSection from "@/components/sections/TeamSection/TeamSection";
import TrustSection from "@/components/sections/TrustSection/TrustSection";
import { VideoSection } from "@/components/sections/VideoSection/VideoSection";

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 2000,   
      once: true,       
      offset: 100,      
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <main style={{ backgroundColor: '#000', minHeight: '100vh', overflowX: 'hidden' }}>

      <HeroSection />

      <div className="section section-tight" data-aos="fade-up">
        <ServiceSection />
      </div>

      <div className="section" data-aos="fade-up">
        <TrustSection />
      </div>

      <div className="section" data-aos="fade-up">
        <PortfolioSection />
      </div>

      <div className="section" data-aos="fade-up">
        <VideoSection />
      </div>

      <div className="section" data-aos="fade-up">
        <TeamSection />
      </div>

      <div className="section section-tight" data-aos="fade-up">
        <OfficeSection />
      </div>

      <div data-aos="fade-in">
        <FooterSection />
      </div>


    </main>
  );
}