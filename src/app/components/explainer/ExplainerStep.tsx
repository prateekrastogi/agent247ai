
import React from 'react';
import styles from './explainerStep.module.css';
import { FiMessageCircle, FiSliders, FiActivity } from 'react-icons/fi';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface ExplainerStepProps {
  icon: string;
  title: string;
  description: string;
  style?: React.CSSProperties;
  shouldAnimate?: boolean;
}

const ExplainerStep: React.FC<ExplainerStepProps> = ({ icon, title, description, style, shouldAnimate }) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'chat':
        return <FiMessageCircle />;
      case 'choose':
        return <FiSliders />;
      case 'track':
        return <FiActivity />;
      default:
        return null;
    }
  };

  return (
    <div
      ref={ref}
      className={`${styles.explainerStep} ${shouldAnimate && isIntersecting ? styles.slideIn : ''}`}
      style={style}
    >
      <div className={styles.iconContainer}>
        {getIconComponent(icon)}
      </div>
      <h3 className={styles.stepTitle}>{title}</h3>
      <p className={styles.stepDescription}>{description}</p>
    </div>
  );
};

export default ExplainerStep;
