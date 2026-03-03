import React from 'react'
import styles from './choose.module.css'
import { Verify } from '../../components/Svg'
const ChooseProjectorBellandur = () => {
  return (
    <div className={styles.container}>
      <h2>Why choose Shriram Visuals?</h2>
      {/* <p className={styles.title}>Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. Lorem ipsum dolor</p> */}
      <div className={styles.boxes}>
        <div className={styles.box}>
          <Verify />
          <p className={styles.subtitle}>High-Quality Equipment</p>
          <p className={styles.text}>At Shriram Visuals, we provide only the best, well-maintained audio-visual equipment. Our projectors, DJ setups, and speakers come from top-tier brands like JBL, ensuring you get unmatched quality and performance.
          </p>
        </div>
        <div className={styles.box}>
          <Verify />
          <p className={styles.subtitle}>Affordable Pricing</p>
          <p className={styles.text}>We believe in offering the best equipment at competitive rental rates. Our pricing is transparent, with no hidden charges, ensuring you get great value for your investment.
          </p>
        </div>
        <div className={styles.box}>
          <Verify />
          <p className={styles.subtitle}>Convenient Rentals</p>
          <p className={styles.text}>We make the process of renting equipment easy and hassle-free. Choose from our wide range of audio-visual gear, and we’ll deliver it to your location in Bellandur, Bangalore. You can also choose short-term or long-term rentals to suit your event needs.

          </p>
        </div>
        <div className={styles.box}>
          <Verify />
          <p className={styles.subtitle}>Expert Support:</p>
          <p className={styles.text}>Our team is always available to provide setup assistance, technical support, and troubleshooting during your event. We make sure everything runs smoothly so you can focus on enjoying your event.
          </p>
        </div>
        <div className={styles.box}>
          <Verify />
          <p className={styles.subtitle}>Wide Range of Products</p>
          <p className={styles.text}>From DJ equipment on rentals to projector screens for rent, we offer a diverse range of equipment for every event type. Whether you’re hosting a corporate event, a wedding, or a party, we’ve got you covered.

          </p>
        </div>
        <div className={styles.box}>
          <Verify />
          <p className={styles.subtitle}>Timely Delivery & Setup:</p>
          <p className={styles.text}>We ensure timely delivery and setup of all rented equipment, so you can relax and focus on your event. Our team works efficiently to ensure everything is ready before your guests arrive.

          </p>
        </div>
      </div>
    </div>
  )
}

export default ChooseProjectorBellandur
