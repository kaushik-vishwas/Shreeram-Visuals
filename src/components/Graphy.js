import React, { useEffect, useState } from 'react'
import Quality from '../smallComponents/quality/Quality'
import Testimonial from './../smallComponents/testimonial/Testimonial';
import Products, { SliderProduct } from '../smallComponents/products/Products';
import FAQ from './../smallComponents/faq/FAQ';
import Hero from '../smallComponents/hero/Hero';
import { Helmet } from 'react-helmet';

const Graphy = () => {
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
        <title>Photography and Videography Rental Services in Bangalore | Shriram Visuals</title>
        <meta name="description" content="Shriram Visuals provides top-tier Photography and Videography Rental Services in Bangalore. Capture every moment with high-quality equipment. Reserve your gear today!" />
        <meta name="keywords" content="Photography Rental Services in Bangalore, Videography Rental Services in Bangalore, Best Photography and Videography Rental Services in Bangalore, Photography and Videography Rental Services near Me." />
     <link rel="canonical" href="https://www.shriramvisuals.com/photography-and-videography-rental-services-in-bangalore" />
     <meta name="robots" content="index, follow" />
       
      </Helmet>
      <Hero
        title='Photography and Videography'
              tagh1="Photography and Videography Rental Services in Bangalore"
        Image='/assets/images/graphy.png' />
      <Quality
        header='Elevate your experience with just a click by renting top-tier equipment from Shriram Visuals.'
        Image='/assets/services/pv.jpg'
      >
        <p> Capture lasting memories of your Weddings, Corporate events, and personal celebrations from
          birthdays and anniversaries with our premium photography and videography rental services in
          Bangalore. If you are looking to preserve life’s precious moments with stunning visuals then look no
          further than Shriram Visuals. We offer exceptional photography and videography services to capture
          your events with a team of seasoned professionals and cutting-edge technology.</p> <br />
        <p> Our team boasts experienced photographers and videographers who have honed their skills to
          capture every detail with breath-taking clarity. We are recognized for our outstanding work.</p> <br />
        <p> <b>Live-spot mixing:</b> We will elevate your event further with our live spot mixing service, allowing you to
          experience the audio and visuals of your event synchronously, creating an experience for both yourself
          and your guests.</p> <br />
        <p> <b>Exquisite albums: </b>Cherish your memories forever with our luxurious custom albums. We meticulously
          design and handcraft each album using premium materials to customize event albums</p>
      </Quality>
      {/* <Projectors 
      topic='Photography & Videography'
      pr1='./assets/services/cam2.png'
      pr2='./assets/services/cam1.png'
      t1='Photography'
      t2='Videography'
      para1='Our range of branded projectors, including Dell, Epson, and Hitachi, deliver breathtaking color and white brightness ranging from 2700 to 3500 lumens, guaranteeing you sharp and crystal-clear images.'
      para2='Our range of branded projectors, including Dell, Epson, and Hitachi, deliver breathtaking color and white brightness ranging from 2700 to 3500 lumens, guaranteeing you sharp and crystal-clear images.'
      /><br className='styles' /> */}

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

export default Graphy
