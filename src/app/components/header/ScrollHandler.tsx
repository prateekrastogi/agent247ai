"use client";

import { useState, useEffect } from 'react';
import styles from './header.module.css';

interface ScrollHandlerProps {
  onTryDemoClick: () => void;
}

const ScrollHandler: React.FC<ScrollHandlerProps> = ({ onTryDemoClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50; // Adjust scroll threshold as needed
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`${styles.brandName} ${scrolled ? styles.hidden : ''}`}>Agent24/7AI</div>
      <button className={styles.bookDemoButton} onClick={onTryDemoClick}>Try Demo</button>
    </>
  );
};

export default ScrollHandler;
