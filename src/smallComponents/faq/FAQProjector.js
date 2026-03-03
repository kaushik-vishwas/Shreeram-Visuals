import React, { useState } from 'react'
import styles from './faq.module.css'
import { Faq } from '../../components/Svg'
const FAQProjector = () => {
  const [ans, setAns] = useState(0)
  return (
    <div className={styles.container}>
      <h2>Frequently Asked Questions</h2>

      <br />
      <div className={styles.aligned}>
        <div className={styles.box} onClick={() => setAns(1)}>
          <p className={styles.question}>What types of projectors do you offer for rent?</p>
          <Faq id={ans === 1} />
        </div>
        {
          ans === 1 ?
            <div className={styles.answer}>
              At Shriram Visuals, we offer HD, Full HD, and 4K projectors suitable for business presentations, movie screenings, conferences, and events.
            </div> : ''
        }
      </div>
      <div className={styles.aligned}>
        <div className={styles.box} onClick={() => setAns(2)}>
          <p className={styles.question}>Do you provide JBL speaker rentals for large events?</p>
          <Faq id={ans === 2} />
        </div>
        {
          ans === 2 ?
            <div className={styles.answer}>
             Yes! We provide JBL speakers with powerful sound quality, perfect for corporate events, weddings, concerts, and private parties. </div> : ''
        }
      </div>
      <div className={styles.aligned}>
        <div className={styles.box} onClick={() => setAns(3)}>
          <p className={styles.question}>Can I rent an LED wall for an outdoor event?</p>
          <Faq id={ans === 3} />
        </div>
        {
          ans === 3 ?
            <div className={styles.answer}>
              Absolutely! Our high-resolution LED walls are ideal for both indoor and outdoor events, ensuring vibrant visuals in any lighting condition.

            </div> : ''
        }
      </div>
      <div className={styles.aligned}>
        <div className={styles.box} onClick={() => setAns(4)}>
          <p className={styles.question}>Do you offer delivery and setup services?</p>
          <Faq id={ans === 4} />
        </div>
        {
          ans === 4 ?
            <div className={styles.answer}>
              Yes, we offer free delivery, professional installation, and on-site support to ensure a seamless experience.

            </div> : ''
        }
      </div>
      <div className={styles.aligned}>
        <div className={styles.box} onClick={() => setAns(5)}>
          <p className={styles.question}> How much does it cost to rent a projector or speaker?</p>
          <Faq id={ans === 5} />
        </div>
        {
          ans === 5 ?
            <div className={styles.answer}>
              Rental prices vary based on the duration, equipment type, and event requirements. Contact Shriram Visuals for a customized quote. </div> : ''
        }
      </div>
      <div className={styles.aligned}>
        <div className={styles.box} onClick={() => setAns(6)}>
          <p className={styles.question}> Can I rent audio-visual equipment for a single day?</p>
          <Faq id={ans === 6} />
        </div>
        {
          ans === 6 ?
            <div className={styles.answer}>
              Yes! We provide flexible rental plans, including hourly, daily, and long-term rentals to suit your needs.

            </div> : ''
        }
      </div>
      <div className={styles.aligned}>
        <div className={styles.box} onClick={() => setAns(7)}>
          <p className={styles.question}> Do you provide microphones and mixers along with speakers?</p>
          <Faq id={ans === 7} />
        </div>
        {
          ans === 7 ?
            <div className={styles.answer}>
              Yes, we offer a complete audio setup, including wireless microphones, mixers, and amplifiers for events of any size.

            </div> : ''
        }
      </div>
      <div className={styles.aligned}>
        <div className={styles.box} onClick={() => setAns(8)}>
          <p className={styles.question}> Is technical support available during the event?</p>
          <Faq id={ans === 8} />
        </div>
        {
          ans === 8 ?
            <div className={styles.answer}>
             Yes, our team provides on-site technical assistance to ensure smooth operation throughout your event.

            </div> : ''
        }
      </div>
      <div className={styles.aligned}>
        <div className={styles.box} onClick={() => setAns(9)}>
          <p className={styles.question}>  How do I book projector and speaker rentals from Shriram Visuals?</p>
          <Faq id={ans === 9} />
        </div>
        {
          ans === 9 ?
            <div className={styles.answer}>
            You can call us, visit our website, or email us to check availability and book the equipment for your event.

            </div> : ''
        }
      </div>
      <div className={styles.aligned}>
        <div className={styles.box} onClick={() => setAns(10)}>
          <p className={styles.question}>  What areas do you serve apart from Koramangala?</p>
          <Faq id={ans ===10} />
        </div>
        {
          ans === 10 ?
            <div className={styles.answer}>
           We provide projector, speaker, and LED wall rentals across Bangalore, including HSR Layout, Indiranagar, Whitefield, Jayanagar, and more.

            </div> : ''
        }
      </div>
    </div>
  )
}

export default FAQProjector
