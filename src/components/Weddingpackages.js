import React, { useEffect, useState } from 'react'
import Quality from '../smallComponents/quality/Quality'
import Testimonial from '../smallComponents/testimonial/Testimonial';
import Products, { SliderProduct } from '../smallComponents/products/Products';
import FAQ from '../smallComponents/faq/FAQ';
import Hero from '../smallComponents/hero/Hero';
import { Helmet } from 'react-helmet';
const Weddingpackages = () => {
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
        <title>Wedding Packages | Wedding Decoration and Wedding Planners For Rent Bangalore</title>
        <meta name="description" content="Shriram Visuals offers expert Wedding Planners For Rent in Bangalore. From concept to execution, we handle every detail to make your special day unforgettable. Contact us today!" />
        <meta name="keywords" content="Wedding Packages in Bangalore, Wedding Decoration  Rental Services in Bangalore, Wedding Planners for Rent Bangalore, Wedding Packages, Wedding Decoration and Wedding Planners for Rent near Me." />
     <link rel="canonical" href="https://www.shriramvisuals.com/wedding-packages" />
     <meta name="robots" content="index, follow" />
       
      </Helmet>
      <Hero
        title='Wedding Packages '
              tagh1="Wedding Packages"
        Image='/assets/services/packages.png' />
      <Quality
        header='Celebrate your dream wedding in Bangalore with Shriram Visuals All inclusive Package'
        Image='/assets/quality/packages.png'
      >
        <p>Shriram Visuals offers a stress free solutions with our comprehensive Wedding Package, designed to
          create a magical and unforgettable celebration. </p><br />
        <p><b>Enthralling entertainment:</b> Keep your guests entertained with our experienced DJ spinning energetic
          beats. Our powerful setup includes JBL Subwoofers and tops (JBL and QSC) for booming bass and
          crystal clear sound. Par lights will add a dynamic touch to the dance floor.  </p><br />
        <p><b>Captured Memories:</b> Our skilled videographer and photographer will capture every precious
          moment of your wedding day, from the emotional ceremony to the joyous celebrations. </p><br />
        <p><b>Delicious Cuisine:</b> Impress your guests with a delectable spread from our catering services. We offer
          a variety of customizable menus to suit your taste and dietary preferences.</p> <br />
        <p><b>Elegant Ambiance:</b> Create a beautiful event space with our spacious Shamiana rental services. We
          also provide comfortable chairs and tables for your guests . </p> <br />
        <p><b>  Engaging Visuals:</b> Showcase special moments and memories with our experienced LED TV and LED
          Wall rentals</p>
        <p>Shriram Visuals boasts a team of seasoned professionals dedicated to making your wedding a
          resounding success. We are known for high-quality equipment, ensuring a flawless and professional
          execution of your event</p>
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

export default Weddingpackages
