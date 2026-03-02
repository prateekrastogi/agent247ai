'use client';
import styles from './benefits.module.css';
import { FiZap, FiFileText, FiRefreshCw, FiLock } from 'react-icons/fi';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const benefits = [
  {
    Icon: FiZap,
    title: 'One-Tap Setup',
    description: 'Start campaigns in seconds with zero complexity',
  },
  {
    Icon: FiFileText,
    title: 'Transparent Pricing',
    description: 'Upfront costs and delivery times with no surprises',
  },
  {
    Icon: FiRefreshCw,
    title: 'Always reliable',
    description: 'Trusted suppliers and constant monitoring for steady results',
  },
  {
    Icon: FiLock,
    title: 'Privacy First',
    description: 'Your data is yours alone nothing shared nothing exposed',
  },
];

const BenefitItem = ({ benefit, index }: { benefit: any; index: number }) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
  const slideDirection = index % 2 === 0 ? styles.slideInLeft : styles.slideInRight;

  return (
    <div
      ref={ref}
      className={`${styles.benefitItem} ${
        isIntersecting ? `${styles.isVisible} ${slideDirection}` : ''
      }`}
      style={{ animationDelay: `${(index % 2) * 150}ms` }}
    >
      <benefit.Icon className={styles.icon} />
      <h4 className={styles.benefitTitle}>{benefit.title}</h4>
      <p className={styles.benefitBody}>{benefit.description}</p>
    </div>
  );
};

const BenefitsClient = () => {
  return (
    <section id="benefits" className={styles.benefitsSection}>
      <div className={styles.container}>
        <h2 className={styles.headline}>Growth Made Simple</h2>
        <p className={styles.subtext}>
          Focus on content, we handle the rest
        </p>
        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <BenefitItem key={index} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsClient;