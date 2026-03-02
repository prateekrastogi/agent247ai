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
            <h2 className={styles.titleColor}>1. Introduction</h2>
            <p>
             At sharefollowlike.com, we respect your privacy. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your personal data.
            </p>

            <h2 className={styles.titleColor}>2. Information We Collect</h2>
            <p>
              We may collect:
            </p>
            <ul>
              <li><b>Personal details</b> (like name, email, payment info when you subscribe).</li>
              <li><b>Usage data</b> (such as log-ins, device/browser type, interactions with our services).</li>
              <li><b>Content</b> you choose to process through our platform.</li>
            </ul>

            <h2 className={styles.titleColor}>3. How We Use Your Information</h2>
            <p>
              We use your data to:
            </p>
            <ul>
              <li>Provide, personalize, and improve our services.</li>
              <li>Process payments and subscriptions.</li>
              <li>Communicate updates, offers, and support.</li>
              <li>Protect against fraud, misuse, or illegal activities.</li>
            </ul>
            <p>We will never sell or rent your personal information.</p>

            <h2 className={styles.titleColor}>4. Sharing of Data</h2>
            <p>
              We may share your information only with:
              </p>
            <ul>
              <li><b>Trusted service providers</b> (e.g., payment processors, hosting partners).</li>
              <li><b>Legal authorities</b> when required by law.</li>
            </ul>

            <h2 className={styles.titleColor}>5. Data Retention</h2>
            <p>
              We keep your information only as long as necessary to provide our services, comply with legal obligations, or resolve disputes.
            </p>

            <h2 className={styles.titleColor}>6. Your Rights</h2>
            <p>
              Depending on your location, you may have rights to:
            </p>
            <ul>
              <li>Access the data we hold about you.</li>
              <li>Request corrections or deletions.</li>
              <li>Opt out of marketing emails.</li>
              <li>Withdraw consent at any time.</li>
            </ul>

            <h2 className={styles.titleColor}>7. Security</h2>
            <p>
              We use industry-standard measures to protect your data. However, no system is 100% secure, and we cannot guarantee absolute security.
            </p>

             <h2 className={styles.titleColor}>8. Contact Us</h2>
            <p>
              Questions about privacy? Talk to us: 
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