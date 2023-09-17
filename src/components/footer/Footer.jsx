import React from 'react'
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className={styles["footer-container"]}>
      <p>Don't have an account? <Link>Sign up</Link></p>
      </div>
    </>
  )
}

export default Footer