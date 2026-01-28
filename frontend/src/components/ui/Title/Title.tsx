import styles from './Title.module.css';

interface TitleProps {
  whiteText: string;
  purpleText?: string;
  centered?: boolean;
}

export const Title = ({ whiteText, purpleText, centered = true }: TitleProps) => {
  return (
    <h2 className={`${styles.title} ${centered ? styles.centered : styles.left}`}>
      {whiteText}{" "}
      {purpleText && (
        <span className={styles.purpleText}>{purpleText}</span>
      )}
    </h2>
  );
};