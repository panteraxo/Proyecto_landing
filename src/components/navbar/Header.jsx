import React from "react";
import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <header className="flex justify-between items-center mx-10 border-b-2">
      <div className="w-36 h-20">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex space-x-12 font-roboto font-bold">
        <a href="#">Inicio</a>
        <a href="#">Servicios</a>
        <a href="#">Sobre nosotros</a>
        <a href="#">Beneficios</a>
        <a href="#">Contacto</a>
      </div>
      <div>
        <p>login</p>
      </div>
    </header>
  );
}

export default Header;
