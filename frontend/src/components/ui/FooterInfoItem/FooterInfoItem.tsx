import { ReactNode } from 'react';
import styles from './FooterInfoItem.module.css';

interface FooterInfoItemProps {
  icon: ReactNode;
  text: string;
}

export const FooterInfoItem = ({ icon, text }: FooterInfoItemProps) => (
  <div className={styles.item}>
    <div className={styles.iconWrapper}>{icon}</div>
    <span>{text}</span>
  </div>
);