import React from 'react'
import styles from './home.module.css';
import { FaArrowRight } from "react-icons/fa6";
import { BottomLine } from '../Svg';

const Facility = () => {
  return (
    <section className={styles.about}>
      <div className={styles.leftAbout}>
        <p className={` ${styles.smallText}`}>Established in 2007, Shriram Visuals is just more than audio-visual rentals in Bengaluru, we are your partners in creating unforgettable experiences through premium audio-visual equipment. Our primary objective is to ensure that your business conferences leave a lasting impression on your clients and colleagues, creating vibrant, memorable, and beautiful orchestrated celebrations. Transform any space into a vibrant party zone effortlessly, guaranteeing cherished moments.</p>

        <p className={`${styles.topGap} ${styles.smallText}`}>We provide a comprehensive solution covering projector rentals, premium brand speakers such as JBL or QSC, stage setups of any size to keep the energy high at corporate and personal events, videography and photography services, webcasting for virtual conferences and meetings, and delicious catering services - ALL AT ONE PLACE. </p>

        <p className={`${styles.topGap} ${styles.smallText}`}>Our client base comprises prestigious IT companies, banks, training institutes, clubs, and event management firms, catering to audiences ranging from 10 to 1000 people. Over the years, we've earned a reputable 4+ rating from local search engines and Google reviews, underlining our commitment to quality service.</p>
      </div>
      <div className={styles.rightAbout}>
        <div className={styles.facalities}>
          <div className={styles.facality}>
            <h1>17+</h1>
            <p>years of experience</p>
            <BottomLine />
          </div>
          <div className={styles.facality}>
            <h1>5000+</h1>
            <p>Events</p>
            <BottomLine />
          </div>
          <div className={styles.facality}>
            <h1>1000+</h1>
            <p>Customers Serviced</p>
            <BottomLine />
          </div>
          <div className={styles.facality}>
            <h1>40000+</h1>
            <p>Hours of Services</p>
            <BottomLine />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Facility
