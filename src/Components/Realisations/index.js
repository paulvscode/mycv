import React from "react";
import Dn from "../../assets/images/dn.png";
import "./styles.css";

const Realisations = () => {
  return (
    <div className='container-realisations'>
      <div className='positionning-div-realisations'>Réalisations</div>
      <div className='content-realisations'>
        <div className='realisation-box'>
          <div className='container-hover'>
            <img className='resize-image' src={Dn} alt='' />
            <div className='color-me'></div>
          </div>
        </div>
        <div className='realisation-box'></div>
        <div className='realisation-box'></div>
        <div className='realisation-box'></div>
        <div className='realisation-box'></div>
        <div className='realisation-box'></div>
        <div className='realisation-box'></div>
        <div className='realisation-box'></div>
      </div>
    </div>
  );
};

export default Realisations;
