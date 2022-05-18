import React from 'react';
import Image from '../../images/Rectangle.svg'
import styles from './ImageSection.module.css'

const ImageSection = () => {
  return (
      <div className={styles.wrapper}>
        <img 
          src={Image} 
          alt="ImageSection" 
          className={styles.image}
        />
      </div>
  );
}

export default ImageSection;
