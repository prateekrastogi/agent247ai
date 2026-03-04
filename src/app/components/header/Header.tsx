
import Link from 'next/link';
import styles from './header.module.css';
import TryDemoButton from './TryDemoButton';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <picture>
            <source srcSet="/logo_white.png" media="(prefers-color-scheme: dark)" />
            <img
              src="/logo_black.png"
              alt="Agent24/7AI"
              className={styles.logo}
            />
          </picture>
        </Link>
      </div>
      <TryDemoButton />
    </header>
  );
};

export default Header;
