
import React from 'react';
import styles from './solution.module.css';
import SolutionSteps from './SolutionSteps';

const Solution: React.FC = () => {
    const sectionTitle = "Set It Up in Minutes, Let It Work Forever";
    const subtext = "Your AI agent handles the conversation — you just show up to the appointment.";

    const steps = [
        {
            icon: 'phone',
            title: 'Customer Reaches Out',
            description: 'A lead calls or texts your business number, any time of day.',
        },
        {
            icon: 'ai',
            title: 'AI Handles Everything',
            description: 'It qualifies the request, captures details, and schedules the appointment in real time.',
        },
        {
            icon: 'calendar',
            title: 'You Receive Outcome',
            description: 'A confirmed booking is added to your calendar, complete with a structured summary.',
        },
    ];

    return (
        <section className={styles.solutionSection}>
            <div className={styles.contentWrapper}>
                <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
                <p className={styles.subtext}>{subtext}</p>
                <SolutionSteps steps={steps} />
            </div>
        </section>
    );
};

export default Solution;
