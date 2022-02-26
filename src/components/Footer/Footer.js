import React from 'react';
import Button from '../UI/Button';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.interestedStyle}>
                <h4>Start a project</h4>
                <p>Interested in working together? We should queue up a chat. I’ll buy the coffee.</p>
                <div>
                    <Button>Let's do this</Button>
                </div>
            </div>
            <div className={styles.logo}></div>
            <p>Living, learning, & leveling up <br />one day at a time.</p>
            <div className={styles.socialIcons}>
                <a href="https://www.linkedin.com/in/aleksander-leka-3919a51a1/"></a>
                <a href="https://github.com/AlexLeka98"></a>
                <a href="mailto: alexleka98@outlook.com"></a>
            </div>
            <p>Handcrafted by &copy; AlexLuwees</p>
        </div>
    )
}

export default Footer