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
                        <li>Figma</li>
                        <li>Pen & Paper</li>
                        <li>Sketch</li>
                        <li>Webflow</li>
                    </ul>
                </div>
            </div>
            <div className={styles.columnStyle}>
                <div className={styles.designerLogo}></div>
                <div className={styles.row1}>
                    <h3>Web Developer</h3>
                    <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                </div>

                <div className={styles.row2}>
                    <h4>Main technologies<br /> I use</h4>
                    <p>React JS, HTML, CSS, Node JS, Sass</p>
                </div>

                <div className={styles.row3}>
                    <h4>Dev technologies:</h4>
                    <ul>
                        <li>React</li>
                        <li>HTML/CSS/Javascript</li>
                        <li>Bootstrap</li>
                        <li>Sass/Less</li>
                        <li>Node JS</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>VS Code</li>
                        <li>Codepen</li>
                        <li>Github</li>
                        <li>Terminal</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DevSkills