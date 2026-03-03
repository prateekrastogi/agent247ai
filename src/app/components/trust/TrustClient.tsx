'use client';

import React from 'react';
import styles from './trust.module.css';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { SiCrunchbase, SiProducthunt, SiYcombinator, SiCnet, SiTwilio, SiCaldotcom, SiHubspot, SiGooglecalendar } from 'react-icons/si';
import Marquee from "react-fast-marquee";

interface TrustClientProps {
  headline: string;
  subtext: string;
}

const TrustClient: React.FC<TrustClientProps> = ({ headline, subtext }) => {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const logos = [
    { icon: SiCrunchbase, alt: 'Crunchbase Icon' },
    { icon: SiProducthunt, alt: 'Product Hunt Icon' },
    { icon: SiYcombinator, alt: 'Y Combinator Icon' },
    { icon: SiCnet, alt: 'CNET Icon' },
  ];

  return (
    <section
      ref={sectionRef}
      className={styles.trustSection}
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
            <a href="#" aria-label="Jobber"><span className={styles.jobberLogo} role="img" aria-label="Jobber"></span></a>
            <a href="#" aria-label="Housecall Pro"><span className={styles.houseCallProLogo} role="img" aria-label="Housecall Pro"></span></a>
            <a href="#" aria-label="ServiceTitan"><span className={styles.serviceTitanLogo} role="img" aria-label="ServiceTitan"></span></a>
            <a href="#" aria-label="Google Business"><span className={styles.googleBusinessLogo} role="img" aria-label="Google Business"></span></a>
            <a href="#" aria-label="Twilio"><SiTwilio /></a>
            <a href="#" aria-label="Google Calendar"><SiGooglecalendar /></a>
            <a href="#" aria-label="Cal.com"><SiCaldotcom /></a>
            <a href="#" aria-label="HubSpot"><SiHubspot /></a>
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default TrustClient;