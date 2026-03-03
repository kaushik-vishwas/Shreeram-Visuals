import React from 'react'
import Hero from '../../smallComponents/hero/Hero'
import Brands from './../../smallComponents/brands/Brands';
import Testimonial from './../../smallComponents/testimonial/Testimonial';
import FAQ from './../../smallComponents/faq/FAQ';
import Facility from './../home/Facility';
import Vision from '../../smallComponents/vision/Vision';
import Speakerabout from '../../smallComponents/speakerabout/Speakerabout';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
     <Helmet>
        <title>About Shriram Visuals of Audio-Visual Rentals in Bangalore| Why Choose Us</title>
        <meta name="description" content="Are you looking for the best Audio and Visual Rentals in Bangalore? Then look no further Shriram Visuals provides everything you need to make your occasion successful." />
        <meta name="keywords" content="Audio-Visual Rentals in Bangalore, Best Audio-Visual Rentals in Bangalore, Audio-Visual Rentals Bangalore, Audio-Visual Rentals near Me, Audio-Visual and Projector Rentals in Bangalore." />
        <link rel="canonical" href="https://www.shriramvisuals.com/about-us" />
        <meta name="robots" content="index, follow" />
       
       

       
      </Helmet>
      <Hero
        title='About us'
              tagh1="Audio-Visual Rentals in Bengalore"
        subtitle='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        Image='/assets/images/aboutUs.jpg'
        
      />
      <Facility />
      <Vision />
      <Brands />
      <Speakerabout />
      <Testimonial />
      <FAQ />
    </>
  )
}

export default About
