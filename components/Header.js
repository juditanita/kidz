import React from "react";
import sunflower from "../assets/image/logo_kids.png";

export default function Header() {
  return (
    <header>
      <a href="#" class="logo">
        <img src={sunflower} alt="sunflower" />
        Kidz
      </a>

      <div className="header__btn">
        <i className="ri-menu-line"></i>
        <i className="ri-close-line hide"></i>
      </div>

      <nav class="navbar">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#services">Courses</a>
        <a href="#teacher">Teachers</a>
        <a href="#fees">Fees</a>
        <a href="#contactMes">Contact</a>
      </nav>
    </header>
  );
}
