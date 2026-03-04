import React from 'react';
import ValueCard from './ValueCard';
import styles from './values.module.css';
import { FaRegGem } from 'react-icons/fa';
import { LiaBrainSolid } from "react-icons/lia";
import { HiOutlineHandRaised } from 'react-icons/hi2';

const Values = () => {
  const values = [
    {
      icon: FaRegGem,
      title: 'Authenticity',
      copy: 'Geniune by design.',
    },
    {
      icon: LiaBrainSolid,
      title: 'Intelligence',
      copy: 'Smarter by nature.',
    },
    {
      icon: HiOutlineHandRaised,
      title: 'Simplicity',
      copy: 'Elegant by craft.',
    },
  ];

  return (
    <section className={styles.valuesSection}>
      <div className={styles.valuesContent}>
        <h2 className={styles.title}>Our Values</h2>
        <div className={styles.grid}>
          {values.map((value, index) => (
            <ValueCard key={index} icon={value.icon} title={value.title} copy={value.copy} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
