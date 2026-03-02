import React from 'react';
import Image from 'next/image';
import styles from './team.module.css';

const Team: React.FC = () => {
  return (
    <section className={styles.teamSection}>
      <div className={styles.teamContent}>
        <h2 className={styles.title}>Our Team, Our Craft</h2>
        <p className={styles.subcopy}>
          We’re a collective of engineers, designers, and dreamers building AI to scale social media, that feels effortless, powerful, and human
        </p>
        <div className={styles.officeImageContainer}>
          <Image
            src="/office_outside.png" /* Placeholder for office shot */
            alt="Office Shot"
            fill
            className={styles.officeImage}
          />
        </div>
        <div className={styles.teamGrid}>
          {/* Placeholder team images */}
          <Image src="/team_1.png" alt="Team 1" width={1080} height={1080} className={styles.teamMemberImage} />
          <Image src="/team_2.png" alt="Team 2" width={1080} height={1080} className={styles.teamMemberImage} />
          <Image src="/team_3.png" alt="Team 3" width={1080} height={1080} className={styles.teamMemberImage} />
        </div>
      </div>
    </section>
  );
};

export default Team;
