import React, { useState } from 'react'
import styles from './faq.module.css'
import { Faq } from '../../components/Svg'
const FAQBellandur = () => {
  const [ans, setAns] = useState(0)
  return (
    <div className={styles.container}>
      <h2>Frequently Asked Questions</h2>

      <br />
      <div className={styles.aligned}>
        <div className={styles.box} onClick={() => setAns(1)}>
          <p className={styles.question}>What types of equipment do you offer for rent?</p>
          <Faq id={ans === 1} />
        </div>
        {
          ans === 1 ?
            <div className={styles.answer}>
              At Shriram Visuals, we offer a wide range of event equipment for rent, including projectors, DJ setups, DJ speakers, JBL speakers, projector screens, and other DJ equipment. We have the perfect gear for corporate events, parties, presentations, and performances.

            </div> : ''
        }
      </div>
      <div className={styles.aligned}>
        <div className={styles.box} onClick={() => setAns(2)}>
          <p className={styles.question}>How do I book equipment for rent?
          </p>
          <Faq id={ans === 2} />
        </div>
        {
          ans === 2 ?
            <div className={styles.answer}>
             Booking is easy! Simply contact us through our website or give us a call. You can specify the type of equipment you need, the rental duration, and the event date. Our team will assist you with your requirements and provide all necessary details to confirm your booking.
             </div> : ''
        }
      </div>
      <div className={styles.aligned}>
        <div className={styles.box} onClick={() => setAns(3)}>
          <p className={styles.question}> Do you offer delivery and setup services?
          </p>
          <Faq id={ans === 3} />
        </div>
        {
          ans === 3 ?
            <div className={styles.answer}>
             Yes, we offer both delivery and setup services for all the equipment we rent out. Our team will deliver the equipment to your location in Bellandur, Bangalore, and ensure everything is set up and ready for your event.

            </div> : ''
        }
      </div>
      <div className={styles.aligned}>
        <div className={styles.box} onClick={() => setAns(4)}>
          <p className={styles.question}>How far in advance should I book the equipment?</p>
          <Faq id={ans === 4} />
        </div>
        {
          ans === 4 ?
            <div className={styles.answer}>
             We recommend booking your equipment at least a few days in advance, especially during peak event seasons. However, last-minute bookings may be possible depending on availability. It's always best to contact us as early as possible to secure your rental.

            </div> : ''
        }
      </div>
      <div className={styles.aligned}>
        <div className={styles.box} onClick={() => setAns(5)}>
          <p className={styles.question}>  What happens if there is an issue with the rented equipment during the event?</p>
          <Faq id={ans === 5} />
        </div>
        {
          ans === 5 ?
            <div className={styles.answer}>
              In case of any issues with the rented equipment, our team is available to provide technical support and troubleshooting. If needed, we will promptly send a technician to resolve any problems and ensure your event runs smoothly.
              </div> : ''
        }
      </div>
    </div>
  )
}

export default FAQBellandur
