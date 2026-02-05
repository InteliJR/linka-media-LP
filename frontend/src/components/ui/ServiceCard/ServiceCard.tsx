"use client";

import React, { useRef } from 'react';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  title: string;
  subtitle: string; // <--- ADICIONE ISSO
  description: string;
  icon: React.ReactNode;
}

export const ServiceCard = ({ title, subtitle, description, icon }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div 
      ref={cardRef} 
      onMouseMove={handleMouseMove} 
      className={styles.card}
    >
      <div className={styles.spotlight} />
      
      <div className={styles.iconWrapper}>
        {icon}
      </div>
      
      <h3 className={styles.title}>{title}</h3>
      
      {/* <--- ADICIONE O SUBTÍTULO AQUI */}
      <h4 className={styles.subtitle}>{subtitle}</h4> 
      
      <p className={styles.description}>{description}</p>
    </div>
  );
};