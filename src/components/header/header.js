import React from "react";
import Castle from './sprite5-sheet0.png';
import styles from './header.module.css';

function Header() {
    return (
    <div className={styles.header}>
        <h1 className={styles.welcome}>Welcome</h1>
    </div>
    )
}

export default Header;