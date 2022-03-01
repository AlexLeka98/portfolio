import React from 'react'
import styles from './Navbar.module.scss'
import Button from '../UI/Button'

function Navbar(props) {
  console.log(props);
  return (
    <div className={styles.navbar}>
        <div className={styles.logo}></div>
        <Button onClick={props.toggleModal}>Contact</Button>
    </div>
  )
}

export default Navbar