import React from 'react';
import styles from './content.module.css';
import { RiMailLine } from 'react-icons/ri';
import { BsGlobe } from 'react-icons/bs';

const Content = () => {
  return (
    <section className={styles.storySection}>
      <div className={styles.storyContent}>
        <div className={styles.column}>
          <div className={styles.text}>
            <h2 className={styles.titleColor}>1. What Are Cookies?</h2>
            <p>
             Cookies are small files stored on your device that help us provide a better experience, like remembering your preferences or improving site performance.
            </p>
            <h2 className={styles.titleColor}>2. Types of Cookies We Use</h2>
            <ul>
              <li><b>Essential cookies:</b> Needed for the site to function.</li>
              <li><b>Analytics cookies:</b> Help us understand usage and improve performance.</li>
              <li><b>Preference cookies:</b> Remember your settings.</li>
              <li><b>Marketing cookies:</b> Used to show relevant offers.</li>
            </ul>
          

            <h2 className={styles.titleColor}>3. How to Manage Cookies</h2>
            <p>
              You can manage or disable cookies in your browser settings. Some features may not work correctly if cookies are disabled.
            </p>

            <h2 className={styles.titleColor}>4. Changes</h2>
            <p>
              We may update this policy to reflect new laws, technology, or services. Changes will be posted here.
            </p>

             <h2 className={styles.titleColor}>5. Contact</h2>
            <p>
               For cookie-related questions, reach out at:
              </p> 
              <p>     
              <a href="mailto:support@sharefollowlike.com" className={styles.linkStyle}><RiMailLine style={{verticalAlign: 'middle' }} /> support@sharefollowlike.com</a>
          </p>
          <p>
            <a href="https://sharefollowlike.com/about#contact" className={styles.linkStyle}><BsGlobe style={{ verticalAlign: 'middle' }} /> sharefollowlike.com</a>
          </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;