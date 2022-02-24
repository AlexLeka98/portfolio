import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.logo}></div>
            <p>Living, learning, & leveling up <br/>one day at a time.</p>
            <div className={styles.socialIcons}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <p>Handcrafted by AlexLuwees</p>
        </div>
    )
}

export default Footer