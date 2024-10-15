import React from "react";
import Castle from './sprite5-sheet0.png';
import styles from './header.module.css';
import Bat from './bat1.png';
import NavBar from "../navbar/navBar";

function Header() {
    return (
    <div className={styles.header}>
        <div>
            <img className={styles.castle} src={Castle} alt="castle"></img>
        </div>
        <h1 className={styles.welcome}>Welcome</h1>
        <NavBar />
        <img className={styles.animatedBat} src={Bat} alt="bat"></img>
    </div>
    )
}

export default Header;