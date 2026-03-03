import React, { useEffect, useState } from 'react'
import Quality from '../smallComponents/quality/Quality'
import Projectors from '../smallComponents/projectors/Projectors'
import Testimonial from './../smallComponents/testimonial/Testimonial';
import Products, { SliderProduct } from '../smallComponents/products/Products';
import FAQ from './../smallComponents/faq/FAQ';
import Hero from '../smallComponents/hero/Hero';
import { Helmet } from 'react-helmet';
const Shamiana = () => {
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
        <title>Shamiana Rental Services | VIP Chair Rental Service in Bangalore</title>
        <meta name="description" content="Elevate your event with Shriram Visuals VIP Chair Rental Service in Bangalore. They provide stylish and comfortable chairs to impress your guests. Book your VIP seating today!" />
        <meta name="keywords" content="Shamiana Rental Services, VIP Chair Rental Service in Bangalore, Best Shamiana Rental Services, Best VIP Chair Rental Service in Bangalore, Shamiana Rental and VIP Chair Rental Service near Me." />
     <link rel="canonical" href="https://www.shriramvisuals.com/shamiana-rental-services" />
     <meta name="robots" content="index, follow" />
        
      </Helmet>
      <Hero
      title='Shamiana Rental' 
            tagh1="Shamiana Rental Services"
      /* subtitle='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' */ 
      Image='/assets/images/shamiana.png' />
      <Quality 
      header='One-stop shop for events in Bangalore'
    Image='/assets/quality/shami.png'
   /*  p1="One-stop shop for events in Bangalore 
    " */
    p2="Shriram Visuals offers comprehensive event management services and high-quality event materials in 
    Bangalore. Our expertise spans a vast range of products from tents, platforms, pagoda tents, and 
    more catering to events of all sizes and types, from exhibitions and conferences to weddings and 
    concerts. "
    p3=" " 
    p4="" 
    p5=""
    /* p6="Beyond Shamiana, we offer everything you need for a successful event. Rent speakers for sound that 
    elevates your party atmosphere, and impress your guests with delicious catering services to suit your 
    taste and budget with spacious tents and tables for a comfortable and protected event space. 
    "
    p7="Contact us to discuss your specific event needs and get a free quote on chair and table rentals in 
    Bangalore. 
    " */
      >
        <p>Shriram Visuals offers comprehensive event management services and high-quality event materials in 
Bangalore. Our expertise spans a vast range of products from tents, platforms, pagoda tents, and 
more catering to events of all sizes and types, from exhibitions and conferences to weddings and 
concerts.</p>
        </Quality>
      <Projectors 
      topic='Shamiana'
      pr1='/assets/services/tent.jpg'
      pr2='/assets/services/sh2.png'
      pr3='/assets/services/vip.jpg'
      
      t1='Tents & Canopy'
      t2='Rent Chairs and Tables'
      t3='VIP chairs'
      
      para1='Tents & Canopy: Choose from a range of option tents, Pagoda Tents, Waterproof tents, Side walls, 
      Canopies, and exhibition octanorm stalls to showcase your products or brand.'
      para2='Rent Chairs and Tables in Bangalore: Seating solutions for every occasion, choose from classic round 
      tables and rectangle tables to suit your event layout and guest flow with well-maintained clean covers 
      of your choice. '
      para3='We offer versatile seating options like VIP chairs for a touch of luxury, cushion chairs for comfort, and 
      plastic chairs. We can also elevate your event with leather sofas for a premium feel.'
      para4=''
      para5=''
      para8='Beyond Shamiana, we offer everything you need for a successful event. Rent speakers for sound that 
           elevates your party atmosphere, and impress your guests with delicious catering services to suit your 
           taste and budget with spacious tents and tables for a comfortable and protected event space.'
           para9='Contact us to discuss your specific event needs and get a free quote on chair and table rentals in 
           Bangalore. '    
      /><br className='styles' />

      
     
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

export default Shamiana
