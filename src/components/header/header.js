import React from "react";
import hidePumpkin from './pumpkin1.png';
import pumpkin from './pumpkin-2892303_1280.jpg';
import styles from './header.module.css';
import Bat from './bat1.png';
import NavBar from "../navbar/navBar";

function Header() {
    return (
    <div className={styles.header}>
        <section className={styles.appName}>
            <img className={styles.pumpkinImage} src={pumpkin} alt="hide pumpkin"></img>
            <h1 className={styles.name}>Spooky Story Generator</h1>
        </section>
        <NavBar />
        <h2 class='text-light'>Welcome!</h2>
        <button type="button" class="btn btn-danger btn-lg">Create a new story</button>
    </div>
    )
}

export default Header;