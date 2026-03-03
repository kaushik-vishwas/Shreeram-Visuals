import React, { useState } from 'react'
import styles from './faq.module.css'
import { Faq } from '../../components/Svg'
const FAQIndiranagar = () => {
  const [ans, setAns] = useState(0)
  return (
    <div className={styles.container}>
      <h2>Frequently Asked Questions</h2>

      <br />
      <div className={styles.aligned}>
        <div className={styles.box} onClick={() => setAns(1)}>
          <p className={styles.question}>What types of equipment do you offer for rent?
          </p>
          <Faq id={ans === 1} />
        </div>
        {
          ans === 1 ?
            <div className={styles.answer}>
             We offer a wide range of high-quality audio-visual equipment for rent, including projectors, projector screens, DJ setups, DJ speakers, JBL speakers, and all types of DJ equipment. Whether you're hosting a corporate event, wedding, party, or any special occasion, we have the perfect equipment to meet your needs.

            </div> : ''
        }
      </div>
      <div className={styles.aligned}>
        <div className={styles.box} onClick={() => setAns(2)}>
          <p className={styles.question}>Where do you provide equipment rentals?
          </p>
          <Faq id={ans === 2} />
        </div>
        {
          ans === 2 ?
            <div className={styles.answer}>
            We primarily serve customers in Indiranagar, Bangalore, and surrounding areas. If you're located outside of our service area, please reach out to us, and we can discuss delivery options to ensure you get the equipment you need.
            </div> : ''
        }
      </div>
      <div className={styles.aligned}>
        <div className={styles.box} onClick={() => setAns(3)}>
          <p className={styles.question}>How do I place a rental order?
          </p>
          <Faq id={ans === 3} />
        </div>
        {
          ans === 3 ?
            <div className={styles.answer}>
              Placing an order is simple! Just contact us through our website or by phone to tell us what equipment you need, the event date, and the duration of the rental. Our team will assist you with the selection and provide a quote. Once you're ready, we'll confirm the order and deliver the equipment to your location.

            </div> : ''
        }
      </div>
      <div className={styles.aligned}>
        <div className={styles.box} onClick={() => setAns(4)}>
          <p className={styles.question}>What happens if the equipment stops working during the event?</p>
          <Faq id={ans === 4} />
        </div>
        {
          ans === 4 ?
            <div className={styles.answer}>
              We ensure all our equipment is in top working condition before delivery. However, if you experience any issues during your event, our support team is just a call away. We’ll make sure to resolve any problems quickly to minimize disruption and keep your event running smoothly.

            </div> : ''
        }
      </div>
      <div className={styles.aligned}>
        <div className={styles.box} onClick={() => setAns(5)}>
          <p className={styles.question}> Are there any delivery or setup charges?</p>
          <Faq id={ans === 5} />
        </div>
        {
          ans === 5 ?
            <div className={styles.answer}>
              Delivery and setup charges may apply depending on your location and the type of equipment rented. We aim to provide transparent pricing, so we'll inform you of any additional costs upfront during the booking process. Our team will handle the delivery and setup of the equipment, ensuring everything is ready for your event. </div> : ''
        }
      </div>
    </div>
  )
}

export default FAQIndiranagar
