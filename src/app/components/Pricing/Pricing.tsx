
import React from 'react';
import Script from 'next/script';

import PricingCheckoutButton from './PricingCheckoutButton';
import styles from './pricing.module.css';

const Pricing = () => {
  return (
    <>
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
            <PricingCheckoutButton
              plan="go"
              buttonLabel="Get Started"
              buttonClassName={`${styles.btn} ${styles.btnSecondary}`}
            />
          </div>
          <div className={`${styles.pricingCard} ${styles.mostPopular}`}>
            <span className={styles.popularLabel}>Most Popular</span>
            <h3>Grow</h3>
            <p className={styles.price}>$500/mo</p>
            <ul>
              <li>500 AI Voice Minutes/month</li>
              <li>SMS + WhatsApp handling</li>
              <li>Advanced lead qualification</li>
              <li>FSM + Email Integration</li>
              <li>Missed Call Recovery</li>
              <li>Appointment Booking</li>
              <li>2 Phone Number</li>
            </ul>
            <PricingCheckoutButton
              plan="grow"
              buttonLabel="Scale Now"
              buttonClassName={`${styles.btn} ${styles.btnPrimary}`}
            />
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
            <PricingCheckoutButton
              plan="pro"
              buttonLabel="Go Pro"
              buttonClassName={`${styles.btn} ${styles.btnAccent}`}
            />
          </div>
        </div>
      </section>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="afterInteractive" />
    </>
  );
};

export default Pricing;
