import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiX } from 'react-icons/fi';
import styles from './LoginModal.module.css';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [showModal, setShowModal] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      setAnimationClass(styles.modalEntering);
      return () => {}; // No-op cleanup for when modal is opening
    } else {
      setAnimationClass(styles.modalExiting);
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 300); // Duration of exit animation
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!showModal) return null;

  return (
    <div className={`${styles.modalOverlay} ${isOpen ? styles.overlayEntering : styles.overlayExiting}`} onClick={onClose}>
      <div className={`${styles.modalContent} ${animationClass}`} onClick={(e) => e.stopPropagation()}>
        <FiX className={styles.closeIcon} onClick={onClose} />
        <picture>
          <source srcSet="/logo_white.png" media="(prefers-color-scheme: dark)" />
          <Image
            src="/logo_black.png"
            alt="ShareFollowLike Logo"
            className={styles.modalLogo}
            width={48} // Max desktop size
            height={48} // Max desktop size
          />
        </picture>
        <h2 className={styles.modalHeading}>Sign in</h2>
        <a href={`${process.env.NEXT_PUBLIC_URL}/auth/google`} className={styles.googleSignInButton}>
          <Image src="/google_icon.png" alt="Google Icon" className={styles.googleIcon} width={24} height={24} />
          Continue with Google
        </a>
        <p className={styles.subtext}>
          fast, secure, private
        </p>
        <div className={styles.legalLinks}>
          <a href="/cookies" className={styles.legalLink}>Cookies</a>
          <span>•</span>
          <a href="/privacy" className={styles.legalLink}>Privacy</a>
          <span>•</span>
          <a href="/terms" className={styles.legalLink}>Terms</a>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
