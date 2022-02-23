import React from 'react'
import styles from './Landing.module.scss'


const Landing = () => {
    return (
        <section className={styles.landing_container}>
            <div className={styles.hero_body}>
                <h1>Designer, Front-end Developer & Mentor</h1>
                <h2>I design and code beautifully simple things, and I love what I do.</h2>
            </div>
            <div className={styles.hero_footer}>
                <div className={styles.footerImg} />
            </div>
        </section>
    )
}

export default Landing