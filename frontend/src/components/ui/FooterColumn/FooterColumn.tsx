import styles from './FooterColumn.module.css';

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

export const FooterColumn = ({ title, children }: FooterColumnProps) => (
  <div className={styles.column}>
    <h3 className={styles.title}>{title}</h3>
    <div className={styles.content}>{children}</div>
  </div>
);