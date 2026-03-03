import React from 'react'
import styles from './speakerabout.module.css'
const Speakerabout = () => {
  return (
    <div className={styles.container}>

      <div className={styles.spekars}>
        <div className={`${styles.hidden} ${styles.one}`}>
          <img src="/assets/images/sp2.png" alt="shriramvisuals" />
        </div>
        <div className={styles.two}>
          <h3> <span style={{ color: "black" }}>Get Speakers for </span>Rental <br />For your Events Now</h3>
          <a href='/contact-us'><button>Enquire Now</button></a>

        </div>
        <div className={styles.one}>
          <img src="/assets/images/sp.png" alt="shriramvisuals" />
        </div>

      </div>

    </div>
  )
}

export default Speakerabout
