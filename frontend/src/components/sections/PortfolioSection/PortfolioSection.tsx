"use client"; 

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import styles from './PortfolioSection.module.css';
import { Title } from '../../ui/Title/Title';
import { PortfolioCard } from '../../ui/PortfolioCard/PortfolioCard';

const portfolioData = [
  { clientName: "Silo Café Bistrô", image: "/images/cases/case 1.png" },
  { clientName: "Cibelly Reis Pilates", image: "/images/cases/case 2.png" },
  { clientName: "Radiadores Brasil", image: "/images/cases/case 3.png" }
];

const infinitePortfolio = [...portfolioData, ...portfolioData];

export default function PortfolioSection() {
  return (
    <section className={styles.section}>
      <div className={styles.titleWrapper}>
        <Title whiteText="Portfólio de" purpleText="Design" />
      </div>
      
      <div className={styles.carouselWrapper}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20} 
          slidesPerView={1.1} 
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            1024: { 
              slidesPerView: 3, 
              spaceBetween: 30, 
              centeredSlides: true 
            }
          }}
        >
          {infinitePortfolio.map((project, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <PortfolioCard 
                clientName={project.clientName} 
                image={project.image} 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}