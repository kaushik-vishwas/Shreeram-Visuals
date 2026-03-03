import React, { useEffect, useState } from 'react'
import Quality from '../smallComponents/quality/Quality'
import Projectors from '../smallComponents/projectors/Projectors'
import Testimonial from './../smallComponents/testimonial/Testimonial';
import Products, { SliderProduct } from '../smallComponents/products/Products';
import FAQ from './../smallComponents/faq/FAQ';
import Hero from '../smallComponents/hero/Hero';
import { Helmet } from 'react-helmet';
const OtherService = () => {
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
         <title>Emcee for Corporate Events in Bangalore | Led Wall Rental Near Me</title>{/* meta title */}
        <meta name="description" content="Looking for a Dynamic Emcee for Your Corporate Event or Led Wall Rental in Bangalore? Shriram Visuals offers professional emcee services and high-quality LED wall rentals to elevate your event experience!" />
        <meta name="keywords" content="Emcee for Corporate Events in Bangalore, Led Wall Rental near Me, Best Emcee for Corporate Events in Bangalore, Best Led Wall Rental near Me, Emcee for Corporate Events, and Led Wall Rental. " />
     <link rel="canonical" href="https://www.shriramvisuals.com/services/emcee-services-corporate-events-bangalore" />
     <meta name="robots" content="index, follow" />
        
      </Helmet>
      <Hero
   tagh1="Emcee for Corporate Events in Bangalore"
        title='Other Services'
        /* subtitle='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' */
        Image='/assets/services/ledwall.png'  />
      <Quality
             header='Elevate your experience with just a click by renting top-tier equipment from Shriram Visuals.'
       Image='/assets/services/other2.png'
        p1="" p2="" p3="" p4=""
      >
  
      </Quality>
      <Projectors
        topic='Other Services'
        pr1='/assets/services/s1.png'
        pr2='/assets/services/s11.png'
        /*  pr3='./assets/services/s33.png' */
        pr3='/assets/services/s44.jpg'
        /*     pr3='./assets/services/s55.jpg' */
        pr4='/assets/services/s6.jpg'
        t1='LED Walls'
        t2='Stage rentals for every event of all sizes in Bangalore 
      '
        /* t4='Masking Screens for focused presentations' */
        /*  t3='Backdrop printing options' */
        t3='Versatile backdrop and Masking rentals in Bangalore'
        t4='Emcee'
        para1={<div>LED wall rental from Shriram Visuals for your corporate event, product launch, concert, or wedding in
          Bangalore. Choose from popular sizes like 8*6 feet and 10*8 feet LED walls for presentations,
          conferences, and smaller events, if you want to make a bold statement then we can offer you 12*10
          feet and 15*12 feet LED walls, ideal for conferences, trade shows, concerts, and outdoor events. <br /> <br />
          Tailoring to your budget and specifications, we provide a range of LED Wall rental options, varying in
          quality from P2 to P4.</div>}
        para2={<div>
          Impress your audience and take your event to the next level with a professional stage setup rental
          from Shriram Visuals if you plan a conference, presentation, concert, or special event in Bangalore.  <br /> <br />
          Our adjustable staging platforms feature variable heights ranging from a low-profile 6-inch raiser to
          an impressive 4-foot platform. It will allow you to customize the stage elevation to suit your needs,
          whether you require a speaker podium, a band platform, or a multi-level stage design.
        </div>}
        para4={<div>
          Planning an event in Bangalore and needing to create a stunning visual impact then look no further,
          we offer a comprehensive selection of backdrop and masking rentals to elevate your event space and
          enhance your audience experience.
        </div>}
        para3={<div>We offer a range of masking screens to control light and create focused presentation content with our
          multiple masking screen sizes. Choose from masking screen sizes ranging from 6*8 feet to 12*15 feet,
          perfectly suited to your venue and presentation needs.
          Backdrop and Masking screens are perfect for every occasions that includes Conferences and
          presentations, product launch, trade shows and exhibitions, wedding and special events, live events
          and performances.  <br />  <br />
          Elevate your event with Shriram Visuals by contacting us today to discuss your backdrop and masking
          screen rental needs in Bangalore. {/* </div>
        <div> */}<b>Wide variety of materials:</b> Choose from our diverse range of printing materials to achieve the perfect
          look for your event. <br /> <br />
          - <b>Normal flex printing: </b>A cost-effective option for vibrant and durable backdrops.  <br />
          -<b> Flex printing black back:</b> Ideal for outdoor events, this option offers better opacity and wind
          resistance.  <br />
          - <b>Star flex printing:</b> Create a dazzling effect with this unique material that shimmers under
          spotlighting.  <br />
          - <b>Fabric printing normal: </b>A lightweight and wrinkle-resistant material perfect for indoor
          displays.  <br />
          - <b>Fabric printing black back:</b> Enhances colour vibrancy and provides a professional finish for
          fabric backdrops.
        </div>}
        /* para5={} */
        para6={<div>
          Live up your event with Emcee / MC (Master of Ceremonies) at Bangalore <br /> <br />
          If you planning an event in Bangalore and searching for an engaging and entertaining Emcee services
          then Shriram Visuals provides you dynamic and experienced emcee. We bring a unique blend of
          enthusiasm, humour and professionalism to ensure your event runs smoothly and keeps your
          audience engaged.
        </div>}
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

export default OtherService
