import React from "react";
import styles from './GetSection.module.css'
import GetImage from '../../images/Get.svg'
import RequestButton from "../RequestButton/RequestButton";

const GetSection = () => {
    return <div className={styles.wrapper}>
        <div className={styles.leftPart}>
            <p className={styles.title}>Get started with</p>
            <p className={styles.title}>Localli today.</p>
            <p className={styles.description}>Localli is growing every month to offer delivery to your customers in as little as 2-hours. As we expand, so do you.</p>
            <RequestButton/>
        </div>
        <div className={styles.rightPart}><img src={GetImage} className={styles.image} alt="GetImage"/></div>
    </div>
}

export default GetSection;