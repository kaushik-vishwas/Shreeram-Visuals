import React from 'react'
import styles from './choose.module.css'
import { Verify } from '../../components/Svg'
const Choose = () => {
  return (
    <div className={styles.container}>
      <h2>Why choose Shriram Visuals?</h2>
      {/* <p className={styles.title}>Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. Lorem ipsum dolor</p> */}
      <div className={styles.boxes}>
        <div className={styles.box}>
          <Verify />
          <p className={styles.subtitle}>Complete solution</p>
          <p className={styles.text}>One-stop solution for all your event needs. Shriram Visuals is an experience in
            offering a comprehensive solution for all kinds of events for corporate or personal celebrations that
            starts from projector rentals, branded premium speakers for rent either indoor or outdoor for any
            size of audience, stage setup along with capturing all the beautiful moments through photography
            and videography that can be re-lived anytime, skilled DJs and delicious catering services. </p>
        </div>
        <div className={styles.box}>
          <Verify />
          <p className={styles.subtitle}>Experience</p>
          <p className={styles.text}>With years of experience and successfully executing small and large events for
            corporate and personal events, we provide a seamless customer experience. We understand that
            your event is more than just a gathering, it’s all about lasting memories. Our team of dedicated
            professionals is passionate about exceeding expectations as we focus on attention to detail
            throughout the event.
          </p>
        </div>
        <div className={styles.box}>
          <Verify />
          <p className={styles.subtitle}>Quality & Pricing</p>
          <p className={styles.text}>Shriram Visuals maintains its reputation with good quality branded and premium equipment followed
            by competitive pricing in the industry, resulting in long-lasting business relationships. Our vision is
            not to compromise on quality and to be flexible in pricing to prioritize customer needs. Example: If
            you are looking for speakers on rent, then it can be easily cross-verified by yourself using the speaker
            brand and model number. <br />
            Are you looking for a perfect event? Let Shriram Visuals handle the rest with three easy steps! <br /> <br />
            If you're unsure about what you need, don't worry! We're here to guide you. Tell us about your
            event, and we'll recommend the perfect equipment and services to make it unforgettable.
            To get started, reach out to us. You can contact us through the phone number or text us for more
            details. <br /> <br />
            Once you're in touch, we'll handle the rest. From confirming the order to coordinating and
            communicating with you, we'll take care of everything so you can focus on your event. You won't
            need to follow up with us until your event is complete.

          </p>
        </div>
      </div>
    </div>
  )
}

export default Choose
