
'use client';

import { useEffect, useRef } from 'react';
import styles from './industry.module.css';
import { FaSnowflake, FaFire, FaTools } from 'react-icons/fa';

const IndustryClient = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.visible);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        const elements = sectionRef.current?.querySelectorAll(`.${styles.stat}`);
        elements?.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="industry" className={styles.industrySection}>
            <div className={styles.industryContent} ref={sectionRef}>
                <h2 className={styles.title}>Built for Real HVAC Scenarios</h2>
                <p className={styles.subtitle}>From emergency breakdowns to new system installs, our agents handle the full customer lifecycle.</p>
                <div className={styles.statsContainer}>
                    <div className={`${styles.stat} ${styles.animateIn}`}>
                        <div className={styles.iconWrapper}>
                            <FaSnowflake className={styles.statIcon} />
                        </div>
                        <h3>AC Emergency</h3>
                        <p className={styles.statSubtext}>
                            Customer calls at 10:47 PM. AI answers, confirms no cooling, books 8 AM service.
                        </p>
                    </div>
                    <div className={`${styles.stat} ${styles.animateIn}`}>
                        <div className={styles.iconWrapper}>
                            <FaFire className={styles.statIcon} />
                        </div>
                        <h3>Furnace Repair</h3>
                        <p className={styles.statSubtext}>
                            Customer reports no heat. AI qualifies issue, collects address, books same-day visit.
                        </p>
                    </div>
                    <div className={`${styles.stat} ${styles.animateIn}`}>
                        <div className={styles.iconWrapper}>
                            <FaTools className={styles.statIcon} />
                        </div>
                        <h3>New Installation</h3>
                        <p className={styles.statSubtext}>
                            Customer asks about replacing a 15-year-old unit. AI captures budget, home size, and books a free estimate.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustryClient;
