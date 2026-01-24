import styles from './GoogleMaps.module.css';

export const GoogleMaps = () => {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.672723730761!2d-51.9419615!3d-23.4219424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eed73369a08e15%3A0xe510c41097240c5e!2sAv.%20Carneiro%20Le%C3%A3o%2C%20833%20-%20Zona%2001%2C%20Maring%C3%A1%20-%20PR%2C%2087013-070!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr";

  return (
    <iframe
      src={mapUrl}
      className={styles.mapFrame}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Localização Linka Mídia"
    />
  );
};