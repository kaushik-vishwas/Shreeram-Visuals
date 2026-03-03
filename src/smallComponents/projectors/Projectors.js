import React from 'react'
import styles from './projector.module.css'
const Projectors = ({ specialStyle, topic, pr1, pr2, pr3, pr4, pr5, pr6, t1, t2, t3, t4, t5, t6,
  para1, para2, para3, para4, para5, para6, para8, para9, para10 }) => {
  return (
    <div className={styles.container}>
      <h2>{/* Our range of branded */} {topic}</h2>
      <div className={styles.products} style={specialStyle ? { display: 'flex', } : { display: 'grid' }}>
        {pr1 ? <div className={styles.product} >
          <div className={styles.imagebg}>
            <img src={pr1} alt="shriramvisuals" />
          </div>
          <h4>{t1}</h4>
          <p>{para1}</p>
          {/* <div className={styles.speakers}><a href='/contact-us'><button>Enquire Now</button></a></div> */}
        </div> : null}

        {pr2 ? <div className={`${styles.topGap} ${styles.product}`}>
          <div className={styles.imagebg}>
            <img src={pr2} alt="projector" />
          </div>
          <h4>{t2}</h4>
          <p>{para2}</p>
          {/* <div className={styles.speakers}><a href='/contact-us'><button>Enquire Now</button></a></div> */}
        </div> : null}

        {pr3 ? <div className={styles.product}>
          <div className={styles.imagebg}>
            <img src={pr3} alt="shriramvisuals" />
          </div>
          <h4>{t3}</h4>
          <p>{para3}</p>
          {/* <div className={styles.speakers}><a href='/contact-us'><button>Enquire Now</button></a></div> */}
        </div> : null}

        {pr4 ? <div className={`${styles.topGap} ${styles.product}`}>
          <div className={styles.imagebg}>
            <img src={pr4} alt="shriramvisuals" />
          </div>
          <h4>{t4}</h4>
          <p>{para4}</p>
          {/* <div className={styles.speakers}><a href='/contact-us'><button>Enquire Now</button></a></div> */}
        </div> : null}

        {pr5 ? <div className={styles.product}>
          <div className={styles.imagebg}>
            <img src={pr5} alt="shriramvisuals" />
          </div>
          <h4>{t5}</h4>
          <p>{para5}</p>
          {/* <div className={styles.speakers}><a href='/contact-us'><button>Enquire Now</button></a></div> */}
        </div> : null}

        {pr6 ? <div className={`${styles.topGap} ${styles.product}`}>
          <div className={styles.imagebg}>
            <img src={pr6} alt="rentals" />
          </div>
          <h4>{t6}</h4>
          <p>{para6}</p>
          {/* <div className={styles.speakers}><a href='/contact-us'><button>Enquire Now</button></a></div> */}
        </div> : null}
      </div>
      {/* <div className={styles.paras}>
       <br/> <br/> <p>{para8}</p>
       <br/>  <p>{para9}</p>
       <br/><p>{para10}</p>
      </div> */}
    </div>
  )
}

export default Projectors
