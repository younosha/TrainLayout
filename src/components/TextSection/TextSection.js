import React from "react";
import styles from './TextSection.module.css'
import Button from '../RequestButton/RequestButton'

const TextSection = () => {
    return <div className={styles.container}>
        <p className={styles.smallText}>Introducing Localli</p>
        <p className={styles.bigText}>Same-day Delivery</p>
        <p className={styles.bigText}>for Shopify Brands.</p>
        <p className={styles.mediaText}>Localli is a fulfilment & delivery service that allows you to offer a same-day delivery experience for <br/> your customers conveniently from their checkout page.</p>
        <div className={styles.actionBlock}>
            <Button/>
            <a href="/" className={styles.howItWork}>How it works</a>
        </div>
    </div>
}

export default TextSection;