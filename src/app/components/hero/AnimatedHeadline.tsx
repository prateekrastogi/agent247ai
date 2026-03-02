'use client';

import { useState, useEffect } from 'react';
import styles from './hero.module.css';

const headlines = [
  "Influencers Choose It",
  "Celebrities Use It",
  "Fans Notice It"
];

const AnimatedHeadline = () => {
  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true); // Start fade out
      setTimeout(() => {
        setCurrentHeadlineIndex((prevIndex) => (prevIndex + 1) % headlines.length);
        setIsFading(false); // End fade out, start fade in
      }, 500); // Half a second for fade out
    }, 3000); // Change headline every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className={`${styles.headline} ${isFading ? styles.fadeOut : styles.fadeIn}`}>
      {headlines[currentHeadlineIndex]}
    </h1>
  );
};

export default AnimatedHeadline;