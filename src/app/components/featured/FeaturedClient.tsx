'use client';

import React from 'react';
import styles from './featured.module.css';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { SiTechcrunch, SiCrunchbase, SiProducthunt, SiYcombinator, SiCnet } from 'react-icons/si';
import { FaAngellist, FaInstagram, FaTiktok, FaYoutube, FaFacebook, FaLinkedin, FaSpotify, FaGoogle, FaDiscord, FaSnapchatGhost, FaTwitch, FaGlobe } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Marquee from "react-fast-marquee";

interface FeaturedClientProps {
  headline: string;
  subtext: string;
}

const FeaturedClient: React.FC<FeaturedClientProps> = ({ headline, subtext }) => {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const logos = [
    { icon: SiTechcrunch, alt: 'TechCrunch Icon' },
    { icon: SiCrunchbase, alt: 'Crunchbase Icon' },
    { icon: SiProducthunt, alt: 'Product Hunt Icon' },
    { icon: SiYcombinator, alt: 'Y Combinator Icon' },
    { icon: SiCnet, alt: 'CNET Icon' },
    { icon: FaAngellist, alt: 'Angellist Icon' },
  ];

  return (
    <section
      ref={sectionRef}
      className={styles.featuredOnSection}
    >
      <h2 className={styles.headline}>{headline}</h2>
      <p className={styles.subtext}>{subtext}</p>
      <div className={styles.logoGrid}>
        {logos.map((logo, index) => (
          <div
            key={index}
            className={`${styles.logoItem} ${isVisible ? styles.logoFadeIn : ''}`}
            style={{ transitionDelay: `${index * 100}ms` }} // Staggered delay
          >
            {React.createElement(logo.icon, { className: styles.logo })}
          </div>
        ))}
      </div>
      <div className={styles.socialProofContainer}>
        <p className={styles.socialTitle}>Industries We Transform</p>
        <Marquee autoFill={true}>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="TikTok"><FaTiktok /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
            <a href="#" aria-label="Twitter"><FaXTwitter /></a>
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#" aria-label="Spotify"><FaSpotify /></a>
            <a href="#" aria-label="Google"><FaGoogle /></a>
            <a href="#" aria-label="Discord"><FaDiscord /></a>
            <a href="#" aria-label="Snapchat"><FaSnapchatGhost /></a>
            <a href="#" aria-label="Twitch"><FaTwitch /></a>
            <a href="#" aria-label="Website"><FaGlobe /></a>
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default FeaturedClient;