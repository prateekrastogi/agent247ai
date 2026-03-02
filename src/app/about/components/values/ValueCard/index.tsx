import React from 'react';
import styles from './valueCard.module.css';

interface ValueCardProps {
  icon: React.ElementType;
  title: string;
  copy: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon: Icon, title, copy }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <Icon />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.copy}>{copy}</p>
    </div>
  );
};

export default ValueCard;
