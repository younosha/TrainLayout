import React from "react";
import styles from './MapSection.module.css'
import MapImage from '../../images/Map.svg'

const MapSection = () => {
    return <div className={styles.wrapper}>
        <p className={styles.title}>Expanding to a city near you.</p>
        <p className={styles.description}>Localli is growing every month to offer delivery to your customers in as little as 2-hours. As we expand, so do you.</p>
        <p className={styles.description}>Currently operating: Los Angeles and Miami</p>
        <img src={MapImage} alt="MapImage" className={styles.image}/>
    </div>
}

export default MapSection;