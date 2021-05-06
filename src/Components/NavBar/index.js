import React from "react";
import "./styles.css";

const NavBar = () => {
  return (
    <div className='grid-container-navbar'>
      <div className='navbar-name'>Paul Barraud de Lagerie</div>
      <div className='navbar-realisation'>Réalisations</div>
      <div className='navbar-cvenligne'>Cv en ligne</div>
      <div className='navbar-contact'>Contact</div>
    </div>
  );
};

export default NavBar;
