import React from 'react'
import styles from './services.module.css'
import Slider from "react-slick";
import MagicSliderDots from 'react-magic-slider-dots';


const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 1000,
  cssEase: "linear",
  arrows: false,
  appendDots: dots => {
    return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={50} />;
  },
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 825,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
  ]


};
const Services = () => {

  return (
    <>
      <div className={styles.container}>
        <h2>Our  Services</h2>
        <h4>Choose from our extensive range of rental services just not limited to projectors, speakers, lights, stages, photography, videography and many more in Bengaluru for your door step service.</h4>
        <div className='service_main'>
          <Slider {...settings} className='slider' >
            <div className={styles.card13} style={{ background: `url('/assets/services/ex49.webp')`, backgroundPosition: 'right center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
              <div className={styles.bg}>
                <p className={styles.head}>Projector</p>
                <p className={styles.context}>Shriram Visuals offers top quality and branded projectors to your doorstep for corporate presentations </p>

                <a href="/best-projector-screen-rental-in-bangalore">
                  <button>know more</button>
                </a>

              </div>
            </div>
            <div className={`${styles.topGap} ${styles.card2}`} style={{ background: `url('/assets/services/two.webp')`, backgroundPosition: 'center right', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
              <div className={styles.bg}>
                <p className={styles.head}>Speakers</p>
                <p className={styles.context}>At Shriram Visuals, we believe that great sound can make any event unforgettable.
                </p>

                <a href="/premium-speaker-rentals-in-bangalore">
                  <button>know more</button>
                </a>

              </div>
            </div>
            <div className={styles.card3} style={{ background: `url('/assets/images/lighting.png')`, backgroundPosition: 'right center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
              <div className={styles.bg}>
                <p className={styles.head}>Lighting</p>
                <p className={styles.context}>LED Parcan rental will seamlessly change colour
                  Rent Sharpe Beam Lights & Moving Heads  <br />
                </p>
                <a href="/decoration-lights-rental-service-in-bangalore">
                  <button>know more</button>
                </a>
              </div>
            </div>
            <div className={`${styles.topGap} ${styles.card4}`} style={{ background: `url('/assets/services/lgtv.webp')`, backgroundPosition: 'right center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
              <div className={styles.bg}>
                <p className={styles.head}>LED TV</p>
                <p className={styles.context}>We offer LED TVs for rent in sizes ranging from 40 inches to 75 inches, ensuring that you find the
                  optimal display size for your event. <br />
                </p>
                <a href="/led-tv-and-wall-rental-services-bangalore">
                  <button>know more</button>
                </a>
              </div>
            </div>


            <div className={styles.card5} style={{ background: `url('/assets/services/lgtv.webp')`, backgroundPosition: 'right center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
              <div className={styles.bg}>
                <p className={styles.head}>Photography-Videography</p>
                <p className={styles.context}>Capture lasting memories of your Weddings, Corporate events, and personal celebrations from...
                </p>
                <a href="/photography-and-videography-rental-services-in-bangalore">
                  <button>know more</button>
                </a>
              </div>
            </div>



            <div className={`${styles.topGap} ${styles.card6}`} style={{ background: `url('/assets/services/lgtv.webp')`, backgroundPosition: 'right center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
              <div className={styles.bg}>
                <p className={styles.head}>Shamiana</p>
                <p className={styles.context}>Shriram Visuals offers comprehensive event management services and high-quality event materials in Bangalore.
                </p>
                <a href="/shamiana-rental-services">
                  <button>know more</button>
                </a>
              </div>
            </div>



            <div className={styles.card7} style={{ background: `url('/assets/services/lgtv.webp')`, backgroundPosition: 'right center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
              <div className={styles.bg}>
                <p className={styles.head}>DJ Packages</p>
                <p className={styles.context}>Take your celebrations to the next level with a professional DJ package from Shriram Visuals.
                </p>
                <a href="/dj-packages-for-rent">
                  <button>know more</button>
                </a>
              </div>
            </div>



            <div className={`${styles.topGap} ${styles.card8}`} style={{ background: `url('/assets/services/lgtv.webp')`, backgroundPosition: 'right center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
              <div className={styles.bg}>
                <p className={styles.head}>Wedding Packages</p>
                <p className={styles.context}>Shriram Visuals offers a stress free solutions with our comprehensive Wedding Package.
                </p>
                <a href="/wedding-packages">
                  <button>know more</button>
                </a>
              </div>
            </div>



            <div className={styles.card9} style={{ background: `url('/assets/services/lgtv.webp')`, backgroundPosition: 'right center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
              <div className={styles.bg}>
                <p className={styles.head}>Live Streaming</p>
                <p className={styles.context}> Stream your audio and video flawlessly to engage your audience anywhere in the world with live streaming.
                </p>
                <a href="/live-streaming-webcasting-for-rent-in-bangalore">
                  <button>know more</button>
                </a>
              </div>
            </div>



            <div className={`${styles.topGap} ${styles.card10}`} style={{ background: `url('/assets/services/lgtv.webp')`, backgroundPosition: 'right center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
              <div className={styles.bg}>
                <p className={styles.head}>Flower And Balloon Decorations</p>
                <p className={styles.context}>Transform your venue with vibrant and eye-catching flower and balloon decorations from Shriram Visuals, your reliable balloon decoration service.
                </p>
                <a href="/flower-and-balloon-decorations-for-rent-in-bangalore">
                  <button>know more</button>
                </a>
              </div>
            </div>

            <div className={styles.card11} style={{ background: `url('/assets/services/lgtv.webp')`, backgroundPosition: 'right center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
              <div className={styles.bg}>
                <p className={styles.head}>Catering</p>
                <p className={styles.context}>Our experience chefs are passionate about crafting delicious and visually stunning dishes.
                </p>
                <a href="/professional-catering-services-in-bangalore">
                  <button>know more</button>
                </a>
              </div>
            </div>

            <div className={`${styles.topGap} ${styles.card12}`} style={{ background: `url('/assets/services/lgtv.webp')`, backgroundPosition: 'right center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
              <div className={styles.bg}>
                <p className={styles.head}>T-Shirts And Corporate Gifts</p>
                <p className={styles.context}>Looking for impactful promotional tools or thoughtful employee appreciation gifts in Bangalore.
                </p>
                <a href="/custom-t-shirts-and-corporate-gifts-providers-bangalore">
                  <button>know more</button>
                </a>
              </div>
            </div>

          </Slider>
        </div>
      </div>
    </>
  )
}

export default Services