import React from "react";
import styles from './CustomizeSection.module.css'
import CustomizeImage from '../../images/Customize.svg'
import RequestButton from "../RequestButton/RequestButton";

const CustomizeSection = () => {
    return <div className={styles.wrapper}>
        <div className={styles.part}>
            <p className={styles.title}>Custom Branded</p>
            <p className={styles.title}>Tracking Page.</p>
            <p className={styles.description}>Customize your tracking page and create unique upsell experiences within one page to increase your retention rate. You can also track your sales generated from the tracking page in our beautiful dashboard.</p>
            <RequestButton/>
        </div>
        <div className={styles.part}>
            <img src={CustomizeImage} alt="CustomizeSection" className={styles.image}/>
        </div>
    </div>
}

export default CustomizeSection;