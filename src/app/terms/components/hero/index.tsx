import styles from './hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <h1 className={styles.headline}>Terms</h1>
      <p className={styles.subtext}>
        The rules that keep our partnership fair, transparent, and simple
      </p>
    </section>
  );
};

export default Hero;
