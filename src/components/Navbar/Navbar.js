import React from 'react'
import styles from './Navbar.module.scss'


function Navbar() {
  return (
    <div className={styles.navbar}>
        <div className={styles.logo}>Logo</div>
        <a href="/contact">Contact</a>
    </div>
  )
}

export default Navbar