import React, { useEffect, useState } from 'react'
import Quality from '../smallComponents/quality/Quality'
import Testimonial from './../smallComponents/testimonial/Testimonial';
import Products, { SliderProduct } from '../smallComponents/products/Products';
import FAQ from './../smallComponents/faq/FAQ';
import Hero from '../smallComponents/hero/Hero';
import { Helmet } from 'react-helmet';

const LED = () => {
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
        <title>LED TV and Wall Rental Services in Bangalore | LED TV for Rent Near Me</title>
        <meta name="description" content="Shriram Visuals offers top-notch LED TV and LED Wall Rental Services in Bangalore. Perfect for events and presentations with high-quality screens and competitive rates. Book now!" />
        <meta name="keywords" content="Led TV Rental Services in Bangalore, Led TV for Rent near Me, Best Led TV Rental Services in Bangalore, Best Led TV for Rent near Me, Led TV Rental Services,  LED Wall Rental and Led TV for Rent." />
     <link rel="canonical" href="https://www.shriramvisuals.com/led-tv-and-wall-rental-services-bangalore" />
     <meta name="robots" content="index, follow" />
      
      </Helmet>
      <Hero
        title='LED TV Rental'
              tagh1="LED TV Rental Services in Bangalore"
        Image='/assets/images/led.png' />
      <Quality
        header='Elevate your experience with just a click by renting top-tier equipment from Shriram Visuals.'
        Image='/assets//services/tv2.png'
        p1="Shriram Visuals provides LED TV rental services in Bangalore, catering to various needs such as 
    gatherings, presentations, and events, all at reasonable prices. Our inventory boasts a diverse 
    selection of LED TVs suitable for occasions including corporate meetings, wedding receptions, and 
    private parties. 
    "
        p2="Our LED TV rental service is perfect to complement your venue size and audience preferences 
    seamlessly."
        p3="We offer LED TVs for rent in sizes ranging from 40 inches to 75 inches, ensuring that you find the 
    optimal display size for your event. "
      >
        <p>Shriram Visuals provides LED TV rental services in Bangalore, catering to various needs such as
          gatherings, presentations, and events, all at reasonable prices. Our inventory boasts a diverse
          selection of LED TVs suitable for occasions including corporate meetings, wedding receptions, and
          private parties. </p> <br />
        <p>Our LED TV rental service is perfect to complement your venue size and audience preferences
          seamlessly.</p>
        <p>We offer LED TVs for rent in sizes ranging from 40 inches to 75 inches, ensuring that you find the
          optimal display size for your event. </p>
      </Quality>
      

      
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

export default LED
