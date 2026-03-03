import React, { useEffect, useState } from 'react'
import Quality from '../smallComponents/quality/Quality'
import Projectors from '../smallComponents/projectors/Projectors'
import Testimonial from './../smallComponents/testimonial/Testimonial';
import Products, { SliderProduct } from '../smallComponents/products/Products';
import FAQ from './../smallComponents/faq/FAQ';
import Hero from '../smallComponents/hero/Hero';
import { Helmet } from 'react-helmet';
const Lighting = () => {
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
        <title>Decoration Lights Rental Service in Bangalore | Stage Light Decorators Near Me</title>
        <meta name="description" content="Looking for decoration lights rental services in Bangalore? Shriram Visuals offers top-quality stage light decorators to create the perfect ambiance for your event. Rent vibrant and professional lighting solutions today!" />
        <meta name="keywords" content="Decoration Lights Rental Service in Bangalore, Stage Light Decorators, Best Decoration Lights Rental Service in Bangalore, Best Stage Light Decorators, Decoration Lights Rental Service, and Stage Light Decorators. " />
     <link rel="canonical" href="https://www.shriramvisuals.com/decoration-lights-rental-service-in-bangalore" />
     <meta name="robots" content="index, follow" />
      
      </Helmet>
      <Hero
            tagh1="Decoration Lights Rental Service in Bangalore"
        title='Lighting Rental'
        /* subtitle='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' */
        Image='/assets/images/lighting.png' />
      <Quality
        header='Elevate your experience with just a click by renting top-tier equipment from Shriram Visuals.'
        Image='/assets/quality/lighting.png'
      >
        <p>LED Parcan rental will seamlessly change colour and intensity with the music, creating a mesmerizing
          visual experience to create the perfect ambiance for concerts, live music events, weddings, social
          gatherings, corporate event theme parties, and nightclubs.</p> <br />
        <p>Rent Sharpe Beam Lights & Moving Heads in Bangalore to dazzle your audience creating an
          unforgettable experience as you can cut through any environment with these powerful Sharpe beams
          and moving headlights for stunning visuals and aerial effects synced to your music.</p> <br />
        <p><b>Decoration lights on rent:</b> Make your housewarming or wedding celebrations memorable and picture perfect with Shriram Visuals' exquisite decoration lights rental service. Whether you are transforming
          your home into a warm and inviting space for a housewarming party or creating an ambiance on your
          lawn to make your celebration truly unforgettable.</p>
      </Quality>
      <Projectors
        topic='Lighting'
        pr1='/assets/services/pr21.png'
        pr2='/assets/services/pr12.png'
        pr3='/assets/services/pr23.png'
        t1='LED Parcans'
        t2='Sharpee'
        t3='Decoration lights'
        para1='LED Parcan rental will seamlessly change colour and intensity with the music, creating a mesmerizing 
      visual experience to create the perfect ambiance for concerts, live music events, weddings, social 
      gatherings, corporate event theme parties, and nightclubs. '
        para2='Rent Sharpe Beam Lights & Moving Heads in Bangalore to dazzle your audience creating an 
      unforgettable experience as you can cut through any environment with these powerful Sharpe beams 
      and moving headlights for stunning visuals and aerial effects synced to your music.'
        para3='Make your housewarming or wedding celebrations memorable and picture perfect with Shriram Visuals exquisite decoration lights rental service. Whether you are transforming 
      your home into a warm and inviting space for a housewarming party or creating an ambiance on your 
      lawn to make your celebration truly unforgettable. '
      />

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

export default Lighting
