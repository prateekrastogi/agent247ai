import React from 'react';
import Image from 'next/image';
import styles from './team.module.css';

const Team: React.FC = () => {
  return (
    <section className={styles.teamSection}>
      <div className={styles.teamContent}>
        <h2 className={styles.title}>Our Team, Our Approach</h2>
        <p className={styles.subcopy}>
          We’re a collective of engineers and builders creating AI agents designed for real-world service businesses—technology that works quietly in the background, answering every customer and capturing every opportunity.
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
          <Image src="/team1.png" alt="Team 1" width={1080} height={1080} className={styles.teamMemberImage} />
          <Image src="/team2.png" alt="Team 2" width={1080} height={1080} className={styles.teamMemberImage} />
          <Image src="/team3.png" alt="Team 3" width={1080} height={1080} className={styles.teamMemberImage} />
        </div>
      </div>
    </section>
  );
};

export default Team;
