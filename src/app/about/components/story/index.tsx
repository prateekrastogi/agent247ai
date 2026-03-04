import React from 'react';
import Image from 'next/image';
import styles from './story.module.css';

const Story: React.FC = () => {
  return (
    <section className={styles.storySection}>
      <div className={styles.storyContent}>
        <div className={styles.column}>
          <h2 className={styles.title}>Our Origin</h2>
          <p className={styles.text}>
            "Agent24/7AI" was born from a simple observation: while HVAC businesses were out in the field doing what they do best — fixing systems, serving customers, and keeping homes comfortable — their phones were ringing off the hook with no one to answer. Leads were slipping through the cracks, jobs were being lost to competitors, and owners were burning out trying to do it all. Our vision is simple: give every HVAC business — regardless of size — the power of a 24/7 intelligent front office that answers every call, qualifies every lead, and books every job, so the people who built their business with their hands never have to worry about the phone again.
          </p>
        </div>
        <div className={styles.column}>
          <div className={styles.imageWrapper}>
            <Image className={styles.image} src="/story.png" alt="Mount Everest" fill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;