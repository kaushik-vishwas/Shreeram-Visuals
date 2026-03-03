import React, { useEffect, useState } from 'react'
import Hero from '../../smallComponents/hero/Hero'
import Quality from '../../smallComponents/quality/Quality'
import Projectors from '../../smallComponents/projectors/Projectors'
import Testimonial from './../../smallComponents/testimonial/Testimonial';
import Products, { SliderProduct } from '../../smallComponents/products/Products';
import FAQ from './../../smallComponents/faq/FAQ';
import styles from '../spare.module.css';
import { Helmet } from 'react-helmet';

const Projector = () => {
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
        <title>Best Projector Screen Rental in Bangalore | Projector Rent near Me</title>
        <meta name="description" content="Find the Best Projector Screen Rentals in Bangalore! High-quality screens for any event, with flexible options and competitive rates. Book your screen today at Shriram Visuals." />
        <meta name="keywords" content="Best Projector Screen Rental in Bangalore, Best Projector Rent near Me, Projector Screen Rental in Bangalore, Projector Rent near Me, Best Projector Screen Rental, and Projector Rent." />
     <link rel="canonical" href="https://www.shriramvisuals.com/best-projector-screen-rental-in-bangalore" />
     <meta name="robots" content="index, follow" />
      
       

       
      </Helmet>
      <Hero 
      title='Projector on Rent' 
      tagh1="Best Projector Screen Rental in Bangalore"
      /* subtitle='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' */ 
      Image='/assets/images/heropr.png' />
      <Quality 
      header='Elevate your experience with just a click by renting top-tier equipment from Shriram Visuals.'
    Image='/assets/quality/one.png'
    >
        <p><b>High-Brightness Projector rentals in Bangalore:</b>Shriram Visuals offers top quality and branded 
    projectors to your doorstep for corporate presentations, big-screen movies, or sporting events like IPL 
    and World Cups</p>
       </Quality>
      <Projectors 
      topic='Projectors'
      pr1='/assets/services/e01.png'
      pr2='/assets/services/ex49.png'
      pr3='/assets/services/pr3.png'
      pr4='/assets/services/pr1.png'
      pr5='/assets/services/pr5.png'
      t1='Epson X49 Specifications'
      t2='Epson EBX05 Specifications'
      t3='Hitachi Projector'
      t4='Dell Projector'
      t5='Projector Screen'
      para1={<div>Brand: Epson <br/>
      Manufacturer: Sony <br/>
      Interface: VGA, HDMI, VGA <br/>
      Aspect Ratio: 4:3 <br/>
      Brightness: 3600 Lumens  
      </div>}
      para2={<div>Brand: Epson <br/>
      Manufacturer: Sony <br/>
      Interface: VGA, HDMI, VGA <br/>
      Aspect Ratio: 16:9 <br/>
      Brightness: 3300 Lumens 
      </div>}
      para3={<div>Brand: Hitachi<br/> 
      Interface: VGA, HDMI, VGA <br/>
      Aspect Ratio: 4:3 <br/>
      Brightness: 2700 Lumens 
      </div>}
      para4={<div>Brand: Dell <br/>
        Interface: VGA, HDMI, VGA <br/>
        Aspect Ratio: 4:3 <br/>
        Brightness: 2700 Lumens'
        </div>}
      para5='Shriram Visuals has got you covered with a range of projector screen sizes, including popular options 
      like 4x6 feet and 8x6 feet, that perfectly suit your needs. Our screens come with tripod stands, 
      ensuring a professional setup popular options like 4*6 feet and 8*6 feet perfectly suit your needs. Our 
      screen comes with tripod stands ensuring a professional setup. 
      '
      /><div className={styles.spacing}></div>
     
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

export default Projector
