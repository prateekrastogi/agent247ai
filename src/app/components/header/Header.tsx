
import Link from 'next/link';
import styles from './header.module.css';
import BookDemoButton from './BookDemoButton';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <picture>
            <source srcSet="/logo_white.png" media="(prefers-color-scheme: dark)" />
            <img
              src="/logo_black.png"
              alt="ShareFollowLike"
              className={styles.logo}
            />
          </picture>
        </Link>
      </div>
      <BookDemoButton />
    </header>
  );
};

export default Header;

