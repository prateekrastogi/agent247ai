'use client';

import React from 'react';
import styles from './explainer.module.css';
import ExplainerStep from './ExplainerStep';

interface ExplainerStepData {
  icon: string;
  title: string;
  description: string;
}

interface ExplainerStepsProps {
  steps: ExplainerStepData[];
}

const ExplainerSteps: React.FC<ExplainerStepsProps> = ({ steps }) => {
  return (
    <div className={styles.stepsGrid}>
      {steps.map((step, index) => (
        <ExplainerStep
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

export default ExplainerSteps;
