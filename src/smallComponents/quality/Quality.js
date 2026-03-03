import React from 'react'
import styles from './quality.module.css'
const Quality = ({ header, Image, children }) => {
  return (
    <div className={styles.container}>
      <h2>{header}</h2>
      <img src={Image} alt='shriramvisuals'/>
      <br /><br />
      {children}
    </div>
  )
}

export default Quality
