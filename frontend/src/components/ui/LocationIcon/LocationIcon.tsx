import { MapPin } from 'lucide-react';
import styles from './LocationIcon.module.css';

export const LocationIcon = () => (
  <div className={styles.icon}>
    <MapPin size={18} />
  </div>
);