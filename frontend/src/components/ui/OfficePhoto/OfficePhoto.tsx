import styles from './OfficePhoto.module.css';

interface OfficePhotoProps {
  src: string;
  alt: string;
}

export const OfficePhoto = ({ src, alt }: OfficePhotoProps) => (
  <div className={styles.photoCard}>
    <img src={src} alt={alt} className={styles.image} />
  </div>
);