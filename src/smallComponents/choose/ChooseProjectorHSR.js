import React from 'react'
import styles from './choose.module.css'
import { Verify } from '../../components/Svg'
const ChooseProjectorHSR = () => {
  return (
    <div className={styles.container}>
      <h2>Why choose Shriram Visuals?</h2>
      {/* <p className={styles.title}>Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. Lorem ipsum dolor</p> */}
      <div className={styles.boxes}>
        <div className={styles.box}>
          <Verify />
          <p className={styles.subtitle}>High-Quality Projectors </p>
          <p className={styles.text}>We offer a wide range of premium projectors including HD, Full HD, and 4K resolution models. Whether it’s a corporate meeting or a casual movie night, our projectors ensure crisp visuals and clear image projection, even in well-lit environments.
          </p>
        </div>
        <div className={styles.box}>
          <Verify />
          <p className={styles.subtitle}>Affordable & Flexible Rental Plans</p>
          <p className={styles.text}>We believe quality shouldn’t come at a hefty price. Our rental packages are competitively priced and customizable according to your duration be it hourly, daily, or weekly rentals ensuring you get the best value for your money.
          </p>
        </div>
        <div className={styles.box}>
          <Verify />
          <p className={styles.subtitle}>Projector Screen Rentals Available </p>
          <p className={styles.text}>To give you a complete viewing solution, we also provide projector screens that match the size and resolution of your chosen projector. This ensures a seamless and immersive visual experience without needing to source screens elsewhere.
          </p>
        </div>
        <div className={styles.box}>
          <Verify />
          <p className={styles.subtitle}>Timely Delivery & On-Site Setup </p>
          <p className={styles.text}>Our trained technicians ensure hassle-free delivery, installation, and testing at your venue. We value your time and make sure the setup is completed well in advance so your event runs smoothly from start to finish.
          </p>
        </div>
        <div className={styles.box}>
          <Verify />
          <p className={styles.subtitle}>Expert Technical Support </p>
          <p className={styles.text}>Facing a technical glitch during your event? Our support team is just a call away. We offer round-the-clock assistance to troubleshoot any issues, ensuring your event proceeds without interruptions.
          </p>
        </div>
        <div className={styles.box}>
          <Verify />
          <p className={styles.subtitle}>Tailored Solutions for Every Occasion</p>
          <p className={styles.text}>Whether you’re organizing a small family gathering or a large-scale corporate event, we offer customized solutions to suit your audience size, venue type, and content display requirements.
          </p>
        </div>
        <div className={styles.box}>
          <Verify />
          <p className={styles.subtitle}>Trusted by Clients Across HSR Layout </p>
          <p className={styles.text}>With years of experience and a strong track record, we have earned the trust of individuals, event organizers, and businesses throughout HSR Layout. Our commitment to quality and customer satisfaction sets us apart.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ChooseProjectorHSR
