import React, { useEffect, useState } from 'react';
import Quality from '../smallComponents/quality/Quality';
import Testimonial from '../smallComponents/testimonial/Testimonial';
import Products, { SliderProduct } from '../smallComponents/products/Products';
import FAQ from '../smallComponents/faq/FAQ';
import Hero from '../smallComponents/hero/Hero';
import { Helmet } from 'react-helmet';

const Corporate = () => {
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
        <title>Custom T-Shirts and Corporate Gifts Providers Bangalore | Shriram Visuals</title>
        <meta name="description" content="Explore top-quality Custom T-shirts and Corporate Gifts in Bangalore with Shriram Visuals. Perfect for Branding, Employee Appreciation, Promotional Events, etc." />
        <meta name="keywords" content="Custom T-Shirts and Corporate Gifts Providers Bangalore, Best Custom T-Shirts and Corporate Gifts Providers Bangalore, Custom T-Shirts and Corporate Gifts Providers near Me." />
        <link rel="canonical" href="https://www.shriramvisuals.com/custom-t-shirts-and-corporate-gifts-providers-bangalore" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Hero
        title="T-Shirts and Corporate Gifts"
        tagh1="Custom T-Shirts and Corporate Gifts Providers Bangalore"
        subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        Image="/assets/services/Fastachi-Corporate-Gifts.jpg"
      />
      <Quality 
        header="Make your brand stand out: Custom T-Shirts & Corporate gifts in Bangalore"
        Image="/assets/services/gifting.png"
      >
        <p>Looking for impactful promotional tools or thoughtful employee appreciation gifts in Bangalore? Look no further than Shriram Visuals. We specialize in creating high-quality custom T-Shirts and a diverse range of corporate gifts, designed to leave a lasting impression.</p>
        <p><b>Custom T-Shirts: Build Brand Awareness & Team Spirit</b><br />
        <b>Boost Brand recognition:</b> Eye-catching custom T-shirts featuring your logo or slogan are a fantastic way to promote your brand at events, trade shows, or even during everyday wear. Choose from a wide range of t-shirt styles, colors, and fabrics to perfectly suit your needs and preferences.
        </p>
        <p><b>Beyond T-Shirts: A world of Corporate Gifting options</b><br />
          <b>Branded merchandise:</b> From mugs and pens to water bottles and phone cases, create custom branded merchandise that your employees or clients will use and cherish.<br />
          <b>Tech and Electronics:</b> Wireless headphones, Smartwatches, power banks, and portable speakers are popular choices for tech-savvy recipients.<br />
          <b>Gift Baskets:</b> Curate a personalized gift basket filled with gourmet treats and pampering products.
        </p>
        <p>Contact Shriram Visuals to discuss your custom t-shirt or corporate gifts needs in Bangalore.</p>
      </Quality>
      
      {isSmallerDevice ? (
        <Products />
      ) : (
        <SliderProduct />
      )}
      <Testimonial />
      <FAQ />
    </>
  );
}

export default Corporate;
