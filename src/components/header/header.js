import React from "react";
import Castle from './Castle 1024px.png';
import styles from './header.module.css';
import Bat from './bat1.png';
import NavBar from "../navbar/navBar";

function Header() {
    return (
    <div className={styles.header}>
        <img className={styles.castle} src={Castle} alt="castle"></img>
    </div>
    )
}

export default Header;