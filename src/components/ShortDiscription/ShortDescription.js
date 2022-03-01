import React from 'react'
import styles from './ShortDescription.module.scss'


const ShortDescription = () => {
    return (
        <div className={styles.descriptionContainer}>
            <div className={styles.descriptionText}>
                <h4>Hi, I’m Aleksander.</h4>
                <p>
                    I am a junior web developer, mostly specialized in front end technologies. 
                    I am well-versed in numerous programming technologies including 
                    <b> React JS</b>, 
                    <b> HTML5/CSS</b>, 
                    <b> JavaScript</b>, 
                    <b> SASS</b>, 
                    <b> NodeJS</b>, 
                    <b> ExpressJS</b>, 
                    <b> Redux</b>, 
                    <b> MongoDB</b>, and 
                    <b> SQL</b>. 
                    I Studied <b>Computer Science</b> in <b>Aristotle University 
                    of Thessaloniki</b>, but most of my knowledge in web technologies comes from self 
                    reseach, udemy courses and video tutorials.
                    
                

                    {/* Since beginning my journey as a freelance designer nearly 10 years
                    ago, I've done remote work for agencies, consulted for startups,
                    and collaborated with talented people to create digital products
                    for both business and consumer use. I'm quietly confident, naturally curious,
                    and perpetually working on improving my chops one design problem at a time. */}
                </p>
            </div>
        </div>
    )
}

export default ShortDescription