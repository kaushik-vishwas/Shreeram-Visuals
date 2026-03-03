import React, { memo, useRef } from 'react'
import styles from './product.module.css'
import { RightArrow } from '../../components/Svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocation } from 'react-router-dom';

// Remove these imports
// import MagicSliderDots from 'react-magic-slider-dots';
// import 'react-magic-slider-dots/dist/magic-dots.css';

const allServices = [
  {
    img: '/assets/services/ex49.png',
    title: 'Projector for Rent',
    subtitle: 'Shriram Visuals has got you covered ...',
    more: 'Know more',
    arrowHref: "/best-projector-screen-rental-in-bangalore",
  },
  {
    img: '/assets/services/pr02.png',
    title: 'Speakers for Rent',
    subtitle: 'At Shriram Visuals, we believe that great ...',
    more: 'Know more',
    arrowHref: "/premium-speaker-rentals-in-bangalore"
  },
  {
    img: '/assets/services/lgtv.png',
    title: 'LED TV for Rent',
    subtitle: 'Shriram Visuals provides LED TV rental...',
    more: 'Know more',
    arrowHref: "/led-tv-and-wall-rental-services-bangalore"
  },
  {
    img: '/assets/services/pr23.png',
    title: 'Lighting for Rent',
    subtitle: 'Make your housewarming or ... ',
    more: 'Know more',
    arrowHref: "/decoration-lights-rental-service-in-bangalore"
  },
  {
    img: '/assets/services/cam1.png',
    title: 'Photography-Videography for Rent',
    subtitle: 'Capture lasting memories of your...',
    more: 'Know more',
    arrowHref: "/photography-and-videography-rental-services-in-bangalore"
  },
  {
    img: '/assets/services/tent.jpg',
    title: 'Shamiana for Rent',
    subtitle: 'Shriram Visuals offers comprehensive ...',
    more: 'Know more',
    arrowHref: "/shamiana-rental-services"
  },
  {
    img: '/assets/services/dj2.png',
    title: 'DJ Packages for Rent',
    subtitle: 'Take your celebrations to the next ...',
    more: 'Know more',
    arrowHref: "/dj-packages-for-rent"
  },
  {
    img: '/assets/services/wed.jpg',
    title: 'Wedding Packages for Rent',
    subtitle: 'Shriram Visuals offers a stress free ...',
    more: 'Know more',
    arrowHref: "/wedding-packages"
  },
  {
    img: '/assets/services/web1.png',
    title: 'Live Streaming for Rent',
    subtitle: 'Planning a live event, presentation ...',
    more: 'Know more',
    arrowHref: "/live-streaming-webcasting-for-rent-in-bangalore"
  },
  {
    img: '/assets/services/eight.png',
    title: 'Flower And Balloon Decorations for Rent',
    subtitle: 'Are you planning a birthday party ...',
    more: 'Know more',
    arrowHref: "/flower-and-balloon-decorations-for-rent-in-bangalore"
  },
  {
    img: '/assets/services/catering.png',
    title: 'Catering',
    subtitle: 'Planning an event in Bangalore ...',
    more: 'Know more',
    arrowHref: "/professional-catering-services-in-bangalore"
  },
  {
    img: '/assets/services/gift.png',
    title: 'T-Shirts And Corporate Gifts',
    subtitle: 'Looking for impactful promotional tools ...',
    more: 'Know more',
    arrowHref: "/custom-t-shirts-and-corporate-gifts-providers-bangalore"
  },
  {
    img: '/assets/services/s11.png',
    title: 'Other Services',
    subtitle: 'Check our all other services ...',
    more: 'Know more',
    arrowHref: "/services/emcee-services-corporate-events-bangalore"
  },
];

const Products = () => {
  const pathname = useLocation().pathname.split('/')[1];
  const filteredServices = allServices.filter(service => service.arrowHref !== `/${pathname}`);

  return (
    <div className={styles.container}>
      <h2>Our Rental Services</h2>
      <p className={styles.title}>Choose from our extensive range of rental services just not limited to projectors, speakers, lights, stages, photography, videography and many more in Bengaluru for your door step service. </p>
      <div className={styles.products}>
        {filteredServices.map((service, index) => (
          <Card key={index} {...service} />
        ))}
      </div>
    </div>
  )
}

export default Products

export const SliderProduct = () => {
  const sliderRef = useRef(null)

  const pathname = useLocation().pathname.split('/')[1];
  const filteredServices2 = allServices.filter(service => service.arrowHref !== `/${pathname}`);
  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    arrows: false,
    // Use custom dots styling
    appendDots: (dots) => (
      <div>
        <ul className={styles.slickDots}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <button className={styles.dotButton}></button>
    ),
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }
  
  return (
    <div className={styles.container}>
      <p className={styles.innovative}>Our Rental Services</p>
      <div className='service_main2'>
        <Slider ref={sliderRef} {...sliderSettings}>
          {filteredServices2.map((service, index) => (
            <SliderCard key={index} {...service} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

const Card = memo(({ img, title, subtitle, arrowHref }) => {
  return (
    <div className={styles.product}>
      <div className={styles.imageArea}>
        <a href={arrowHref}>
          <img className={styles.img} src={img} alt="shriramvisuals" />
        </a>
      </div>
      <div className={styles.namecol}>
        <a href={arrowHref} className={styles.namecolLink}>
          <p className={styles.name}>{title}</p>
          <p className={styles.text}>{subtitle}</p>
        </a>
      </div>
      <div className={styles.hrefcol}>
        <a href={arrowHref} className={styles.more}>
          <RightArrow /> Know more
        </a>
        <a href={arrowHref} className={styles.more2} >
          <RightArrow /> 
        </a>
      </div>
    </div>
  )
})

const SliderCard = memo(({ img, title, subtitle, arrowHref }) => {
  return (
    <div className={`${styles.width} ${styles.product}`}>
      <div className={styles.imageArea}>
        <img className={styles.img} src={img} alt="shriramvisuals" />
      </div>
      <div>
        <p className={styles.name}>{title}</p>
        <p className={styles.text}>{subtitle}</p>
      </div>
      <a href={arrowHref} className={styles.more}>
        <RightArrow /> Know more
      </a>
    </div>
  )
})