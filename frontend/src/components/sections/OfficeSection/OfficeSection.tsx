import styles from './OfficeSection.module.css';
import { AddressHeader } from '../../ui/AddressHeader/AddressHeader';
import { OfficePhoto } from '../../ui/OfficePhoto/OfficePhoto';
import { GoogleMaps } from '../../ui/GoogleMaps/GoogleMaps'; 

export default function OfficeSection() {
  const photos = [
    { src: "images/images-office/foto1 1.png", alt: "Espaço de edição" },
    { src: "images/images-office/foto2 1.svg", alt: "Fachada interna Linka" },
    { src: "images/images-office/terceira.png", alt: "Estúdio de gravação" }
  ];

  return (
    <section className={styles.section}>
      <AddressHeader />

      <div className={styles.grid}>
        {photos.map((photo, index) => (
          <OfficePhoto key={index} src={photo.src} alt={photo.alt} />
        ))}
      </div>

      <div className={styles.mapWrapper}>
        <GoogleMaps /> 
      </div>
    </section>
  );
}