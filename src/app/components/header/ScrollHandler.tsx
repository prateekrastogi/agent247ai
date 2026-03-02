"use client";

import { useState, useEffect } from 'react';
import styles from './header.module.css';

interface ScrollHandlerProps {
  onLoginClick: () => void;
}

const ScrollHandler: React.FC<ScrollHandlerProps> = ({ onLoginClick }) => {
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
      <div className={`${styles.brandName} ${scrolled ? styles.hidden : ''}`}>ShareFollowLike</div>
      <button className={styles.loginButton} onClick={onLoginClick}>Sign in</button>
    </>
  );
};

export default ScrollHandler;
