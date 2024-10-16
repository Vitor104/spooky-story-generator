import React from "react";
import styles from './navBar.module.css';
import Pumpkin1 from '../header/pumpkin1.png';

function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark rounded p-3">
        <a class="navbar-brand text-white" href="#">SSG</a>
        <button class="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link text-white" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">About me</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled text-white" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
    )
}


export default NavBar;