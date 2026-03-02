import styles from './hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <h1 className={styles.headline}>About</h1>
      <p className={styles.subtext}>
        Inspired by authencity, Powered by intelligence, The art of simplicity
      </p>
    </section>
  );
};

export default Hero;
