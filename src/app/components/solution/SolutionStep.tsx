
import React from 'react';
import styles from './solutionStep.module.css';
import { FiCpu, FiCalendar } from 'react-icons/fi';
import { MdPhoneIphone } from 'react-icons/md';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface SolutionStepProps {
    icon: string;
    title: string;
    description: string;
    style?: React.CSSProperties;
    shouldAnimate?: boolean;
}

const SolutionStep: React.FC<SolutionStepProps> = ({ icon, title, description, style, shouldAnimate }) => {
    const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

    const getIconComponent = (iconName: string) => {
        switch (iconName) {
            case 'phone':
                return <MdPhoneIphone />;
            case 'ai':
                return <FiCpu />;
            case 'calendar':
                return <FiCalendar />;
            default:
                return null;
        }
    };

    return (
        <div
            ref={ref}
            className={`${styles.solutionStep} ${shouldAnimate && isIntersecting ? styles.slideIn : ''}`}
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

export default SolutionStep;
