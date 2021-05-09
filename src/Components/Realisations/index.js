import React from "react";
import Dn from "../../assets/images/dn.png";
import "./styles.css";

const Realisations = () => {
  return (
    <div className='container-realisations'>
      <div className='positionning-div-realisations'>Réalisations</div>
      <div className='content-realisations'>
        <div className='realisation-box'>
          <img className='dn-image' src={Dn} alt='' />
        </div>
        <div className='realisation-box'>
          <img
            classname='dn-image'
            src='https://picsum.photos/800/400'
            alt=''
          />
        </div>
        <div className='realisation-box'>Réalisation 3</div>
        <div className='realisation-box'>Réalisation 4</div>
        <div className='realisation-box'>Réalisation 5</div>
        <div className='realisation-box'>Réalisation 6</div>
        <div className='realisation-box'>Réalisation 7</div>
        <div className='realisation-box'>Réalisation 8</div>
      </div>
    </div>
  );
};

export default Realisations;
