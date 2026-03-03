import React, { useState } from 'react'
import styles from './faq.module.css'
import { Faq } from '../../components/Svg'
const FAQMarathahalli = () => {
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
              We offer a variety of projectors, including standard and high-definition models, suitable for different event types such as presentations, conferences, and movie nights. You can choose from options based on your brightness, resolution, and screen size requirements.

            </div> : ''
        }
      </div>
      <div className={styles.aligned}>
        <div className={styles.box} onClick={() => setAns(2)}>
          <p className={styles.question}>How do I book DJ equipment for my event?</p>
          <Faq id={ans === 2} />
        </div>
        {
          ans === 2 ?
            <div className={styles.answer}>
             Booking DJ equipment is easy! Simply contact us through our website or phone, specify the equipment you need, the date and time of your event, and we will take care of the rest. We’ll confirm availability and provide you with a customized quote based on your requirements.
             </div> : ''
        }
      </div>
      <div className={styles.aligned}>
        <div className={styles.box} onClick={() => setAns(3)}>
          <p className={styles.question}>Do you offer delivery and setup services?
          </p>
          <Faq id={ans === 3} />
        </div>
        {
          ans === 3 ?
            <div className={styles.answer}>
             Yes! We provide on-time delivery, setup, and even technical support during your event. Our team will ensure everything is working perfectly so you can focus on enjoying the event.

            </div> : ''
        }
      </div>
      <div className={styles.aligned}>
        <div className={styles.box} onClick={() => setAns(4)}>
          <p className={styles.question}>What is the rental duration?
          </p>
          <Faq id={ans === 4} />
        </div>
        {
          ans === 4 ?
            <div className={styles.answer}>
              Rental durations are flexible! You can rent our equipment for a few hours, a day, or even multiple days. Simply let us know the duration of your event, and we’ll provide a rental package that suits your needs.
            </div> : ''
        }
      </div>
      <div className={styles.aligned}>
        <div className={styles.box} onClick={() => setAns(5)}>
          <p className={styles.question}>What happens if the equipment is damaged during the rental period?
          </p>
          <Faq id={ans === 5} />
        </div>
        {
          ans === 5 ?
            <div className={styles.answer}>
              We ensure our equipment is well-maintained before delivery, but if any damage occurs during the rental period, we ask that you inform us immediately. Depending on the nature of the damage, there may be a repair or replacement fee, which will be clearly communicated upfront in the rental agreement.
              </div> : ''
        }
      </div>
    </div>
  )
}

export default FAQMarathahalli
