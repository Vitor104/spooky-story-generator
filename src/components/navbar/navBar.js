import React from "react";
import styles from './navBar.module.css';
import Pumpkin1 from '../header/pumpkin1.png';

function NavBar() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <img className={styles.hoverPumpkin} src={Pumpkin1} alt="Pumpkin"></img>
                    About me
                </li>
                <li>
                    <img className={styles.hoverPumpkin} src={Pumpkin1} alt="Pumpkin"></img>
                    Home
                </li>
            </ul>
        </nav>
    )
}


export default NavBar;