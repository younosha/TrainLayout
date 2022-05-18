import React from "react";
import styles from './PluseItem.module.css'
import doneImage from '../../images/Done.svg'

const PluseItem = ({text}) => {
    return <div className={styles.wrapper}>
        <img src={doneImage} alt="done"/>
        <p className={styles.text}>{text}</p>
    </div>
}

export default PluseItem;