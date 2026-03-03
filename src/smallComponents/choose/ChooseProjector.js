import React from 'react'
import styles from './choose.module.css'
import { Verify } from '../../components/Svg'
const ChooseProjector = () => {
  return (
    <div className={styles.container}>
      <h2>Why choose Shriram Visuals?</h2>
      {/* <p className={styles.title}>Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. Lorem ipsum dolor</p> */}
      <div className={styles.boxes}>
        <div className={styles.box}>
          <Verify />
          <p className={styles.subtitle}>High-Quality Equipment</p>
          <p className={styles.text}>At Shriram Visuals, we offer high-quality audio-visual equipment to enhance your event experience. Our inventory includes top brands like JBL, Epson, BenQ, and Sony, ensuring superior sound clarity and stunning visuals. Whether you need a projector for a business presentation, JBL speakers for a party, or an LED wall for a large-scale event, our state-of-the-art equipment delivers exceptional performance and reliability. We ensure that every rental meets industry standards, providing you with the best-in-class technology for a flawless event. </p>
        </div>
        <div className={styles.box}>
          <Verify />
          <p className={styles.subtitle}>Affordable Rental Packages</p>
          <p className={styles.text}>At Shriram Visuals, we offer affordable rental packages tailored to suit all budgets without compromising on quality. Whether you're hosting a corporate seminar, wedding, private party, or live event, our cost-effective pricing ensures you get the best projectors, JBL speakers, LED TV walls, and DJ equipment at competitive rates. We provide customized rental plans based on your specific needs, ensuring you pay only for what you require. Experience premium audio-visual solutions at budget-friendly prices with Shriram Visuals—your trusted partner for event rentals in Bangalore.
          </p>
        </div>
        <div className={styles.box}>
          <Verify />
          <p className={styles.subtitle}>Professional Setup & Support</p>
          <p className={styles.text}>At Shriram Visuals, we provide professional setup and expert technical support to ensure a seamless audio-visual experience for your event. Our trained technicians handle everything—from equipment installation and configuration to troubleshooting and on-site assistance—so you can focus on your event without any worries. Whether it's a corporate conference, wedding, live concert, or private gathering, we ensure hassle-free operation and superior performance. With our dedicated support team, you get smooth execution, high-quality sound, and crystal-clear visuals for a truly memorable experience.

          </p>
        </div>
        <div className={styles.box}>
          <Verify />
          <p className={styles.subtitle}>Flexible Rental Plans</p>
          <p className={styles.text}>At Shriram Visuals, we offer flexible rental plans to meet the unique needs of every event. Whether you need a projector, JBL speakers, LED TV wall, or DJ equipment for just a few hours, a full day, or an extended period, we have customized rental options to suit your requirements. Our hourly, daily, and long-term rental plans ensure affordability and convenience, allowing you to choose the best package for your budget. With hassle-free booking and seamless equipment returns, we make renting high-quality AV equipment easy and stress-free for all types of events.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ChooseProjector
