'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './footer.module.css';

const Footer = () => {
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.leftColumn}>
          <div className={styles.logoContainer}>
            <picture>
              <source srcSet="/logo_white.png" media="(prefers-color-scheme: dark)" />
              <img
                src="/logo_black.png"
                alt="ShareFollowLike"
                className={styles.logo}
              />
            </picture>
            <span className={styles.brandName}>ShareFollowLike</span>
          </div>
          
        </div>

        <div className={styles.centerColumn}>
          <nav>
            <ul className={styles.navLinks}>
              <li className={styles.navLink}><Link href="/about">ABOUT</Link></li>
              <li className={styles.navLink}><Link href={isHomePage ? '#benefits' : '/#benefits'}>BENEFITS</Link></li>
              <li className={styles.navLink}><Link href={isHomePage ? '#pricing' : '/#pricing'}>PLANS</Link></li>
              <li className={styles.navLink}><Link href="/about#contact">CONTACT</Link></li>
            </ul>
          </nav>
        </div>

        <div className={styles.rightColumn}>
          <p className={styles.rightTagline}>
            Smarter Marketing. AI Engineered.
          </p>
        </div>
      </div>

      <div className={styles.legalBar}>
        <p>© {new Date().getFullYear()} ShareFollowLike. Crafted with precision. All rights reserved.</p>
      </div>

      <div className={styles.legalLinksBar}>
        <Link href="/cookies" className={styles.legalLink}>Cookies</Link>
        <Link href="/privacy" className={styles.legalLink}>Privacy</Link>
        <Link href="/terms" className={styles.legalLink}>Terms</Link>
      </div>
    </footer>
  );
};

export default Footer;
