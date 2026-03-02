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
            &quot;ShareFollowLike&quot; was born from a simple observation: in a world saturated with content; we saw creators struggling to be seen, and audiences yearning for authentic voices— our vision is to bridge that gap, creating a platform where quality content finds its audience, and meaningful interactions flourish
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