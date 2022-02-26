import React, { useEffect, useRef } from 'react'
import { isCompositeComponent } from 'react-dom/test-utils';
import styles from './Landing.module.scss'


const Landing = () => {

    return (
        <section className={styles.landing_container}>
            <div className={styles.hero_body}>
                <h1>Front-end Developer & Designer</h1>
                <h2>Designing and coding beautiful websites!</h2>
                <div className={styles.profileImg}></div>
            </div>
            <div className={styles.hero_footer}>
                <div className={styles.footerImg} />
            </div>

        </section>
    )
}

export default Landing