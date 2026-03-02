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
             Welcome to ShareFollowLike.com. These Terms of Service (“Terms”) govern your access to and use of our AI-powered social media marketing services, tools, and website (the “Services”). By using our Services, you agree to these Terms. If you do not agree, please do not use our Services.
            </p>

            <h2 className={styles.titleColor}>2. Eligibility</h2>
            <p>
              You must be at legally able to enter into contracts to use our Services. By using our Services, you confirm that you meet these requirements.
            </p>
          

            <h2 className={styles.titleColor}>3. Use of Services</h2>
            <p>
              We provide AI-driven tools and automation for social media marketing. You agree to:
            </p>
              <ul>
              <li>Use our Services only for appearance purposes.</li>
              <li>Not misuse, reverse engineer, or exploit our Services in ways not intended.</li>
              <li>Comply with all applicable laws and platform policies when using our Services.</li>
            </ul>
            <p>We reserve the right to suspend or terminate accounts that violate these Terms.</p>

            <h2 className={styles.titleColor}>4. Accounts & Security</h2>
            <p>
              To use certain features, you may need an account. You are responsible for maintaining the confidentiality of your login credentials and any activity under your account. If you suspect unauthorized use, contact us immediately.
            </p>

            <h2 className={styles.titleColor}>5. Payments & Subscriptions</h2>
            <p>
              Some Services require payment. By subscribing, you agree to:
            </p>
            <ul>
              <li>Provide accurate billing information.</li>
              <li>Authorize us (or our payment providers) to charge applicable fees.</li>
              <li>Understand that subscription plans renew automatically unless canceled.</li>
              <li>Not raise chargebacks or payment disputes with your issuing bank.</li>
            </ul> 
            <h2 className={styles.titleColor}>6. Intellectual Property</h2>
            <p>
              All content, features, and functionality in our Services (including AI models, software, design, and branding) are owned by ShareFollowLike.com. You may not copy, modify, or distribute our materials without written permission.
            </p>

            <h2 className={styles.titleColor}>7. Limitation of Liability</h2>
            <p>
              Our Services are provided “as is.” While we strive for reliability and accuracy, we do not guarantee specific outcomes. ShareFollowLike.com is not liable for indirect, incidental, or consequential damages resulting from your use of the Services.
            </p>

            <h2 className={styles.titleColor}>8. Termination</h2>
            <p>
              We may suspend or terminate your account if you violate these Terms or misuse the Services. You may stop using the Services at any time
            </p>
            <h2 className={styles.titleColor}>9. Governing Law</h2>
            <p>
              These Terms are governed by the laws of India. Any disputes will be handled in the courts of that jurisdiction.
            </p>
             <h2 className={styles.titleColor}>10. Contact</h2>
            <p>
              If you have questions about these Terms, let&apos;s connect at: 
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