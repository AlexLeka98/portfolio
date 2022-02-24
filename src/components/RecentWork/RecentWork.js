import React from 'react';
import Button from '../UI/Button';
import styles from './RecentWork.module.scss';

const RecentWork = () => {
    return (
        <div className={styles.recentWorkContainer}>
            <h2>My Recent Work</h2>
            <p>Here are a few design projects I've worked on recently.</p>
            <div className={styles.gridProjects}>
                <div className={styles.row}>
                    <div>
                        <img src='https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80' />
                        <div className={styles.projectInfo}>
                            <p>Blockchain pioneers bringing transparency, trust, and security to supply.</p>
                            <Button>Visit Website</Button>
                        </div>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80' />
                        <div className={styles.projectInfo}>
                            <p>Blockchain pioneers bringing transparency, trust, and security to supply.</p>
                            <Button>Visit Website</Button>
                        </div>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80' />
                        <div className={styles.projectInfo}>
                            <p>Blockchain pioneers bringing transparency, trust, and security to supply.</p>
                            <Button><a href='https://www.facebook.com'>Visit Website</a></Button>
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                <div>
                        <img src='https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80' />
                        <div className={styles.projectInfo}>
                            <p>Blockchain pioneers bringing transparency, trust, and security to supply.</p>
                            <Button>Visit Website</Button>
                        </div>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80' />
                        <div className={styles.projectInfo}>
                            <p>Blockchain pioneers bringing transparency, trust, and security to supply.</p>
                            <Button>Visit Website</Button>
                        </div>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80' />
                        <div className={styles.projectInfo}>
                            <p>Blockchain pioneers bringing transparency, trust, and security to supply.</p>
                            <Button>Visit Website</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentWork