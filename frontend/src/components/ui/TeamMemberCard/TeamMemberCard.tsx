import styles from './TeamMemberCard.module.css';
import { TeamMemberImage } from '../TeamMemberImage/TeamMemberImage';

interface Props { name: string; role: string; image: string; }

export const TeamMemberCard = ({ name, role, image }: Props) => (
  <div className={styles.card}>
    <TeamMemberImage src={image} alt={name} />
    <div className={styles.info}>
      <h4 className={styles.name}>{name}</h4>
      <p className={styles.role}>{role}</p>
    </div>
  </div>
);