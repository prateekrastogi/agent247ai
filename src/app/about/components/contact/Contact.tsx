
import React from 'react';
import styles from './contact.module.css';
import { FiMapPin, FiMail } from 'react-icons/fi';

const Contact: React.FC = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContent}>
        <div className={styles.leftColumn}>
          <h2 className={styles.headline}>Get in Touch</h2>
          <p className={styles.subcopy}>
            We&apos;d love to hear from you! Whether you have a question about our services,
            need support, or just want to say hello, our team is ready to help
          </p>
          <div className={styles.secondaryInfo}>
            <p><FiMapPin /> 8 The Green, Suite A, Dover, Delaware 19901, United States</p>
            <p><FiMail style={{verticalAlign: 'middle' }}/><a href="mailto:support@sharefollowlike.com" className={styles.mailLink}> support@sharefollowlike.com</a></p>
            </div>
        </div>
        <div className={styles.rightColumn}>
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
