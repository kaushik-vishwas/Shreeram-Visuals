import React from 'react'
import styles from './speaker.module.css'
const ProjectorCta = ({title}) => {
  return (
    <div className={styles.container}>

      <div className={styles.spekars}>
        <div className={`${styles.hidden} ${styles.one}`}>
          <img src="/assets/images/sp2.webp" alt="shriramvisuals" />
        </div>
        <div className={styles.two}>
          <p> <span style={{ color: "black", fontSize:'34px', lineHeight:'58px', paddingBottom:'10px',display:'block', textAlign:'center', fontWeight:'600' }}>
            Best Projector & Speaker Rental in {title} – Hassle-Free Booking!</span></p>
          <a href='/contact-us'><button>Enquire Now</button></a>

        </div>
        <div className={styles.one}>
          <img src="/assets/images/sp.webp" alt="shriramvisuals" />
        </div>

      </div>

    </div>
  )
}

export default ProjectorCta
