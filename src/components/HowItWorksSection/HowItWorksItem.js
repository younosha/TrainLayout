import React from 'react';
import styles from './HowItWorksSection.module.css'

const HowItWorksItem = ({image, number, title, description}) => {
    return <div className={styles.itemWrapper}>
        <img src={image} alt={title} className={styles.imageItem} style={number === '1' ? {marginTop: '25px'} : {}}/>
        <div style={{marginTop: '20px'}}>
            <p className={styles.title}>{number}. {title}</p>   
            <p className={styles.description}>{description}</p>
        </div>
    </div>
}

export default HowItWorksItem;