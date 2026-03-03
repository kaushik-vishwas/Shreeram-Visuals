import React, { useEffect, useState } from 'react'
import Quality from '../smallComponents/quality/Quality'
import Testimonial from './../smallComponents/testimonial/Testimonial';
import Products, { SliderProduct } from '../smallComponents/products/Products';
import FAQ from './../smallComponents/faq/FAQ';
import Hero from '../smallComponents/hero/Hero';
import { Helmet } from 'react-helmet';

const Baloon = () => {
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
        <title>Flower and Balloon Decorations for Rent in Bangalore | Shriram Visuals</title>
        <meta name="description" content="Are you looking for stunning Flower and Balloon Decorations for Rent in Bangalore? Shriram Visuals provides creative and customized decoration services to make your occasion unforgettable." />
        <meta name="keywords" content="Flower Decorations for Rent in Bangalore, Balloon Decorations for Rent in Bangalore, Best Flower and Balloon Decorations for Rent in Bangalore, Flower Decorations for Rent, Balloon Decorations for Rent near Me." />
     <link rel="canonical" href="https://www.shriramvisuals.com/flower-and-balloon-decorations-for-rent-in-bangalore" />
     <meta name="robots" content="index, follow" />
       
      </Helmet>
      <Hero
        title='Flower and Balloon Decorations'
              tagh1="Flower and Balloon Decorations for Rent in Bangalore"
        Image='/assets/images/balloon.png' />
      <Quality
        header='Create a captivating Bangalore event: Flower and Balloon Decor'
        Image='/assets/services/flower.png'
      >
        <p>Are you planning a birthday party, baby shower, naming ceremony, anniversary, inauguration
          ceremony, or festive celebration in Bangalore? Transform your venue with vibrant and eye-catching
          flower and balloon decorations from Shriram Visuals, your reliable balloon decoration service.</p> <br />
        <p>We create visual delight that will leave a lasting impression on your guests. At Shriram Visuals, we
          understand the power of stylish and creative event decoration. With years of experience and a team
          of talented and passionate professionals, we will turn your special occasion into something
          extraordinary.</p> <br />
        <p>Beyond decorations, we offer everything you need for a successful event. Rent speakers for sound
          that elevates your party atmosphere, and impress your guests with delicious catering services to suit
          your taste and budget with spacious tents and tables for a comfortable and protected event space.</p>
        <p>Contact Shriram Visuals for a personalized decoration quote, and let us help you create unforgettable
          celebrations.</p>
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

export default Baloon
