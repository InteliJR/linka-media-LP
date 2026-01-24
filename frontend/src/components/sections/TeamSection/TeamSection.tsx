"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import styles from './TeamSection.module.css';
import { Title } from '../../ui/Title/Title';
import { TeamMemberCard } from '../../ui/TeamMemberCard/TeamMemberCard';

const teamData = [
  { 
    name: "Lucas Guirado", 
    role: "Diretor Geral", 
    image: "/images/time/Lucas Guirado - Diretor Geral.jpg" 
  },
  { 
    name: "Saulo Neto", 
    role: "Diretor Comercial", 
    image: "/images/time/Saulo Neto - Diretor Comercial.jpg" 
  },
  { 
    name: "Lucas Ferine", 
    role: "Head de Performance", 
    image: "/images/time/Lucas Ferine - Head de Performance.PNG" 
  },
  { 
    name: "Izadora Braga", 
    role: "Head de Conteúdo", 
    image: "/images/time/Izadora Braga - Head de Conteúdo.jpg" 
  },
  { 
    name: "Jaqueline Zanin", 
    role: "Gestora de Tráfego", 
    image: "/images/time/Jaqueline Zanin - Gestora de Tráfego.PNG" 
  },
  { 
    name: "Amanda Ghiraldi", 
    role: "Atendimento", 
    image: "/images/time/Amanda Ghiraldi - Atendimento.png" 
  },
  { 
    name: "Annet Pavlova", 
    role: "Videomaker", 
    image: "/images/time/Annet Pavlova - Videomaker.jpg" 
  },
  { 
    name: "Pablo Okawa", 
    role: "Designer", 
    image: "/images/time/Pablo Okawa - Designer.jpg" 
  },
  { 
    name: "Joyce Ramos", 
    role: "Editora de Vídeos", 
    image: "/images/time/Joyce Ramos - Editora de Vídeos.png" 
  },
];

export default function TeamSection() {
  return (
    <section className={styles.section}>
      <div className={styles.titleWrapper}>
        <Title whiteText="Nossos" purpleText="especialistas" />
      </div>
      
      <div className={styles.carouselWrapper}>
        <Swiper
          modules={[Autoplay]}
          centeredSlides={true}
          loop={true}
          spaceBetween={30}
          slidesPerView={1.5}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            1024: { 
              slidesPerView: 4.5, 
              centeredSlides: true
            }
          }}
          className={styles.swiperRoot}
        >
          {teamData.map((member, i) => (
            <SwiperSlide key={i} className={styles.slide}>
              <TeamMemberCard {...member} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}