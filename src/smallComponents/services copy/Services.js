import React from 'react'
import styles from './services.module.css'
import Slider from "react-slick";


const settings = {
  dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    
};
const Services = () => {
  return (


    <div className={styles.container}>
      <h2>Our  Services</h2>
      <Slider {...settings} >
        {/* <div className={styles.cards}> */}
        <div className={styles.card} style={{background:`url('/assets/images/Maskgroup4324.png')`, backgroundPosition:'center', backgroundRepeat:'no-repeat',backgroundSize:'cover', marginRight:'20px'}}>
        <div className={styles.bg}>
            <p className={styles.head}>Projector</p>
            <p className={styles.context}>Brand: Epson X49 
Manufacturer: Sony <br/>
Interface: VGA, HDMI, VGA <br/>
Aspect Ratio: 4:3 <br/>
Brightness: 3600 Lumens </p>
            <button>know more</button>
         </div>
         </div>
        <div className={`${styles.topGap} ${styles.card}`} style={{background:`url('/assets/images/dj.png')`, backgroundPosition:'center right', backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
        <div className={styles.bg}>
            <p className={styles.head}>Speakers</p>
            <p className={styles.context}>Brand: JBL PRX915 <br/>
            Power: 2000 watts peak/1000 watts RMS each <br/>
            Max SPL:  133 dB <br/>
            {/* The JBL PRX915, powered by loudspeakers and subwoofers, takes professional portable PA 
performance to a new level with advanced acoustics. */} 
</p>
            <button>know more</button>
         </div>
         </div>
        <div className={styles.card} style={{background:`url('/assets/images/lighting.png')`, backgroundPosition:'right center', backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
        <div className={styles.bg}>
            <p className={styles.head}>Lighting</p>
            <p className={styles.context}>LED Parcan rental will seamlessly change colour
            Rent Sharpe Beam Lights & Moving Heads  <br/>
</p>
            <button>know more</button>
         </div>
         </div>
        <div className={`${styles.topGap} ${styles.card}`} style={{background:`url('/assets/services/lgtv.png')`, backgroundPosition:'right center', backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
        <div className={styles.bg}>
            <p className={styles.head}>LED TV</p>
            <p className={styles.context}>We offer LED TVs for rent in sizes ranging from 40 inches to 75 inches, ensuring that you find the 
optimal display size for your event. <br/>
 </p>
            <button>know more</button>
         </div>
         </div>
      {/*   </div> */}
      </Slider>
    </div>
  )

  $('.container').slick({
    dots: true, // Enable dots navigation
    slidesToShow: 4 // Display only 4 slides at a time
});

}

export default Services