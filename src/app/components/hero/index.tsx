import styles from './hero.module.css';
import VideoAnimation from './VideoAnimation';
import AnimatedHeadline from './AnimatedHeadline'; // Import the new component

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <AnimatedHeadline /> {/* Use the new component here */}
      <p className={styles.subtext}>
        Whether you’re just starting out or already a household name, ShareFollowLike gives you the trusted growth tools of today’s top creators — fast, reliable, and discreet
      </p>
      <VideoAnimation
        videoClassName={styles.heroVideo}
        containerClassName={styles.animationContainer}
      />
      <div className={styles.ctaContainer}>
        <button className={`${styles.ctaButton} ${styles.primaryCta}`}>Free Chat</button>
        <a href="#faq" className={styles.faqLink}>
          <button className={`${styles.ctaButton} ${styles.secondaryCta}`}>FAQ</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;