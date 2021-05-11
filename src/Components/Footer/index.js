import React from "react";
import LinkedIn from "../../assets/images/174857.png";
import "./styles.css";

const Footer = () => {
  return (
    <div className='container-footer'>
      <p className='copyright'>Copyright Paul Barraud de Lagerie - 2021</p>
      <a
        rel='noreferrer'
        target='_blank'
        href='https://www.linkedin.com/in/paulbarrauddelagerie/'
      >
        <img className='linkedin-logo' src={LinkedIn} alt='Linked in' />
      </a>
    </div>
  );
};

export default Footer;
