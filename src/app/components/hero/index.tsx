import styles from './hero.module.css';
import VideoAnimation from './VideoAnimation';
import AnimatedHeadline from './AnimatedHeadline'; // Import the new component

const Hero = () => {
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

        <a href="#faq" className={styles.faqLink}>
          <button className={`${styles.ctaButton} ${styles.secondaryCta}`}>FAQ</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;