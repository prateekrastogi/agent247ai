import styles from './faq.module.css';
import FAQClient from './client';

const faqData = [
  {
    question: 'Will it sound like a robot?',
    answer: 'No. The AI uses advanced voice technology designed to sound natural and conversational. Most callers assume they’re speaking with a real receptionist.',
  },
  {
    question: 'Can it book service appointments?',
    answer: 'Yes. The AI can check your real-time availability and book appointments directly into your calendar. It can also handle rescheduling and cancellations.',
  },
  {
    question: 'What happens if the AI cannot handle a call?',
    answer: 'If the AI encounters a situation it cannot resolve, it can transfer the call to you or your team, or take a detailed message so you can follow up.',
  },
  {
    question: 'Does it work after hours?',
    answer: 'Yes. The AI answers 24/7, including nights, weekends, and holidays. This ensures you never miss emergency HVAC jobs.',
  },
  {
    question: 'Can customers text the business instead of calling?',
    answer: 'Yes. Customers can communicate through SMS and messaging channels. The AI can respond, collect details, and confirm appointments automatically.',
  },
  {
    question: 'Does it integrate with my HVAC software?',
    answer: 'Yes. The system can integrate with popular field service tools and calendars so bookings and customer information are automatically synced.',
  },
  {
    question: 'Does the AI know about my business?',
    answer: 'During onboarding we configure the agent with everything it needs to know about your business. Services you offer, areas you cover, your hours, your team size — it speaks on your behalf accurately from day one.',
  },
  {
    question: 'How long does setup take?',
    answer: 'Most businesses are live within 48 hours. We handle the onboarding, configure the agent to your data, and connect your integrations — you don\'t need any technical knowledge or need to learn anything new.',
  },
];

const FAQ = () => {
  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <h2 className={styles.headline}>FAQ</h2>
          <p className={styles.subtext}>Got Questions? Try Live Demo</p>
        </div>
        <FAQClient faqData={faqData} />
      </div>
    </section>
  );
};

export default FAQ;