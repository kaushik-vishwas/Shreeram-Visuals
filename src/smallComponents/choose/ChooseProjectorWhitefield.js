import React from 'react'
import styles from './choose.module.css'
import { Verify } from '../../components/Svg'
const ChooseProjectorWhitefield = () => {
  return (
    <div className={styles.container}>
      <h2>Why choose Shriram Visuals?</h2>
      {/* <p className={styles.title}>Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. Lorem ipsum dolor</p> */}
      <div className={styles.boxes}>
        <div className={styles.box}>
          <Verify />
          <p className={styles.subtitle}>Quality Equipment</p>
          <p className={styles.text}>We understand that high-quality equipment is essential for the success of any event. That’s why we only offer the best in class for all our rentals. From state-of-the-art projectors and projection screens to DJ setups, speakers, and audio equipment, every item in our inventory is carefully selected to ensure optimal performance. Whether you're planning a corporate presentation, a wedding, or a private party, we make sure your event is supported by reliable, top-tier equipment that guarantees a smooth experience.
          </p>
        </div>
        <div className={styles.box}>
          <Verify />
          <p className={styles.subtitle}>Convenience</p>
          <p className={styles.text}>Planning and managing an event can be a daunting task, which is why we strive to make your experience as convenient as possible. Our delivery, setup, and pickup services are designed to take the stress out of your event preparation. We take care of everything—from bringing the equipment to your venue, setting it up professionally, and making sure it functions flawlessly, to collecting it afterward. With Shriram Visuals, you can relax knowing that all technical details are in good hands, and you can focus on what matters most.

          </p>
        </div>
        <div className={styles.box}>
          <Verify />
          <p className={styles.subtitle}>Affordability</p>
          <p className={styles.text}>We believe that quality shouldn’t come with a hefty price tag. Shriram Visuals offers competitive pricing for all our rental services, making high-end event equipment accessible to everyone. Whether you're working with a tight budget or planning a grand celebration, we provide rental solutions that cater to all price ranges without ever compromising on the quality of our equipment. We work with you to find the most cost-effective options that meet your needs.

          </p>
        </div>
        <div className={styles.box}>
          <Verify />
          <p className={styles.subtitle}>Reliability</p>
          <p className={styles.text}>When it comes to event planning, timing is everything, and we take punctuality very seriously. With Shriram Visuals, you can trust us to deliver your rented equipment right on schedule and set everything up without delays. We are committed to providing professional service at every step, ensuring that all equipment is fully functional and ready to go. Our team is always on hand to assist with any questions or adjustments you might need throughout the event, giving you the peace of mind to enjoy a flawless experience.

          </p>
        </div>
        <div className={styles.box}>
          <Verify />
          <p className={styles.subtitle}>Tailored Solutions</p>
          <p className={styles.text}>Every event is unique, and that’s why we offer customized rental solutions tailored to your specific needs. Whether you are hosting an intimate wedding, a corporate conference, a grand party, or any other special event, Shriram Visuals provides the right mix of equipment to ensure your event shines. Our team takes the time to understand your vision and requirements, recommending the perfect equipment to match your theme, venue, and audience size. No matter the occasion, we’ve got the perfect solution to meet your needs.


          </p>
        </div>
      </div>
    </div>
  )
}

export default ChooseProjectorWhitefield
