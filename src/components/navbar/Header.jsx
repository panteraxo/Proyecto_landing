import React, { useState } from "react";
import logo from "../../assets/images/logo2.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header border-b-2 dark:bg-e1">
      <a className="w-36 h-20">
        <img href="#home" src={logo} alt="logo" />
      </a>

      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <a href="#home">Inicio</a>
        <a href="#service">Servicios</a>
        <a href="#aboutus">Sobre nosotros</a>
        <a href="#testimonial">Testimonios</a>
        <a href="#contact">Contacto</a>
      </nav>
      <div>
        <p className="text-e2 text-xl font-bold login">Login</p>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
    </header>
  );
}

export default Header;
