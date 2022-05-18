import React, {useState, useEffect} from "react";
import styles from './Header.module.css'
import logo from '../../images/Frame.svg'
import Menu from "../Menu/Menu";

const Header = () => {
    const [menuBurger, setMenuBurger] = useState(false);

    const controlSize = width => {
        if (width < 665) {
            setMenuBurger(true);
        } else {
            setMenuBurger(false);
        }
    }
    useEffect(() => {
        controlSize(window.innerWidth);
        window.addEventListener('resize', e => {
            if (e.target) {
                controlSize(e.target.innerWidth);
            }
        })
    }, [])
    return <div className={styles.container}>
        <div>
            <img src={logo} alt="logo"/>
        </div>
        <Menu isBurger={menuBurger}/>
    </div>
}

export default Header;