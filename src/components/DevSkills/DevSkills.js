import React from 'react'
import styles from './DevSkills.module.scss'


const DevSkills = () => {
    return (
        <div className={styles.devSkillsContainer}>
            <div className={styles.columnStyle}>
                <div className={styles.designerLogo}></div>
                <div className={styles.row1}>
                    <h3>Designer</h3>
                    <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                </div>

                <div className={styles.row2}>
                    <h4>Things I enjoy designing:</h4>
                    <p>UX, UI, Web, Mobile, Apps, Logos</p>
                </div>

                <div className={styles.row3}>
                    <h4>Design Tools:</h4>
                    <ul>
                        <li>Balsamiq Mockups</li>
                        <li>Figma</li>
                        <li>Invision</li>
                        <li>Marvel</li>
                        <li>Pen & Paper</li>
                        <li>Sketch</li>
                        <li>Webflow</li>
                        <li>Zeplin</li>
                    </ul>
                </div>
            </div>
            <div className={styles.columnStyle}>
                <div className={styles.designerLogo}></div>
                <div className={styles.row1}>
                    <h3>Designer</h3>
                    <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                </div>

                <div className={styles.row2}>
                    <h4>Things I enjoy designing:</h4>
                    <p>UX, UI, Web, Mobile, Apps, Logos</p>
                </div>

                <div className={styles.row3}>
                    <h4>Design Tools:</h4>
                    <ul>
                        <li>Balsamiq Mockups</li>
                        <li>Figma</li>
                        <li>Invision</li>
                        <li>Marvel</li>
                        <li>Pen & Paper</li>
                        <li>Sketch</li>
                        <li>Webflow</li>
                        <li>Zeplin</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DevSkills