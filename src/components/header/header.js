import React from "react";
import hidePumpkin from './pumpkin1.png';
import pumpkin from './pumpkin-2892303_1280.jpg';
import styles from './header.module.css';
import Bat from './bat1.png';
import Footer from "../footer/footer";

function Header() {
    return (
    <div className={styles.header}>
        <section className={styles.appName}>
            <img className={styles.pumpkinImage} src={pumpkin} alt="hide pumpkin"></img>
            <h1 className={styles.name}>Spooky Story Generator</h1>
        </section>
        <div className={styles.divBtn}>
            <h2>Welcome to the <span>Spooky Story Generator!</span></h2>
            <p>If you're ready, click the button and generate a spooky story!</p>
            <button type="button" class="btn btn-warning btn-lg">Create a new story</button>
        </div>
        <div></div>
        
        
    </div>
    )
}

export default Header;