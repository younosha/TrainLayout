import React, {useEffect, useState} from "react";
import styles from './Menu.module.css';
import Button from '../RequestButton/RequestButton'

const Menu = ({isBurger}) => {
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        window.addEventListener('click', (e) => {
            if (!e.target.className.includes('Menu') && !showMenu) {
                setShowMenu(false);
            }
        })
    }, [showMenu]);

    return !isBurger ? 
        <div className={styles.actionBlock}>
            <a className={styles.p} href="/">How it works</a>
            <a className={styles.p} href="/">Pricing</a>
            <Button/>
        </div>
        : 
        <div className={styles.burgerWrapper}>
            <button className={styles.burger} onClick={() => setShowMenu(!showMenu)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </button>
            {showMenu && <div className={styles.burgerMenu}>
                <div className={styles.menuItem} onClick={() => setShowMenu(false)}>How it works</div>
                <div className={styles.menuItem} onClick={() => setShowMenu(false)}>Pricing</div>
                <div className={styles.menuItem} onClick={() => setShowMenu(false)}>Request beta</div>
            </div>}
        </div>
}

export default Menu;