import styles from './AddressHeader.module.css';
import { Title } from '../Title/Title';
import { LocationIcon } from '../LocationIcon/LocationIcon';

export const AddressHeader = () => (
  <div className={styles.header}>
    
    <div className={styles.titleWrapper}>
      <Title whiteText="Conheça nosso" purpleText="escritório" />
    </div>
    
    <div className={styles.addressWrapper}>
      <LocationIcon />
      <span>Av. Carneiro Leão, 833 - Sala 04 - Maringá, PR</span>
    </div>
  </div>
);