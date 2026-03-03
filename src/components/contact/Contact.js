import React from 'react'
import FAQ from '../../smallComponents/faq/FAQ';
import Hero from '../../smallComponents/hero/Hero';
import Form from '../../smallComponents/form/Form';
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Shriram Visuals For Backdrop and Top Masking Screens Rental Bangalore</title>
        <meta name="description" content="Get in touch with Shriram Visuals for the Backdrop and Top Masking Screen Rentals in Bangalore. Contact us today for customized solutions to enhance your event's ambiance and visual appeal." />
        <meta name="keywords" content="Backdrop for Rent in Bangalore, Top Masking Screens Rental in Bangalore, Best Backdrop for Rent in Bangalore, Best Top Masking Screens Rental in Bangalore, Backdrop for Rent and Top Masking Screens Rental near Me," />
     <link rel="canonical" href="https://www.shriramvisuals.com/contact-us" />
     <meta name="robots" content="index, follow" />
  
      </Helmet>
      <Hero
            tagh1="Shriram Visuals For Backdrop and Top Masking Screens Rental Bangalore"
        title='Contact us'
        subtitle='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        Image='/assets/images/contact.png'
      />


      
      <Form />
      <FAQ />
    </>
  )
}

export default Contact
