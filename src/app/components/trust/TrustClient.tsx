'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './trust.module.css';
import { SiTwilio, SiCaldotcom, SiHubspot, SiGooglecalendar, SiWhatsapp, SiGmail } from 'react-icons/si';
import Marquee from "react-fast-marquee";
import { PiMicrosoftOutlookLogoFill } from 'react-icons/pi';

interface TrustClientProps {
  headline: string;
  subtext: string;
}

const TrustClient: React.FC<TrustClientProps> = ({ headline, subtext }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasEnteredView, setHasEnteredView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.trustSection}>
      <h2 className={styles.headline}>{headline}</h2>
      <p className={`${styles.subtext} ${hasEnteredView ? styles.subtextBounce : ''}`}>{subtext}</p>
      <div className={styles.socialProofContainer}>
        <p className={styles.socialTitle}>Works With the Tools You Already Use</p>
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
            <a href="#" aria-label="WhatsApp"><SiWhatsapp /></a>
            <a href="#" aria-label="Gmail"><SiGmail /></a>
            <a href="#" aria-label="Outlook"><PiMicrosoftOutlookLogoFill /></a>
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default TrustClient;
