
import React from 'react';
import styles from './pricing.module.css';

const Pricing = () => {
  return (
    <section id="pricing" className={styles.pricingSection}>
      <div className={styles.pricingHeader}>
        <h2 className={styles.headline}>Plans That Just Make Sense</h2>
        <p className={styles.subtext}>Select a plan that fits you: No hidden fees, cancel anytime</p>
      </div>
      <div className={styles.pricingGrid}>
        <div className={styles.pricingCard}>
          <h3>Go</h3>
          <p className={styles.price}>$30/mo</p>
          <ul>
            <li>AI Marketing Autopilot Engine</li>
            <li>Boost yourself on one platform</li>
            <li>Automated order tracking</li>
            <li>Essential growth metrics</li>
            <li>Email support</li>
          </ul>
          <button className={`${styles.btn} ${styles.btnSecondary}`}>Get Started</button>
        </div>
        <div className={`${styles.pricingCard} ${styles.mostPopular}`}>
          <span className={styles.popularLabel}>Most Popular</span>
          <h3>Grow</h3>
          <p className={styles.price}>$100/mo</p>
          <ul>
            <li>AI Marketing Autopilot Engine</li>
            <li>Multi-platform boosts (upto 4)</li>
            <li>Faster delivery & priority queue</li>
            <li>Advanced growth insights</li>
            <li>Priority support</li>
          </ul>
          <button className={`${styles.btn} ${styles.btnPrimary}`}>Scale Now</button>
        </div>
        <div className={styles.pricingCard}>
          <h3>Pro</h3>
          <p className={styles.price}>$300/mo</p>
          <ul>
            <li>AI Marketing Autopilot Engine</li>
            <li>Unlimited campaigns on any platform</li>
            <li>Dedicated account manager</li>
            <li>Custom growth strategy</li>
            <li>24/7 priority support</li>
          </ul>
          <button className={`${styles.btn} ${styles.btnAccent}`}>Go Pro</button>
        </div>
      </div>
      
    </section>
  );
};

export default Pricing;
