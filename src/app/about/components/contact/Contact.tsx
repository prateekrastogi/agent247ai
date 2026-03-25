'use client';

import React, { useActionState, useCallback, startTransition } from 'react';
import styles from './contact.module.css';
import { FiMapPin, FiMail, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { sendEmail, FormState } from './actions';

const initialState: FormState = null;

const ContactForm: React.FC = () => {
  const [state, formAction, isPending] = useActionState(sendEmail, initialState);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleFormSubmit = useCallback(async (formData: FormData) => {
    if (!executeRecaptcha) {
      console.error('Execute recaptcha not yet available');
      return;
    }

    const token = await executeRecaptcha('contact_form');
    formData.append('g-recaptcha-response', token);
    
    startTransition(() => {
      formAction(formData);
    });
  }, [executeRecaptcha, formAction]);

  return (
    <div className={styles.rightColumn}>
      <form action={handleFormSubmit} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required disabled={isPending} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required disabled={isPending} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} required disabled={isPending}></textarea>
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isPending}
        >
          {isPending ? 'Sending...' : 'Send Message'}
        </button>

        <div className={styles.formStatus}>
          {state?.success && (
            <p className={styles.successMessage}>
              <FiCheckCircle style={{ verticalAlign: 'middle', marginRight: '8px' }} />
              {state.success}
            </p>
          )}
          {state?.error && (
            <p className={styles.errorMessage}>
              <FiAlertCircle style={{ verticalAlign: 'middle', marginRight: '8px' }} />
              {state.error}
            </p>
          )}

          <p className={styles.recaptchaAttribution}>
            This site is protected by reCAPTCHA and the Google{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and{' '}
            <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a> apply.
          </p>
        </div>
      </form>
    </div>
  );
};

const Contact: React.FC = () => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}>
      <section id="contact" className={styles.contactSection}>
        <div className={styles.contactContent}>
          <div className={styles.leftColumn}>
            <h2 className={styles.headline}>Get in Touch</h2>
            <p className={styles.subcopy}>
              Have a question about our plans, want to see the AI agent in action, or ready to get started? Our team is here to help — reach out and we&apos;ll get back to you within one business day.
            </p>
            <div className={styles.secondaryInfo}>
              <p><FiMapPin /> 8 The Green, Suite A, Dover, Delaware 19901, United States</p>
              <p><FiMail style={{ verticalAlign: 'middle' }} /><a href="mailto:support@agent247ai.com" className={styles.mailLink}> support@agent247ai.com</a></p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </GoogleReCaptchaProvider>
  );
};

export default Contact;
