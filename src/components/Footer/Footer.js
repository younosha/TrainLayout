import React from "react";
import styles from './Footer.module.css';
import logo from '../../images/Frame.svg'

const Footer = () => {
    return <div className={styles.wrapper}>
        <div className={styles.leftPart}>
            <img src={logo} alt="logo"/>
            <p className={styles.grayText}>Same-day fullfilment &</p>
            <p className={styles.grayText}>delivery for Shopify brands.</p>
            <p className={styles.grayText}>© 2021 Localli LLC</p>
        </div>
        <div className={styles.rightPart}>
            <div className={styles.column}>
                <p className={styles.grayText}>Links</p>
                <p>How it works</p>
                <p>Pricing</p>
                <p>Sign up</p>
            </div>
            <div className={styles.column}>
                <p className={styles.grayText}>Resources</p>
                <p>FAQ's</p>
                <p>Help Center</p>
                <p>Blog</p>
            </div>
            <div className={styles.column}>
                <p className={styles.grayText}>Company</p>
                <p>About us</p>
                <p>Privacy policy</p>
                <p>Terms of use</p>
            </div>
        </div>
    </div>
}

export default Footer;