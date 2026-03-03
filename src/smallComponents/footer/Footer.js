import React from 'react'
import styles from './footer.module.css'
// import './footer.css'
import { FaFacebook, FaInstagram, FaPinterest, FaTiktok, FaTwitter } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.footer}>
                    <div className={styles.footer1}>

                        <div className={styles.logo}>
                            <img src="/assets//images/logo4.png" alt="shri ram visuals" />
                            <div className={styles.headings}>Shriram Visuals</div>
                            <div className={styles.taglink}>Light your Stage with Sound</div>
                        </div>

                        <div className={styles.links_col1}>
                            <h2>Quick Links</h2>
                            <div className={styles.line}></div>
                            <div className={styles.row}>

                                <a href='/'>
                                    <p className={styles.links}>Home</p>
                                </a>
                                <a href='/about-us'>
                                    <p className={styles.links}>About us</p>
                                </a>
                                <a href='/service-listing'>
                                    <p className={styles.links}>Services</p>
                                </a>
                                <a href='/contact-us'>
                                    <p className={styles.links}>Contact us</p>
                                </a>
                                {/* <a href='/'>
  <p className={styles.links}>Rental policy</p>
  </a> */}

                                {/* <p> <NavLink to='/' className={styles.links}>Home</NavLink> </p> */}
                            </div>
                        </div>

                        <div className={styles.links_col2}>
                            <h2>Services</h2>
                            <div className={styles.line}></div>
                            <div className={styles.cols}>
                                <div className={styles.row}>
                                    <a href='/best-projector-screen-rental-in-bangalore'>
                                        <p className={styles.links}>Projector</p>
                                    </a>
                                    <a href='/premium-speaker-rentals-in-bangalore'>
                                        <p className={styles.links}>Speakers</p>
                                    </a>
                                    <a href='/led-tv-and-wall-rental-services-bangalore'>
                                        <p className={styles.links}>LED TV</p>
                                    </a>
                                    <a href='/decoration-lights-rental-service-in-bangalore'>
                                        <p className={styles.links}>Lighting</p>
                                    </a>
                                    <a href='/photography-and-videography-rental-services-in-bangalore'>
                                        <p className={styles.links}>Photography-Videography</p>
                                    </a>
                                    <a href='/shamiana-rental-services'>
                                        <p className={styles.links}>Shamiana</p>
                                    </a>
                                    <a href='/dj-packages-for-rent'>
                                        <p className={styles.links}>DJ Packages</p>
                                    </a>

                                </div>
                                <div className={styles.row}>
                                    <a href='/wedding-packages'>
                                        <p className={styles.links}>Wedding Packages</p>
                                    </a>
                                    <a href='/live-streaming-webcasting-for-rent-in-bangalore'>
                                        <p className={styles.links}>Live Streaming</p>
                                    </a>
                                    <a href='/flower-and-balloon-decorations-for-rent-in-bangalore'>
                                        <p className={styles.links}>Flower And Balloon Decorations</p>
                                    </a>
                                    <a href='/professional-catering-services-in-bangalore'>
                                        <p className={styles.links}>Catering</p>
                                    </a>
                                    <a href='/custom-t-shirts-and-corporate-gifts-providers-bangalore'>
                                        <p className={styles.links}>T-Shirts And Corporate Gifts</p>
                                    </a>
                                    <a href='/services/emcee-services-corporate-events-bangalore'>
                                        <p className={styles.links}>Other Services</p>
                                    </a>



                                </div>
                            </div>
                        </div>
                        <div className={styles.links_col3}>
                            <h2>Address</h2>
                            <div className={styles.line}></div>
                            <div className={styles.row}>
                                <div className={styles.row1}>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.33 14.9 16.22 14.89 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.38 15.93 8.06 13.62 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3Z"
                                            fill="#A5B9CC"
                                        />
                                    </svg>
                                    <a href="tel:+9986793055" style={{ color: '#A5B9CC', textDecoration: 'none' }}>
                                        +9986793055
                                    </a>
                                </div>
                                <div className={styles.row1}>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
                                            fill="#A5B9CC"
                                        />
                                    </svg>
                                    <a
                                        href="mailto:support@shriramvisuals.com"
                                        style={{ color: '#A5B9CC', textDecoration: 'none' }}
                                    >
                                        support@shriramvisuals.com
                                    </a>
                                </div>

                                <div className={styles.row1}>
                                    <svg
                                        width="28"
                                        height="28"
                                        viewBox="0 0 28 28"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M14.0002 2.33398C18.5152 2.33398 22.1668 5.98565 22.1668 10.5007C22.1668 16.6257 14.0002 25.6673 14.0002 25.6673C14.0002 25.6673 5.8335 16.6257 5.8335 10.5007C5.8335 5.98565 9.48516 2.33398 14.0002 2.33398ZM8.16683 10.5007C8.16683 13.8257 11.5735 18.9123 14.0002 22.0273C16.4735 18.889 19.8335 13.8607 19.8335 10.5007C19.8335 7.28065 17.2202 4.66732 14.0002 4.66732C10.7802 4.66732 8.16683 7.28065 8.16683 10.5007ZM14.0002 13.4173C12.3893 13.4173 11.0835 12.1115 11.0835 10.5007C11.0835 8.88982 12.3893 7.58398 14.0002 7.58398C15.611 7.58398 16.9168 8.88982 16.9168 10.5007C16.9168 12.1115 15.611 13.4173 14.0002 13.4173Z"
                                            fill="#A5B9CC"
                                        />
                                    </svg>
                                    <a
                                        href="https://www.google.com/maps/place/Shriram+Visuals+%7C+Projector+on+rentals+%7C+Speakers+on+rent+%7C+LED+Walls+for+rent/@12.952231,77.5816129,15z/data=!3m1!4b1!4m6!3m5!1s0x3bae15f8d66136a5:0xd20a75903230b11e!8m2!3d12.9522107!4d77.600067!16s%2Fg%2F11rmrdyhly?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D "
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: '#A5B9CC', textDecoration: 'none' }}
                                    >
                                        #107/V J.K.Pura Main Road, Near R.K.School, Vinayaknagar, Bangalore – 560030
                                    </a>
                                    <br />
                                    <a href="http://www.shriramvisuals.com" target="_blank" rel="noopener noreferrer" style={{ color: '#A5B9CC', textDecoration: 'none' }}>
                                        www.shriramvisuals.com

                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <p className={styles.texts}>© 2024 All rights reserved.</p></div>
                </div>
                <div className={styles.bg}>
                    <div className={styles.highlighted}>
                        <h2>Contact us through Call, Whatsapp or SMS on 9986793055 </h2>
                        <br />
                        <div className={styles.buttoncont}>
                            <div>
                                <a href="tel:+919986793055">
                                    <img src="/assets/images/cl.png" alt='phone' width="68" height="68"/>
                                </a>
                            </div>
                            <div>
                                <a href="https://wa.me/+919986793055">
                                    <img src="/assets/images/wh.png" alt="+919986793055"  width="68" height="68"/>
                                </a>
                            </div>
                            <div>
                                <a href="sms:+919986793055?body=Hello">
                                    <img src="/assets/images/ms.png" alt='address'  width="68" height="68"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



            <div className={styles.stickybar}>

                <div>
                    <a href="tel:+919986793055">
                        <img src="/assets/images/cl.png" alt='9985793055' />
                    </a>
                </div>
                <div>
                    <a href="https://wa.me/+919986793055">
                        <img src="/assets/images/wh.png" alt='email' />
                    </a>
                </div>
                <div>
                    <a href="sms:+919986793055?body=Hello">
                        <img src="/assets/images/ms.png" alt='whatsapp' />
                    </a>
                </div>
            </div>

        </>

    )
}

export default Footer
