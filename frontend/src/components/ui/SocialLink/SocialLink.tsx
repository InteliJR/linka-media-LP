import { ReactNode } from 'react';
import styles from './SocialLink.module.css';

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
}

export const SocialLink = ({ href, icon }: SocialLinkProps) => (
  <a href={href} className={styles.link} target="_blank" rel="noopener noreferrer">
    {icon}
  </a>
);