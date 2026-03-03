import React, { useState } from 'react'
import styles from './faq.module.css'
import { Faq } from '../../components/Svg'
const FAQWhitefield = () => {
  const [ans, setAns] = useState(0)
  return (
    <div className={styles.container}>
      <h2>Frequently Asked Questions</h2>

      <br />
      <div className={styles.aligned}>
        <div className={styles.box} onClick={() => setAns(1)}>
          <p className={styles.question}> What types of event equipment do you offer for rent?</p>
          <Faq id={ans === 1} />
        </div>
        {
          ans === 1 ?
            <div className={styles.answer}>
             At Shriram Visuals, we offer a wide range of high-quality event equipment rentals, including projectors, projector screens, DJ setups, DJ speakers, JBL speakers, sound systems, lighting equipment, and other audio-visual equipment. Whether it's a corporate event, wedding, party, or conference, we have the equipment you need to make your event successful.
            </div> : ''
        }
      </div>
      <div className={styles.aligned}>
        <div className={styles.box} onClick={() => setAns(2)}>
          <p className={styles.question}>How do I book equipment for my event?
          </p>
          <Faq id={ans === 2} />
        </div>
        {
          ans === 2 ?
            <div className={styles.answer}>
             Booking equipment is easy with Shriram Visuals. Simply get in touch with us through our contact details, and we’ll help you choose the right equipment based on your event's requirements. We’ll provide a quote, schedule delivery, and ensure everything is set up on time. You can also reach out via email or phone to discuss your needs in detail.
             </div> : ''
        }
      </div>
      <div className={styles.aligned}>
        <div className={styles.box} onClick={() => setAns(3)}>
          <p className={styles.question}>What is included in the rental service?
          </p>
          <Faq id={ans === 3} />
        </div>
        {
          ans === 3 ?
            <div className={styles.answer}>
              Our rental services include the delivery, setup, and pickup of all equipment, along with any necessary support during the event. We ensure that everything is functioning properly and assist with any adjustments or technical issues that may arise. Our team is available to provide support, so you can focus on your event without worrying about the technical side.

            </div> : ''
        }
      </div>
      <div className={styles.aligned}>
        <div className={styles.box} onClick={() => setAns(4)}>
          <p className={styles.question}>Do you provide support if there’s an issue with the equipment during the event?
          </p>
          <Faq id={ans === 4} />
        </div>
        {
          ans === 4 ?
            <div className={styles.answer}>
             Yes! We provide full customer support throughout your event. If there’s any issue with the rented equipment, our team is available to assist you immediately. We ensure that everything runs smoothly and address any technical difficulties to avoid disruptions during your event.


            </div> : ''
        }
      </div>
      <div className={styles.aligned}>
        <div className={styles.box} onClick={() => setAns(5)}>
          <p className={styles.question}> Are there any additional charges for delivery and setup?
          </p>
          <Faq id={ans === 5} />
        </div>
        {
          ans === 5 ?
            <div className={styles.answer}>
             Delivery, setup, and pickup are generally included in our rental service. However, depending on the location and size of your event, there may be additional charges for transportation or setup. We will provide a transparent breakdown of all costs when you book, so there are no surprises.
             </div> : ''
        }
      </div>
    </div>
  )
}

export default FAQWhitefield
