import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import styles from './home.module.css';
// import './styling.css'
import { FaArrowRight } from "react-icons/fa6";
import { BottomLine, HomeNext, HomePrev } from '../Svg';
import Speaker from '../../smallComponents/speaker/Speaker';
import Steps from '../../smallComponents/steps/Steps';
import Testimonial from '../../smallComponents/testimonial/Testimonial';
import Brands from '../../smallComponents/brands/Brands';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Choose from '../../smallComponents/choose/Choose';
import FAQ from '../../smallComponents/faq/FAQ';
import Services from '../../smallComponents/services/Services';

const Home = () => {
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
  useEffect(() => {
    document.title = 'Home Page';
  }, []);
  return (
    <div>
      <Helmet>
        <title>Projector Rentals | Projector Screen for Rent in Bangalore | Shriram Visuals</title>
        <meta name="description" content="Shriram Visuals is the best Projector Rental Service in Bangalore. Offers top-quality projector rentals for any occasion, From business presentations, home events etc.." />
        <meta name="keywords" content="Projector Screen for Rent in Bangalore, Projector Rentals in Bangalore, Best Projector Screen for Rent in Bangalore, Best Projector Rentals in Bangalore, Projector Screen for Rent, and Projector Rentals near Me." />
        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://www.shriramvisuals.com/" />


      </Helmet>

      <div style={{ position: 'relative' }}>
        <Slider ref={sliderRef} {...sliderSettings}>
          <section className={styles.hero4}>
            <div className={styles.content}>
              <div className={styles.rightContent}>
                <p className={styles.head}>Welcome to Shriram Visuals</p>
                <h3 className={styles.headline}>Light your Stage with Sound </h3>
                <h1 className={styles.highlights}>Projector Rentals </h1>
                <p className={styles.text}>Rent premium projectors in Bengaluru for Office Presentations, big screen experience at home, or any personal events. Hassle-free delivery, technical assistance &
                  competitive prices. Get a free quote!</p>
                <a href="/best-projector-screen-rental-in-bangalore" className={styles.connect}>
                  Enquire Now <FaArrowRight />
                </a>
              </div>
              <div className={styles.leftContent2}></div>
            </div>
          </section>
          <section className={styles.hero}>
            <div className={styles.content}>
              <div className={styles.rightContent}>
                <p className={styles.head}>Welcome to Shriram Visuals</p>
                <h3 className={styles.headline}>Light your Stage with Sound</h3>
                <h4 className={styles.highlights}>Speaker Rental Made Easy</h4>
                <p className={styles.text}>Elevate your event with Bengaluru's Best Speaker Rentals from Shriram Visuals if you are looking for branded, high-quality, latest model JBL and QSC speakers.</p>
                <a href="/premium-speaker-rentals-in-bangalore" className={styles.connect}>
                  Enquire Now <FaArrowRight />
                </a>
              </div>
              <div className={styles.leftContent2}></div>
            </div>
          </section>
          <section className={styles.hero1}>
            <div className={styles.content}>
              <div className={styles.rightContent}>
                <p className={styles.head}>Welcome to Shriram Visuals</p>
                <h3 className={styles.headline}>Light your Stage with Sound </h3>
                <h4 className={styles.highlights}>LED TV Rental Made Easy</h4>
                <p className={styles.text}>Rent LED TVs in Bengaluru in all sizes for Corporate Townhalls, Wedding, Exhibition or any events.</p>
                <a href="/led-tv-and-wall-rental-services-bangalore" className={styles.connect}>
                  Enquire Now <FaArrowRight />
                </a>
              </div>
              <div className={styles.leftContent2}></div>
            </div>
          </section>
          <section className={styles.hero2}>
            <div className={styles.content}>
              <div className={styles.rightContent}>
                <p className={styles.head}>Welcome to Shriram Visuals</p>
                <h3 className={styles.headline}>Light your Stage with Sound </h3>
                <h4 className={styles.highlights}>Lighting rental  Made Easy</h4>
                <p className={styles.text}>Shriram Visuals offers an unmatched lighting rental services offering Par Lights, Sharpies and Stage lights for Corporate events, DJ parties, Wedding Receptions to enhance the ambience of any occassion.</p>
                <a href="/decoration-lights-rental-service-in-bangalore" className={styles.connect}>
                  Enquire Now <FaArrowRight />
                </a>
              </div>
              <div className={styles.leftContent2}></div>
            </div>
          </section>
        </Slider>
        <div className={styles.leftContent}>
          <img src="/assets/images/tv.webp" alt="tv" loading='lazy' />
        </div>
        <div className={styles.centered}>
          <HomePrev handleClick={() => sliderRef.current?.slickPrev()} /><HomeNext forward={() => sliderRef.current?.slickNext()} />
        </div>
      </div>
      <section className={styles.about}>
        <div className={styles.leftAbout}>
          <h3>About us</h3>
          <p className={styles.bigText}>Becoming the world's most valued working life partner.</p>
          <p className={styles.smallText}>Established in 2007, Shriram Visuals is just more than audio-visual rentals in Bengaluru, we are your partners in creating unforgettable experiences through premium audio-visual equipment.</p>
          <br />
          <div className={styles.facalities}>
            <div className={styles.facality}>
              <h1>17+</h1>
              <p>years of experience</p>
              <BottomLine />
            </div>
            <div className={styles.facality}>
              <h1>5000+</h1>
              <p>Events</p>
              <BottomLine />
            </div>
            <div className={styles.facality}>
              <h1>1000+</h1>
              <p>Customers Serviced</p>
              <BottomLine />
            </div>
            <div className={styles.facality}>
              <h1>40000+</h1>
              <p>Hours of Service</p>
              <BottomLine />
            </div>
          </div>
          <br /><br />
          <a href="/about-us">
            <button className={styles.connect}>Read more <FaArrowRight /></button>
          </a>
        </div>
        <div className={styles.rightAbout}>
          <h3>About us</h3>
          <p className={styles.mobileView}>Becoming the world's most valued working life partner.</p>
          <img className={styles.web} src="/assets/images/about1234.webp" alt="about us" loading='lazy' />
          <img className={styles.mobile} src="/assets/images/dj45.webp" alt="about us" loading='lazy'/>
        </div>
      </section>
      <Brands />
      <Services />
      <Speaker />
      <Steps />
      <Choose />
      <Testimonial />
      <FAQ />
    </div>
  );
};

export default Home;
