import React, { useState } from 'react'
import styles from './faq.module.css'
import { Faq } from '../../components/Svg'
const FAQHSR = () => {
  const [ans, setAns] = useState(0)
  return (
    <div className={styles.container}>
      <h2>Frequently Asked Questions</h2>

      <br />
      <div className={styles.aligned}>
        <div className={styles.box} onClick={() => setAns(1)}>
          <p className={styles.question}>What types of projectors do you offer on rent? </p>
          <Faq id={ans === 1} />
        </div>
        {
          ans === 1 ?
            <div className={styles.answer}>
             We offer a wide variety of projectors including HD, Full HD, and 4K resolution models. You can choose from LED, LCD, and DLP projectors based on your event requirements ideal for corporate meetings, movie nights, presentations, and more.
            </div> : ''
        }
      </div>
      <div className={styles.aligned}>
        <div className={styles.box} onClick={() => setAns(2)}>
          <p className={styles.question}>Can I rent a projector along with a screen?</p>
          <Faq id={ans === 2} />
        </div>
        {
          ans === 2 ?
            <div className={styles.answer}>
            Yes, absolutely! At Shriram Visuals, we provide projector screen rentals along with projectors. Our screens come in different sizes and formats to match the projector’s output and enhance your viewing experience.
            </div> : ''
        }
      </div>
      <div className={styles.aligned}>
        <div className={styles.box} onClick={() => setAns(3)}>
          <p className={styles.question}>Do you provide delivery and installation services? 
          </p>
          <Faq id={ans === 3} />
        </div>
        {
          ans === 3 ?
            <div className={styles.answer}>
             Yes, we offer doorstep delivery and on-site installation for all projector rentals. Our technicians will ensure a smooth setup and provide basic training so you can operate the equipment with ease.

            </div> : ''
        }
      </div>
      <div className={styles.aligned}>
        <div className={styles.box} onClick={() => setAns(4)}>
          <p className={styles.question}>How is the rental cost calculated?
          </p>
          <Faq id={ans === 4} />
        </div>
        {
          ans === 4 ?
            <div className={styles.answer}>
              Our rental charges are flexible and depend on factors like the projector model, rental duration (hourly/daily/weekly), screen requirement, and location. Contact us for a customized quote based on your needs.
              </div> : ''
        }
      </div>
      <div className={styles.aligned}>
        <div className={styles.box} onClick={() => setAns(5)}>
          <p className={styles.question}>What if I face a technical issue during the event?
          </p>
          <Faq id={ans === 5} />
        </div>
        {
          ans === 5 ?
            <div className={styles.answer}>
             We provide 24/7 technical support for all rentals. If you experience any issues during your event, our team is just a call away and will assist you promptly to ensure minimal disruption.
             </div> : ''
        }
      </div>
    </div>
  )
}

export default FAQHSR
