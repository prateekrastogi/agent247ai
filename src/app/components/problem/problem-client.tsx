'use client';
import styles from './problem.module.css';
import { FiPhoneMissed, FiClock, FiDollarSign, FiTrendingUp } from 'react-icons/fi';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const problems = [
    {
        Icon: FiPhoneMissed,
        title: 'Calls Go Unanswered',
        description: 'Owners are busy doing the actual work — calls go to voicemail, customers hang up, and revenue walks out the door.',
    },
    {
        Icon: FiClock,
        title: 'Leads Go Cold Fast',
        description: 'When follow-up takes hours instead of seconds, potential customers have already moved on to a competitor who responded first.',
    },
    {
        Icon: FiDollarSign,
        title: 'Hiring Increases Overhead',
        description: 'A full-time receptionist costs $35K–$45K/year — way out of reach for most SMBs, yet the alternative is losing customers daily.',
    },
    {
        Icon: FiTrendingUp,
        title: 'Peak Season Overwhelms Team',
        description: "During holidays, promotions, or busy seasons, call and text volume spikes 3-5x, and your small team simply can't keep up.",
    },
];

const ProblemItem = ({ problem, index }: { problem: any; index: number }) => {
    const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
    const slideDirection = index % 2 === 0 ? styles.slideInLeft : styles.slideInRight;

    return (
        <div
            ref={ref}
            className={`${styles.problemItem} ${isIntersecting ? `${styles.isVisible} ${slideDirection}` : ''
                }`}
            style={{ animationDelay: `${(index % 2) * 150}ms` }}
        >
            <problem.Icon className={styles.icon} />
            <h4 className={styles.problemTitle}>{problem.title}</h4>
            <p className={styles.problemBody}>{problem.description}</p>
        </div>
    );
};

const ProblemClient = () => {
    return (
        <section id="problem" className={styles.problemSection}>
            <div className={styles.container}>
                <h2 className={styles.headline}>The Phone Is Ringing, Revenue Is Leaving</h2>
                <p className={styles.subtext}>
                    Small businesses can't afford to be unavailable — but they can't afford to hire someone to always be available either.
                </p>
                <div className={styles.grid}>
                    {problems.map((problem, index) => (
                        <ProblemItem key={index} problem={problem} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemClient;
