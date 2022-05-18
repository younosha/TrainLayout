import React from 'react';
import HowItWorksItem from './HowItWorksItem';
import styles from './HowItWorksSection.module.css'
import item1Image from '../../images/Item1.svg'
import item2Image from '../../images/Item2.svg'
import item3Image from '../../images/Item3.svg'

const HowItWorksSection = () => {
    return <div className={styles.wrapper}>
        <div className={styles.content}>
            <p className={styles.smallText}>How it works</p>
            <p className={styles.bigText}>Same-day delivery</p>
            <p className={styles.bigText}>in 3-simple steps.</p>
            <div className={styles.listItems}>
                <HowItWorksItem image={item1Image} number="1" title="Connect & send inventory" description="Install our app and connect your store. Import your products and send your inventory to any of our facilities or your most popular delivered city."/>
                <HowItWorksItem image={item2Image} number="2" title="We sort and store" description="Our team will sort and store your inventory at our micro-fulfilment centers positioned conveniently near your customers."/>
                <HowItWorksItem image={item3Image} number="3" title="Shipped & delivered within hours" description="Once an order is placed, we pack and send your order out using local courier partners. All tracked conveniently through your custom tracking page."/>
            </div>
        </div>
    </div>
}

export default HowItWorksSection;