'use client';

import React from 'react';
import styles from './solution.module.css';
import SolutionStep from './SolutionStep';

interface SolutionStepData {
    icon: string;
    title: string;
    description: string;
}

interface SolutionStepsProps {
    steps: SolutionStepData[];
}

const SolutionSteps: React.FC<SolutionStepsProps> = ({ steps }) => {
    return (
        <div className={styles.stepsGrid}>
            {steps.map((step, index) => (
                <SolutionStep
                    key={index}
                    icon={step.icon}
                    title={step.title}
                    description={step.description}
                    shouldAnimate={true}
                    style={{ transitionDelay: `${index * 150}ms` }}
                />
            ))}
        </div>
    );
};

export default SolutionSteps;
