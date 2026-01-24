import styles from './TeamMemberImage.module.css';

export const TeamMemberImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className={styles.wrapper}>
    <img src={src} alt={alt} className={styles.image} />
    <div className={styles.overlay} />
  </div>
);