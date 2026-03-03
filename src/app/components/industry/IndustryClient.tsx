
'use client';

import styles from './industry.module.css';
import { FaSnowflake, FaFire, FaTools } from 'react-icons/fa';

const IndustryClient = () => {
    return (
        <section className={styles.industrySection}>
            <div className={styles.industryContent}>
                <h2 className={styles.title}>Built for Real HVAC Scenarios</h2>
                <p className={styles.subtitle}>From emergency breakdowns to new system installs, our agents handle the full customer lifecycle.</p>
                <div className={styles.statsContainer}>
                    <div className={styles.stat}>
                        <div className={styles.iconWrapper}>
                            <FaSnowflake className={styles.statIcon} />
                        </div>
                        <h3>AC Emergency</h3>
                        <p className={styles.statSubtext}>
                            "Customer calls at 10:47 PM. AI answers, confirms no cooling, books 8 AM service."
                        </p>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.iconWrapper}>
                            <FaFire className={styles.statIcon} />
                        </div>
                        <h3>Furnace Repair</h3>
                        <p className={styles.statSubtext}>
                            "Customer reports no heat. AI qualifies issue, collects address, books same-day visit."
                        </p>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.iconWrapper}>
                            <FaTools className={styles.statIcon} />
                        </div>
                        <h3>New Installation</h3>
                        <p className={styles.statSubtext}>
                            "Customer asks about replacing a 15-year-old unit. AI captures budget, home size, and books a free estimate."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustryClient;
