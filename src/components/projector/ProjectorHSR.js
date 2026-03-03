import React, { useEffect, useState ,useRef} from 'react'
import Hero from '../../smallComponents/hero/Hero'
import Quality from '../../smallComponents/quality/Quality'
import Projectors from '../../smallComponents/projectors/Projectors'
import Testimonial from './../../smallComponents/testimonial/Testimonial';
import Products, { SliderProduct } from '../../smallComponents/products/Products';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FAQ from './../../smallComponents/faq/FAQ';
import styles from '../spare.module.css';
import styleshome from '../home/home.module.css';
import { Helmet } from 'react-helmet';
import { FaArrowRight } from "react-icons/fa6";
import { BottomLine, HomeNext, HomePrev } from '../Svg';
import ProjectorCta from '../../smallComponents/speaker/ProjectorCta';
import ChooseProjectorHSR from '../../smallComponents/choose/ChooseProjectorHSR';
import FAQHSR from '../../smallComponents/faq/FAQHSR';

const ProjectorHSR = () => {
  const sliderRef = useRef(null);
    const sliderSettings = {
      dots: true,
      lazyLoad: "ondemand",
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    };
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
        <title> Projector and Speakers On/for Rental | JBL, LED TV Wall, DJ equipment HSR Layout, Bangalore</title>
        <meta name="description" content="Looking for Projector and Speakers on rent in HSR Layout, Bangalore? Shriram Visuals offers top-quality rental services for JBL Speakers, LED TV Wall, DJ Equipment, and more. Book now for events, parties, or meetings!" />
        <meta name="keywords" content="Projector on Rent near Me, Projector for Rent in HSR Layout, Projector on Rent in HSR Layout, Projector on Rent HSR Layout, Projector Screen on Rent in HSR Layout, How Much Does It Cost to Hire a Projector, Projector on Rent Shop near Me, Projector for Rent near Me, Projector for Rent HSR Layout, Projector for Rent in HSR Layout, Projector on Rent in HSR Layout, Projector and Screen for Rent in HSR Layout, Projector Screen for Rent in HSR Layout, Audio Visual Equipment Rental Service, LED TV Rental Services in HSR Layout, LED TV for Rent near Me, Speakers Rentals in HSR Layout, LED Wall Rental near Me, DJ Setup for Rent, DJ Speakers for Rent, DJ Equipment on Rentals, DJ Speakers Rentals – Shriram Visuals" />
        <link rel="canonical" href="https://www.shriramvisuals.com/projectors-on-rent-in-hsr-layout" />
        <meta name="robots" content="index, follow" />




      </Helmet>
      <div style={{ position: 'relative' }}>
        <Slider ref={sliderRef} {...sliderSettings}>
          <section className={styleshome.hero4} >
            <div className={styleshome.hcontent}>
              <div className={styleshome.hrightContent} >
                <p className={styleshome.head}>Welcome to Shriram Visuals</p>
                <h3 className={styleshome.headline}>Light your Stage with Sound </h3>
                <h1 className={styleshome.highlights}>Projectors on rent in HSR Layout </h1>
                <p className={styleshome.text}>Looking for reliable projectors on rent in HSR Layout? Shriram Visuals offers premium projector rental services tailored to your event needs—be it corporate meetings, seminars, birthday parties, wedding functions, training sessions, or home entertainment.
                </p>
                <a href="/best-projector-screen-rental-in-bangalore" className={styleshome.connect}>
                  Enquire Now <FaArrowRight />
                </a>
              </div>
              <div className={styleshome.leftContent2}></div>
            </div>
          </section>
          <section className={styleshome.hero}>
            <div className={styleshome.hcontent}>
              <div className={styleshome.hrightContent} >
                <p className={styleshome.head}>Welcome to Shriram Visuals</p>
                <h3 className={styleshome.headline}>Light your Stage with Sound</h3>
                <h4 className={styleshome.highlights}>Speaker Rental Made Easy</h4>
                <p className={styleshome.text}>Elevate your event with Bengaluru's Best Speaker Rentals from Shriram Visuals if you are looking for branded, high-quality, latest model JBL and QSC speakers.</p>
                <a href="/premium-speaker-rentals-in-bangalore" className={styleshome.connect}>
                  Enquire Now <FaArrowRight />
                </a>
              </div>
              <div className={styleshome.leftContent2}></div>
            </div>
          </section>
          <section className={styleshome.hero1}>
            <div className={styleshome.hcontent}>
              <div className={styleshome.hrightContent}>
                <p className={styleshome.head}>Welcome to Shriram Visuals</p>
                <h3 className={styleshome.headline}>Light your Stage with Sound </h3>
                <h4 className={styleshome.highlights}>LED TV Rental Made Easy</h4>
                <p className={styleshome.text}>Rent LED TVs in Bengaluru in all sizes for Corporate Townhalls, Wedding, Exhibition or any events.</p>
                <a href="/led-tv-and-wall-rental-services-bangalore" className={styleshome.connect}>
                  Enquire Now <FaArrowRight />
                </a>
              </div>
              <div className={styleshome.leftContent2}></div>
            </div>
          </section>
          <section className={styleshome.hero2}>
            <div className={styleshome.hcontent}>
              <div className={styleshome.hrightContent}>
                <p className={styleshome.head}>Welcome to Shriram Visuals</p>
                <h3 className={styleshome.headline}>Light your Stage with Sound </h3>
                <h4 className={styleshome.highlights}>Lighting rental  Made Easy</h4>
                <p className={styleshome.text}>Shriram Visuals offers an unmatched lighting rental services offering Par Lights, Sharpies and Stage lights for Corporate events, DJ parties, Wedding Receptions to enhance the ambience of any occassion.</p>
                <a href="/decoration-lights-rental-service-in-bangalore" className={styleshome.connect}>
                  Enquire Now <FaArrowRight />
                </a>
              </div>
              <div className={styleshome.leftContent2}></div>
            </div>
          </section>
        </Slider>
        <div className={styleshome.leftContent}>
          <img src="/assets/images/tv.webp" alt="tv" loading='lazy' />
        </div>
        <div className={styleshome.centered}>
          <HomePrev handleClick={() => sliderRef.current?.slickPrev()} /><HomeNext forward={() => sliderRef.current?.slickNext()} />
        </div>
      </div>

      <section className={styleshome.about}>
        <div className={styleshome.leftAbout}>
          <h3>About us</h3>
          <p className={styleshome.bigText}>Becoming the world's most valued working life partner.</p>
          <p className={styleshome.smallText}>Established in 2007, Shriram Visuals is just more than audio-visual rentals in Bengaluru HSR Layout, we are your partners in creating unforgettable experiences through premium audio-visual equipment.</p>
          <br />
          <div className={styleshome.facalities}>
            <div className={styleshome.facality}>
              <h1>17+</h1>
              <p>years of experience</p>
              <BottomLine />
            </div>
            <div className={styleshome.facality}>
              <h1>5000+</h1>
              <p>Events</p>
              <BottomLine />
            </div>
            <div className={styleshome.facality}>
              <h1>1000+</h1>
              <p>Customers Serviced</p>
              <BottomLine />
            </div>
            <div className={styleshome.facality}>
              <h1>40000+</h1>
              <p>Hours of Service</p>
              <BottomLine />
            </div>
          </div>
          <br /><br />
          <a href="/about-us">
            <button className={styleshome.connect}>Read more <FaArrowRight /></button>
          </a>
        </div>
        <div className={styleshome.rightAbout}>
          <h3>About us</h3>
          <p className={styleshome.mobileView}>Becoming the world's most valued working life partner.</p>
          <img className={styleshome.web} src="/assets/images/about1234.webp" alt="about us" loading='lazy' />
          <img className={styleshome.mobile} src="/assets/images/dj45.webp" alt="about us" loading='lazy' />
        </div>
      </section>
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
        para1={<div>Brand: Epson <br />
          Manufacturer: Sony <br />
          Interface: VGA, HDMI, VGA <br />
          Aspect Ratio: 4:3 <br />
          Brightness: 3600 Lumens
        </div>}
        para2={<div>Brand: Epson <br />
          Manufacturer: Sony <br />
          Interface: VGA, HDMI, VGA <br />
          Aspect Ratio: 16:9 <br />
          Brightness: 3300 Lumens
        </div>}
        para3={<div>Brand: Hitachi<br />
          Interface: VGA, HDMI, VGA <br />
          Aspect Ratio: 4:3 <br />
          Brightness: 2700 Lumens
        </div>}
        para4={<div>Brand: Dell <br />
          Interface: VGA, HDMI, VGA <br />
          Aspect Ratio: 4:3 <br />
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
      <ChooseProjectorHSR/>
      <ProjectorCta title="HSR"/>
     {/*  <Testimonial /> */}
      <FAQHSR />
    </>
  )
}

export default ProjectorHSR
