import React from 'react'
import styles from './steps.module.css'
const Steps = () => {
  return (
    <div className={styles.container}>
      {/* <img className={styles.bg} src="/assets/images/Group4.png" alt="" /> */}
      <div className={styles.maincontainer}>
        <img src="/assets/Event.webp" className={styles.mainImg} alt='shriramvisuals' />
        <div className={styles.right}>
          <h2>3 Easy steps to your perfect event</h2>
          <p className={styles.title}>Let Shriram Visuals Handle the Rest!</p>
          <div>
            <div className={styles.box}>
              <h3>Unsure what you need? No Worries!</h3>
              <p>We are here to guide you. Tell us about your event, and we will recommend the perfect equipment and services to make it unforgettable.</p>
              <span className={styles.count}>01</span>
            </div>
            <div className={styles.box} style={{ marginTop: '-20px' }}>
              <h3>Reach out so we can chat!</h3>
              <p>We are just a phone call or message away. Contact us through phone number or text us for more details.</p>
              <span className={styles.count}>02</span>
            </div>
            <div className={styles.box} style={{ marginTop: '-20px' }}>
              <h3>We'll handle, you celebrate.</h3>
              <p>Shriram Visuals manages order and communication, no follow-ups needed until your event concludes.</p>
              <span className={styles.count}>03</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps
