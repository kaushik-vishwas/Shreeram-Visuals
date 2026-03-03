import React from 'react'
import styles from './hero.module.css';

const Hero = ({title, subtitle, Image, tagh1}) => {
  return (
    <div className={styles.container} style={{background:`url(${Image})`, backgroundSize:'cover',backgroundRepeat:'no-repeat', backgroundPosition:'center'}}>
      <div className={styles.content}>
        <p className={styles.heading}>Welcome to Shriram Visuals</p>
        <h3 className={styles.headline}>Light your Stage with Sound </h3>
        <h2 className={styles.title}>{title}</h2>
        <h1 className={styles.tagh1}>{tagh1}</h1>
     
      </div>
    </div>
  )
}

export default Hero
