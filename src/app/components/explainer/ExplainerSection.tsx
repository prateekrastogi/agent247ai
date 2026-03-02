
import React from 'react';
import styles from './explainer.module.css';
import ExplainerSteps from './ExplainerSteps';

const ExplainerSection: React.FC = () => {
  const sectionTitle = "Instant¹ Boost, Step by Step";
  const subtext = "Skip targeting, start trending — just chat, choose, and grow";

  const steps = [
    {
      icon: 'chat',
      title: 'Start Chat',
      description: 'Say hello and tell us your goal: followers, views, or engagement',
    },
    {
      icon: 'choose',
      title: 'Choose Your Platform',
      description: 'Pick your platform focus, then relax • Our state-of-the-art AI optimizes everything',
    },
    {
      icon: 'track',
      title: 'Track & Grow',
      description: 'Secure checkout, live order status, and prompt updates on your clout',
    },
  ];

  return (
    <section className={styles.explainerSection}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
        <p className={styles.subtext}>{subtext}</p>
        <ExplainerSteps steps={steps} />
        <p className={styles.copyHygiene}>
          ₁Instant applies to service initiation; completion times may vary by your preferences.
        </p>
      </div>
    </section>
  );
};

export default ExplainerSection;
