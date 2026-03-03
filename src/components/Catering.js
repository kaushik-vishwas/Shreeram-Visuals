import React, { useEffect, useState } from 'react'
import Quality from '../smallComponents/quality/Quality'
import Testimonial from '../smallComponents/testimonial/Testimonial';
import Products, { SliderProduct } from '../smallComponents/products/Products';
import FAQ from '../smallComponents/faq/FAQ';
import Hero from '../smallComponents/hero/Hero';
import { Helmet } from 'react-helmet';
const Catering = () => {
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
        <title>Professional Catering Services in Bangalore | Shriram Visuals</title>
        <meta name="description" content="We are the best Professional Catering Services in Bangalore. Offering a wide range of menu options and impeccable service to make your event a culinary success!" />
        <meta name="keywords" content="Professional Catering Services in Bangalore, Best Professional Catering Services in Bangalore, Professional Catering Services, Professional Catering Services near Me." />
     <link rel="canonical" href="https://www.shriramvisuals.com/professional-catering-services-in-bangalore" />
     <meta name="robots" content="index, follow" />
       
      </Helmet>
      <Hero
      title='Catering '
      tagh1="Professional Catering Services in Bangalore" 
      /* subtitle='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' */ 
      Image='/assets/services/catering2.png' />
      <Quality 
      header='Delight your guests with exquisite catering services in Bangalore'
    Image='/assets/services/catering.png'
  
      >

        <p>Planning an event in Bangalore and searching for exceptional catering services, then Shriram Visuals 
    is dedicated to creating a memorable culinary experience for your guests, regardless of the occasion.</p>
        <p><div>Our experience chefs are passionate about crafting delicious and visually stunning dishes to suit any 
      event size and style <br/> <br/>
      <b> Corporate Events:</b> Impress your colleagues and clients with an elegant buffet or plated lunch 
      featuring South Indian and North Indian specialities <br/> <br/>
      <b>Weddings & Receptions:</b> Make your special day unforgettable with a personalized wedding 
      menu, featuring a selection of appetizers, main courses and delectable desserts. <br/> <br/>
      <b>Conferences and Seminars:</b> Keep your attendees energized with breakfast buffets, working 
      lunches, or refreshment breaks featuring light bites and beverages. 
      </div></p><br/>
        <p><div> <b>Additional services to enhance your event</b> <br/>
       <b>Event Rentals:</b> From tables and chairs to linens and tableware, we offer a comprehensive 
      selection to complement of event rentals to complement your catering setup. 
      </div></p>
        <p>Contact us today to discuss your catering needs in Bangalore, we deliver the samples to your 
     doorstep to create a customized catering package for your upcoming event. Get a free quote and let 
     us create a truly memorable culinary experience for your guests.</p>
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

export default Catering
