import styles from './hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <h1 className={styles.headline}>Cookies</h1>
      <p className={styles.subtext}>
        Designed for smoother browsing
      </p>
    </section>
  );
};

export default Hero;
