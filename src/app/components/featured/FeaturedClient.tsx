'use client';

import React from 'react';
import styles from './featured.module.css';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { SiTechcrunch, SiCrunchbase, SiProducthunt, SiYcombinator, SiCnet } from 'react-icons/si';
import { FaAngellist } from 'react-icons/fa';

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
    </section>
  );
};

export default FeaturedClient;