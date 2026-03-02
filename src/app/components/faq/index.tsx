import styles from './faq.module.css';
import FAQClient from './client';

const faqData = [
  {
    question: 'Will I ever be asked for my account password?',
    answer: 'No. We never ask for your login credentials. Your data stays secure and your accounts remain in your control.',
  },
  {
    question: 'How soon are services delivered?',
    answer: 'Delivery begins shortly after order confirmation. Estimated delivery timelines are displayed prior to ordering and may vary depending on platform conditions.',
  },
  {
    question: 'Which platforms are currently supported?',
    answer: 'Our services support all major social platforms including Instagram, TikTok, YouTube, X, Facebook, and LinkedIn. We’re constantly adding new platforms.',
  },
  {
    question: 'What is included in each subscription plan?',
    answer: 'Each plan grants access to a defined set of AI-powered features and usage allowances. Full details of inclusions are outlined at the time of subscription.',
  },
  {
    question: 'Can subscriptions be cancelled?',
    answer: 'Yes. Subscriptions may be cancelled at any time through your account panel. Any unused portion of the subscription period remains active until expiration.',
  },
  {
    question: 'Are the services safe to use?',
    answer: 'Yes. All services are sourced from verified vendors and are monitored for compliance with platform safety guidelines. No bots or fake accounts are used.',
  },
];

const FAQ = () => {
  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <h2 className={styles.headline}>FAQ</h2>
          <p className={styles.subtext}>Got questions? We’ve got answers</p>
        </div>
        <FAQClient faqData={faqData} />
      </div>
    </section>
  );
};

export default FAQ;