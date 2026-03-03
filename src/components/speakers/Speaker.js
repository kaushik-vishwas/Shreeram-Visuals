import React, { useEffect, useState } from 'react'
import Hero from '../../smallComponents/hero/Hero'
import Quality from '../../smallComponents/quality/Quality'
import Projectors from '../../smallComponents/projectors/Projectors'
import Testimonial from './../../smallComponents/testimonial/Testimonial';
import Products, { SliderProduct } from '../../smallComponents/products/Products';
import FAQ from './../../smallComponents/faq/FAQ';
import styles from '../spare.module.css';
import { Helmet } from 'react-helmet';


const Speaker = () => {
  const [isSmallerDevice, setIsSmallerDevice] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallerDevice(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
     <Helmet>
        <title>Premium and JBL Speakers on Rentals in Bangalore | Budget-Friendly Speakers Near Me</title>
        <meta name="description" content="Are you looking for Budget-Friendly Speakers Near Me? Then no worries Shriram Visuals is one of the most famous Premium and JBL Speaker Rentals Service Providers in Bangalore." />
        <meta name="keywords" content="Premium Speaker Rentals in Bangalore,  Budget-Friendly Speakers near Me, Best Premium Speaker Rentals in Bangalore,  Best Budget-Friendly Speakers near Me, JBL Speakers on Rent, Premium Speaker Rentals and Budget-Friendly Speakers. " />
     <link rel="canonical" href="https://www.shriramvisuals.com/premium-speaker-rentals-in-bangalore" />
     <meta name="robots" content="index, follow" />
       
      </Helmet>
      <Hero
        title='Speakers on Rent'
        tagh1="Premium Speaker Rentals in Bangalore"
        /* subtitle='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' */
        Image='/assets/images/dj.png' />
      <Quality
        header='Elevate your experience with just a click by renting top-tier equipment from Shriram Visuals.'
        Image='/assets/quality/djs.png'
        p1="At Shriram Visuals, we believe that great sound can make any event unforgettable. That's why we 
    offer premium speaker rentals in Bangalore to help you create an immersive audio experience that 
    your audience will remember. "
        p2="We only work with renowned brands like JBL and QSC to ensure that our speakers deliver crystal, clear sound quality that will elevate your event to the next level. Our extensive speaker selection 
    allows you to choose the perfect system for any occasion, whether it's a small house party or a large 
    gathering of over 1,000 people. 
    "
        p3="At Shriram Visuals, we don't settle for average. We are committed to providing unmatched sound 
    quality that will leave a lasting impression on your audience. So why wait? Contact us today to 
    discover our range of high-quality speakers for your next event. "
  /*   p4="I've used 'projector on rent' as a keyword in a way that fits naturally into the content. Please use the other keywords across different sections or pages of your website as appropriate."
     */ >
        <p>At Shriram Visuals, we believe that great sound can make any event unforgettable. That's why we
          offer premium speaker rentals in Bangalore to help you create an immersive audio experience that
          your audience will remember.</p> <br />
        <p>We only work with renowned brands like JBL and QSC to ensure that our speakers deliver crystal, clear sound quality that will elevate your event to the next level. Our extensive speaker selection
          allows you to choose the perfect system for any occasion, whether it's a small house party or a large
          gathering of over 1,000 people</p> <br />
        <p>At Shriram Visuals, we don't settle for average. We are committed to providing unmatched sound
          quality that will leave a lasting impression on your audience. So why wait? Contact us today to
          discover our range of high-quality speakers for your next event. </p>
      </Quality>

      <Projectors
        topic='Speakers'
        pr1='/assets/services/pr01.png'
        pr2='/assets/services/pr02.png'
        pr3='/assets/services/jbl.png'
        pr4='/assets/services/pr03.png'
        pr5='/assets/services/pr05.png'
        pr6='/assets/services/sp.png'
        t1='JBL 18 inch Subwoofer'
        t2='JBL PRX915 Powered Two-Way PA Loudspeakers '
        t3='JBL PRX715 Powered Two-Way PA Loudspeakers '
        t4='QSC K12.2 Powered Two Way active loudspeakers'
        t5='Hand and Collar Mic Rentals'
        t6='Budget friendly speakers'
        para1={<div>Introducing the JBL 18-inch Subwoofer expertly crafted to use JBL's cutting-edge acoustic
          advancements. This subwoofer is equipped with a state-of-the-art driver powered by a high-efficiency Class D amplifier, providing a crystal-clear and well-defined bass with a smooth low frequency extension even when playing at maximum volume.
          <br /><br />
          Features: <br />
          - Power: 2000 watts peak/1000 watts RMS each <br />
          - Max SPL: 134 dB </div>}

        para2={<div>The JBL PRX915, powered by loudspeakers and subwoofers, takes professional portable PA
          performance to a new level with advanced acoustics. <br /><br />
          Features: <br />
          Power: 2000 watts peak/1000 watts RMS each <br />
          Max SPL: 133 dB</div>}

        para3={<div>The 2-way 15 is a popular portable PA loudspeaker, offering the perfect balance between size and
          performance. <br /><br />
          Features: <br />
          Power: 1500 watts each <br />
          Max SPL: 136 dB</div>}
        para4={<div>The QSC K12.2 is a 2000-watt powered two-way active loudspeaker that offer superior audio
          performance and an elegant design, perfect for demanding audio professionals. <br /><br />
          Features: <br />
          2000 Watts Class D amplifier each speaker <br />
          Max SPL: 132 dB
        </div>}

        para5={<div>Shriram Visuals offers professional handheld and collar mic rentals to ensure crystal-clear sound and
          seamless communication for any occasion. <br /><br />
          Our handheld and collar (lapel) microphones are perfect for speeches, performances, and interactive
          sessions where presenters need mobility and control. With ergonomic design and superior sound
          quality, our handheld mics deliver clear and natural audio reproduction and capture every word with
          precision.
        </div>}

        para6={<div>
          Shriram Visuals offers affordable speakers for rent, perfect for small corporate or personal events.
          Browse our collection of well-known brands to elevate your audio experience while staying within
          budget.
        </div>}

      /><div className={styles.spacing}></div>
      {/*  <Products className={styles.lgview}/>
      <SliderProduct className={styles.smview} /> */}
      {isSmallerDevice ? (
        <Products />
      ) : (
        <SliderProduct />
      )}
      <Testimonial />
      <FAQ />
    </>
  )
}

export default Speaker
