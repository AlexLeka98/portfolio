import React from 'react'
import styles from './Navbar.module.scss'
import Button from '../UI/Button'

function Navbar() {
  return (
    <div className={styles.navbar}>
        <div className={styles.logo}>Logo</div>
        {/* <button href="/contact">Contact</button> */}
        <Button>Contact</Button>
    </div>
  )
}

export default Navbar