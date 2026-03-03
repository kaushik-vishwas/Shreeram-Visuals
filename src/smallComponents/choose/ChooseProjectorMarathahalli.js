import React from 'react'
import styles from './choose.module.css'
import { Verify } from '../../components/Svg'
const ChooseProjectorMarathahalli = () => {
  return (
    <div className={styles.container}>
      <h2>Why choose Shriram Visuals?</h2>
      {/* <p className={styles.title}>Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. Lorem ipsum dolor</p> */}
      <div className={styles.boxes}>
        <div className={styles.box}>
          <Verify />
          <p className={styles.subtitle}>Quality Equipment</p>
          <p className={styles.text}>We offer only the best-in-class projectors, speakers, and DJ setups from leading brands like JBL to ensure your event runs smoothly with no technical glitches.

          </p>
        </div>
        <div className={styles.box}>
          <Verify />
          <p className={styles.subtitle}>Affordable Rentals</p>
          <p className={styles.text}>We understand that budget matters. Our competitive pricing ensures you get premium equipment without breaking the bank.


          </p>
        </div>
        <div className={styles.box}>
          <Verify />
          <p className={styles.subtitle}>On-time Delivery</p>
          <p className={styles.text}>We value your time! Our professional team ensures prompt delivery, setup, and pick-up of all rented equipment.


          </p>
        </div>
        <div className={styles.box}>
          <Verify />
          <p className={styles.subtitle}>Expert Support</p>
          <p className={styles.text}>Our experienced technicians are available to assist you before, during, and after your event. You can rely on us for technical support whenever you need it.


          </p>
        </div>
        <div className={styles.box}>
          <Verify />
          <p className={styles.subtitle}>Local Presence in Marathahalli</p>
          <p className={styles.text}>We are conveniently located in Marathahalli, Bangalore, making it easy for you to access the best AV equipment for your local events.
          </p>
        </div>
        <div className={styles.box}>
          <Verify />
          <p className={styles.subtitle}>Flexible Packages</p>
          <p className={styles.text}>Whether you need a projector, DJ equipment, or a complete audio-visual setup, we offer flexible rental packages tailored to your event's unique needs.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ChooseProjectorMarathahalli
