import React from "react";
import FAQItem from "./FAQItem";
import styles from './FAQSection.module.css'

const FAQ_ITEMS = [
    {
        title: 'How fast is same-day delivery?',
        description: 'Description1'
    },
    {
        title: 'Is it expensive to offer same-day delivery?',
        description: 'Description2'
    },
    {
        title: 'Where are these fulfilment centers located?',
        description: 'Description3'
    },
    {
        title: 'How will customers be able to choose this delivery option?',
        description: 'Description4'
    },
    {
        title: 'How can I get Localli?',
        description: 'Description5'
    },
];

const FAQSection = () => {
    return <div className={styles.wrapper}>
        <div className={styles.content}>
            <p className={styles.title}>Frequently asked questions.</p>
            <div className={styles.itemsWrapper}>
                {FAQ_ITEMS.map(item => <FAQItem title={item.title} description={item.description}/>)}
            </div>
        </div>
    </div>
}

export default FAQSection;