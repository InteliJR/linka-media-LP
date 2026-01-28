import styles from './TrustLogos.module.css';

const logos = [
  { name: "Matos & Lavandoski", src: "/images/logos/1.png" },
  { name: "Greco", src: "/images/logos/2.png" },
  { name: "Silo", src: "/images/logos/3.png" },
  { name: "Mobili", src: "/images/logos/4.png" },
  { name: "Hangar", src: "/images/logos/5.png" },
  { name: "Massao Joalheiro", src: "/images/logos/6.png" },
  { name: "Comtintas", src: "/images/logos/7.png" },
  { name: "Power Training", src: "/images/logos/8.png" },
  { name: "Ville Effanc", src: "/images/logos/9.png" },
  { name: "Mega Sult", src: "/images/logos/10.png" },
];

export function TrustLogos() {

  const infiniteLogos = [...logos, ...logos, ...logos];

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.track}>
        {infiniteLogos.map((logo, index) => (
          <div key={index} className={styles.logoItem}>
            <img 
              src={logo.src} 
              alt={logo.name} 
              className={styles.logoImage} 
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}