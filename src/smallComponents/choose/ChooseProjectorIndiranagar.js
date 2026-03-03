import React from 'react'
import styles from './choose.module.css'
import { Verify } from '../../components/Svg'
const ChooseProjectorIndiranagar = () => {
  return (
    <div className={styles.container}>
      <h2>Why choose Shriram Visuals?</h2>
      {/* <p className={styles.title}>Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. Lorem ipsum dolor</p> */}
      <div className={styles.boxes}>
        <div className={styles.box}>
          <Verify />
          <p className={styles.subtitle}>Top-of-the-line Equipment</p>
          <p className={styles.text}>We offer only the best projectors, screens, and DJ equipment to ensure your event is a success.
          </p>
        </div>
        <div className={styles.box}>
          <Verify />
          <p className={styles.subtitle}>Flexible Rental Packages</p>
          <p className={styles.text}>Choose the equipment you need for as long as you need it. Our rental plans are flexible to fit your requirements.
          </p>
        </div>
        <div className={styles.box}>
          <Verify />
          <p className={styles.subtitle}>Expert Support</p>
          <p className={styles.text}>Our team of experts is available to guide you through the rental process and provide support during your event.

          </p>
        </div>
        <div className={styles.box}>
          <Verify />
          <p className={styles.subtitle}>Affordable Prices</p>
          <p className={styles.text}>Get high-quality equipment at competitive rates. We offer the best value for your money.
          </p>
        </div>
        <div className={styles.box}>
          <Verify />
          <p className={styles.subtitle}>On-time Delivery</p>
          <p className={styles.text}>We ensure timely delivery and setup of all equipment, so you can focus on enjoying your event.


          </p>
        </div>
      </div>
    </div>
  )
}

export default ChooseProjectorIndiranagar
