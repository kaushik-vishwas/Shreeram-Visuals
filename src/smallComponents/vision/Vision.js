import React from 'react'
import styles from './vision.module.css';

const Vision = () => {
  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <img src="/assets/images/dj45.png" alt="shriramvisuals" />
      </div>
      <div className={styles.left}>
        <h2>Our Vision</h2>
        <p>Our vision is to provide best-in-class end-to-end audio & visual solutions for individual and corporate events with the seamless digital experience that enables Shriram Visuals as the Projector and Speakers rental service provider in the region. </p>
        <hr />
        <h2>Our Mission</h2>
        <p>To be a preferred choice of service provider to hire an audio visual solutions to anyone looking for a branded quality checked projectors, speakers, lighting, Photography, videography, Shamiana, DJ Services, Catering, Corporate Gifts and more in Bengaluru for personal, business, & entertainment events by increasing our online presence through technology by delivering utmost quality and competitive prices.</p>
        <hr />
        <h2>Our Values</h2>
        <p>Shriram Visuals is transforming events with seamless audio-visual solutions and exceptional service.  Rent projectors, speakers, lighting, Photography, videography, Shamiana, DJ Services, Catering, Corporate Gifts and more of unforgettable experiences in Bengaluru. </p>
      </div>
    </div>
  )
}

export default Vision
