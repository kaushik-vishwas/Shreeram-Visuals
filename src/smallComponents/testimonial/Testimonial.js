import React, { useRef } from 'react'
import styles from './Testimonial.module.css'
import { Comma, Next, Prev, Star } from '../../components/Svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
    const sliderRef = useRef(null)
    const sliderSettings = {
        // removes default buttons
      
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        pauseOnHover: false,
        arrows: false,
        responsive: [
            {
              breakpoint: 1023,
              settings: {
               slidesToShow: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
               slidesToShow: 1,
              }
             }
          ]
    }
    return (
        <div className={styles.container}>
            <h4>Testimonial</h4>
            <h2>What people are saying</h2>
            <Slider ref={sliderRef} {...sliderSettings}>
            <div>
                <div className={styles.maincontainer}>
                   
                    <div className={styles.content}>
                        <br />
                        <span>
                        <Star /><Star /><Star /><Star /><Star />
                        </span>
                        <p>“Thank you for the excellent service rendered, high value, and appreciate the efforts put forth for 
    the inauguration. Final confirmation was given near the event date, and you had very little time to 
    organize along with the Ram Mandir coordination that was in the pipeline for you. It was great 
    teamwork; we received positive feedback, and the event was welcomed well by all the employees. 
    - Timely planning of the whole setup. 
    - Few last-minute requests which were positively accommodated and executed.” – </p>
                       
                        <span className={styles.author}>Reshma</span>
                        <br />
                        <span className={styles.role}>Admin Manager</span>
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.maincontainer}>
                  
                    <div className={styles.content}>
                        <br />
                        <span>
                        <Star /><Star /><Star /><Star /><Star />
                        </span>
                        <p>“I am incredibly happy with how things turned out during PDI. Thank you very much for your hard 
    work, flexibility, and diligence in pulling a successful event together. We had great feedback from 
    our colleagues, it is considered a massive success all around. That's quite an achievement, given the 
    complexity of what we pulled together. It was a pleasure working with Shriram Visuals. We hope to 
    have the opportunity to work again in the future.”</p>
                        <br /><br />
                        <span className={styles.author}>Chankith Jain</span>
                        <br />
                        <span className={styles.role}>Engineering Manager</span>
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.maincontainer}>
                 
                    <div className={styles.content}>
                    
                        <br />
                        <span>
                        <Star /><Star /><Star /><Star /><Star />
                        </span>
                        <p>“I recently hired Shriram Visuals for my event, and I must say they exceeded all of my expectations 
    from the moment I contacted them they were incredibly attentive and professional for my needs. 
    They provided top-notch JBL speakers for rent and lighting arrangements, creating a perfect 
    ambiance for my event. The flower decorations added a touch of elegance that truly impressed 
    everyone. The videography and photography captured every moment beautifully. Thank you very 
    much for your exceptional services. I highly recommend it for any event. FIVE STARS”</p>
                        <br /><br />
                        <span className={styles.author}>Somshekar</span>
                        <br />
                        <span className={styles.role}>Senior Director</span>
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.maincontainer}>
                
                    <div className={styles.content}>
                       {/*  <Comma /> */}
                        <br />
                        <span>
                        <Star /><Star /><Star /><Star /><Star />
                        </span>
                        <p>“We are thrilled with the exceptional service from Shriram Visuals! Their expertise at our Bank 
inauguration event in Bangalore. The stage setup, clear sound from the speakers, and the balloon 
decoration made the event colourful. Shriram Visuals will be our trusted partner for all future events 
to hire speakers or any other setup. We highly recommend for their outstanding services.”</p>
                        <br /><br />
                        <span className={styles.author}>Anu</span>
                        <br />
                        <span className={styles.role}>Senior Manager</span>
                    </div>
                </div>
            </div>
            </Slider>
            <div className={styles.centered}>
                    <Prev handleClick={() =>sliderRef.current?.slickPrev()} /><Next forward={() =>sliderRef.current?.slickNext()} />
            </div>
        </div>
    )
}

export default Testimonial
