
'use client';

import styles from './industry.module.css';
import { FaInstagram, FaTiktok, FaYoutube, FaFacebook, FaLinkedin, FaSpotify, FaGoogle, FaDiscord, FaSnapchatGhost, FaTwitch, FaGlobe } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Marquee from "react-fast-marquee";

const IndustryClient = () => {
    return (
        <section className={styles.industrySection}>
            <div className={styles.industryContent}>
                <h2 className={styles.title}>Global Reach, Local Impact</h2>
                <p className={styles.subtitle}>Our AI agents speak your industry's language</p>
                <div className={styles.statsContainer}>
                    <div className={styles.stat}>
                        <h3>10M+</h3>
                        <p>Smart Orders</p>
                    </div>
                    <div className={styles.stat}>
                        <h3>500K+</h3>
                        <p>Active Users</p>
                    </div>
                    <div className={styles.stat}>
                        <h3>7+</h3>
                        <p>Years Experience</p>
                    </div>
                </div>
                <div className={styles.socialProofContainer}>
                    <p className={styles.socialTitle}>Industries We Transform</p>
                    <Marquee autoFill={true}>
                        <div className={styles.socialIcons}>
                            <a href="#" aria-label="Instagram"><FaInstagram /></a>
                            <a href="#" aria-label="TikTok"><FaTiktok /></a>
                            <a href="#" aria-label="YouTube"><FaYoutube /></a>
                            <a href="#" aria-label="Twitter"><FaXTwitter /></a>
                            <a href="#" aria-label="Facebook"><FaFacebook /></a>
                            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                            <a href="#" aria-label="Spotify"><FaSpotify /></a>
                            <a href="#" aria-label="Google"><FaGoogle /></a>
                            <a href="#" aria-label="Discord"><FaDiscord /></a>
                            <a href="#" aria-label="Snapchat"><FaSnapchatGhost /></a>
                            <a href="#" aria-label="Twitch"><FaTwitch /></a>
                            <a href="#" aria-label="Website"><FaGlobe /></a>
                        </div>
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default IndustryClient;
