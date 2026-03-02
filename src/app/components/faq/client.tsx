"use client";
import { useState } from 'react';
import styles from './faq.module.css';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQClientProps {
  faqData: FAQItem[];
}

const FAQClient = ({ faqData }: FAQClientProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.rightColumn}>
      {faqData.map((faq, index) => (
        <div key={index} className={styles.faqItem}>
          <button className={styles.question} onClick={() => toggleFaq(index)}>
            <span>{faq.question}</span>
            <span className={styles.icon}>{activeIndex === index ? '–' : '+'}</span>
          </button>
          {activeIndex === index && (
            <div className={styles.answer}>
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQClient;
