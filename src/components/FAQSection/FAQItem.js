import React, {useState} from "react";
import styles from './FAQSection.module.css'
import arrow from '../../images/Arrow.svg'

const FAQItem = ({title, description}) => {
    const [showDescription, setShowDescription] = useState(false);

    return <div className={styles.itemWrapper}>
        <div className={styles.itemTitle}>{title}<img src={arrow} alt="FAQITEM" className={showDescription ? styles.arrowTop : styles.arrowBottom} onClick={() => setShowDescription(prev => !prev)}/></div>
        {showDescription && <div className={styles.itemDescription}>{description}</div>}
    </div>
}

export default FAQItem;