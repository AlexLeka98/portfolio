import React from 'react'
import styles from './ShortDescription.module.scss'


const ShortDescription = () => {
    return (
        <div className={styles.descriptionContainer}>
            <div className={styles.descriptionText}>
                <h4>Hi, I’m Aleksander. Nice to meet you.</h4>
                <p>
                    Since beginning my journey as a freelance designer nearly 10 years
                    ago, I've done remote work for agencies, consulted for startups,
                    and collaborated with talented people to create digital products
                    for both business and consumer use. I'm quietly confident, naturally curious,
                    and perpetually working on improving my chops one design problem at a time.
                </p>
            </div>
        </div>
    )
}

export default ShortDescription