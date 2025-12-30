import styles from './Button.module.css';

interface ButtonProps {
  text: string;
}

export const Button = ({ text }: ButtonProps) => {
  return (
    <button className={styles.linkaButton}>
      {text}
    </button>
  );
};