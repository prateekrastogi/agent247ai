import styles from './hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <h1 className={styles.headline}>Privacy</h1>
      <p className={styles.subtext}>
        Your data, Our commitment
      </p>
    </section>
  );
};

export default Hero;
