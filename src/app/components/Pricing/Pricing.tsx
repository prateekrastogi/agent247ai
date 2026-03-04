
import React from 'react';
import styles from './pricing.module.css';

const Pricing = () => {
  return (
    <section id="pricing" className={styles.pricingSection}>
      <div className={styles.pricingHeader}>
        <h2 className={styles.headline}>Pricing That Pays For Itself</h2>
        <p className={styles.subtext}>No setup fees. No long-term contracts. Cancel anytime.</p>
      </div>
      <div className={styles.pricingGrid}>
        <div className={styles.pricingCard}>
          <h3>Go</h3>
          <p className={styles.price}>$300/mo</p>
          <ul>
            <li>200 AI Voice Minutes/month</li>
            <li>SMS/text handling</li>
            <li>Basic lead qualification</li>
            <li>Email Integration</li>
            <li>Appointment Booking</li>
            <li>1 Phone Number</li>
          </ul>
          <button className={`${styles.btn} ${styles.btnSecondary}`}>Get Started</button>
        </div>
        <div className={`${styles.pricingCard} ${styles.mostPopular}`}>
          <span className={styles.popularLabel}>Most Popular</span>
          <h3>Grow</h3>
          <p className={styles.price}>$500/mo</p>
          <ul>
            <li>500 AI Voice Minutes/month</li>
            <li>SMS + WhatsApp handling</li>
            <li>Advanced lead qualification</li>
            <li>FSM +Email Integration</li>
            <li>Missed Call Recovery</li>
            <li>Appointment Booking</li>
            <li>2 Phone Number</li>
          </ul>
          <button className={`${styles.btn} ${styles.btnPrimary}`}>Scale Now</button>
        </div>
        <div className={styles.pricingCard}>
          <h3>Pro</h3>
          <p className={styles.price}>$1000/mo</p>
          <ul>
            <li>1500 AI Voice Minutes/month</li>
            <li>Omnichannel handling</li>
            <li>Full lead qualification</li>
            <li>FSM + CRM + Email + API Integration</li>
            <li>Missed Call Recovery</li>
            <li>Appointment Booking</li>
            <li>3 Phone Number</li>
            <li>Priority Support</li>
          </ul>
          <button className={`${styles.btn} ${styles.btnAccent}`}>Go Pro</button>
        </div>
      </div>

    </section>
  );
};

export default Pricing;
