'use client';

import { useState } from 'react';
import styles from './hero.module.css';
import VideoAnimation from './VideoAnimation';
import AnimatedHeadline from './AnimatedHeadline'; // Import the new component

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className={styles.heroContainer}>
      <AnimatedHeadline /> {/* Use the new component here */}
      <p className={styles.subtext}>
        The average HVAC business misses upto 30% of inbound calls. That's booked jobs walking straight to your competitors. Agent24/7AI answers every call and text instantly, books jobs automatically, and grows your revenue swiftly — without adding a single person to your payroll.
      </p>
      <VideoAnimation
        videoClassName={styles.heroVideo}
        containerClassName={styles.animationContainer}
      />
      <div className={styles.ctaContainer}>
        <button
          type="button"
          className={styles.playButton}
          aria-label={isPlaying ? 'Pause demo' : 'Play demo'}
          aria-pressed={isPlaying}
          onClick={() => setIsPlaying((prev) => !prev)}
        >
          <svg
            className={styles.playIcon}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            {isPlaying ? (
              <>
                <path d="M9 6 V18" />
                <path d="M15 6 V18" />
              </>
            ) : (
              <path d="M8 5 L19 12 L8 19 Z" />
            )}
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
