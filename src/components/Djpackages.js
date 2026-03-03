import React, { useEffect, useState } from 'react'
import Quality from '../smallComponents/quality/Quality'
import Projectors from '../smallComponents/projectors/Projectors'
import Testimonial from '../smallComponents/testimonial/Testimonial';
import Products, { SliderProduct } from '../smallComponents/products/Products';
import FAQ from '../smallComponents/faq/FAQ';
import Hero from '../smallComponents/hero/Hero';
import { Helmet } from 'react-helmet';
const Djpackages = () => {
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
        <title>DJ Packages For Rent | Professional DJ Equipment Packages in Bangalore</title>
        <meta name="description" content="Get the party started with Shriram Visuals DJ Packages For Rent in Bangalore. We are the top-notch equipment and mixers, Our packages ensure a memorable event. Book now!" />
        <meta name="keywords" content="Dj Packages for Rent, Professional Dj Equipment Packages in Bangalore, Best Dj Packages for Rent, Best Professional Dj Equipment Packages in Bangalore, Dj Packages and Professional Dj Equipment Packages near Me." />
     <link rel="canonical" href="https://www.shriramvisuals.com/dj-packages-for-rent" />
     <meta name="robots" content="index, follow" />
       
      </Helmet>
      <Hero
        title='DJ Packages '
              tagh1="DJ Packages For Rent"
        Image='/assets/services/dj2.png' />
      <Quality
        header='Elevate your event with premium DJ packages in Bangalore'
        Image='/assets/services/dj22.png'

      >
        <p>Take your celebrations to the next level with a professional DJ package from Shriram Visuals. We offer
          a variety of packages that suit any occasion, from weddings and corporate events to vibrant Holi
          celebrations and festive gatherings.</p> <br />
        <p><div><b>Get the party started with our DJ package:</b> <br /><b> Experienced DJ:</b> Our seasoned DJs possess extensive experience reading the crowd and keeping the
          energy levels high throughout your event. They'll play the music you love and ensure everyone has a
          blast on the dance floor.</div></p> <br />
        <p><b>Crystal-Clear Audio:</b> Experience high-fidelity sound with our premium JBL subwoofers and tops. We
          ensure powerful bass and crisp highs to deliver an immersive audio experience for your guests. </p> <br />
        <p><b>Dazzling Light Show:</b> Set the mood and create a captivating atmosphere with our par lights. These
          dynamic lights add visual excitement to your event and complement the music seamlessly.</p> <br />
        <p><b>Customizable Playlist:</b> We work closely with you to create a customized playlist that reflects your taste
          and event theme. </p>
        <p>Contact Shriram Visuals for a personalized DJ Package quote and let us help you create an
          unforgettable celebrations.</p>
      </Quality>
      {/*   <Projectors 
      topic='DJ Packages'
      pr1='./assets/services/package1.png'
      pr2='./assets/services/package2.png'
      pr3='./assets/services/package3.png'
      t1='Corporate Package'
      t2='DJ Package'
      t3='Weddings Package'
      para1='Our range of branded projectors, including Dell, Epson, and Hitachi, deliver breathtaking color and white brightness ranging from 2700 to 3500 lumens, guaranteeing you sharp and crystal-clear images.'
      para2='Our range of branded projectors, including Dell, Epson, and Hitachi, deliver breathtaking color and white brightness ranging from 2700 to 3500 lumens, guaranteeing you sharp and crystal-clear images.'
      para3='Our range of branded projectors, including Dell, Epson, and Hitachi, deliver breathtaking color and white brightness ranging from 2700 to 3500 lumens, guaranteeing you sharp and crystal-clear images.'
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

export default Djpackages
