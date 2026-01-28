import styles from './PortfolioCard.module.css';

interface PortfolioCardProps {
  clientName: string;
  image: string;
}

export const PortfolioCard = ({ clientName, image }: PortfolioCardProps) => (
  <div className={styles.card}>
    <div className={styles.imageWrapper}>
      <img src={image} alt={clientName} className={styles.caseImage} />
    </div>
    <h4 className={styles.clientName}>{clientName}</h4>
  </div>
);