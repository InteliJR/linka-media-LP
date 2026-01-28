import styles from './Subtitle.module.css';

interface SubtitleProps {
  children: React.ReactNode; 
  centered?: boolean;
}

export const Subtitle = ({ children, centered = true }: SubtitleProps) => {
  return (
    <p className={`${styles.subtitle} ${centered ? styles.centered : styles.left}`}>
      {children}
    </p>
  );
};