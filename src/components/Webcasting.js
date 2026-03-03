import React, { useEffect, useState } from 'react'
import Quality from '../smallComponents/quality/Quality'
import Testimonial from './../smallComponents/testimonial/Testimonial';
import Products, { SliderProduct } from '../smallComponents/products/Products';
import FAQ from './../smallComponents/faq/FAQ';
import Hero from '../smallComponents/hero/Hero';
import { Helmet } from 'react-helmet';

const Webcasting = () => {
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
        <title>Live Streaming Webcasting for Rent in Bangalore | Shriram Visuals</title>
        <meta name="description" content="Looking for professional Live Streaming and Webcasting Services in Bangalore? Shriram Visuals offers top-notch rental solutions with high-quality equipment and expert support." />
        <meta name="keywords" content="Live Streaming Webcasting for Rent in Bangalore, Best Live Streaming Webcasting for Rent in Bangalore, Live Streaming Webcasting for Rent near Me." />
     <link rel="canonical" href="https://www.shriramvisuals.com/live-streaming-webcasting-for-rent-in-bangalore" />
     <meta name="robots" content="index, follow" />
       
      </Helmet>
      <Hero
        title='Live Streaming '
              tagh1="Live Streaming Webcasting for Rent in Bangalore"
        Image='/assets/services/stream2.png' />
      <Quality
        header='Expert live streaming services for webinars and events'
        Image='/assets/services/stream.png'
      >
        <p>Planning a live event, presentation, or conference in Bangalore and want to broadcast it to a larger
          audience? Stream your audio and video flawlessly to engage your audience anywhere in the world
          with live streaming.</p>
        <p>Expand your business, amplify your reach, and achieve your goals globally through live streaming.
          Shriram Visuals offers top-tier professional live event streaming services in Bangalore. Host live events
          on premier platforms and enjoy tailored services for a seamless broadcasting experience.</p> <br />
        <p>With Shriram Visuals, you have access to cutting-edge technology, State-of-the-art equipment, and
          skilled professionals dedicated to delivering high-quality streaming experiences</p>
        <p>We specialize in broadcasting events, including team-building activities, trade shows, conferences,
          product launches, business meetings, workshops, and more, so partner with us to elevate your virtual
          engagement and reach your audience effectively.</p>
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

export default Webcasting
