'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './hero.module.css';
import VideoAnimation from './VideoAnimation';
import AnimatedHeadline from './AnimatedHeadline'; // Import the new component

const Hero = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const handlePlayPauseClick = async () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (audio.paused) {
      if (audio.ended) {
        audio.currentTime = 0;
      }

      try {
        await audio.play();
      } catch {
        setIsPlaying(false);
      }
      return;
    }

    audio.pause();
  };

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
          onClick={handlePlayPauseClick}
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
        <audio ref={audioRef} src="/agent247ai.mp3" preload="metadata" />
      </div>
    </section>
  );
};

export default Hero;
