import React from "react";
import Dn from "../../assets/images/dn.png";
import Okan from "../../assets/images/okanban.png";
import "./styles.css";

const Realisations = () => {
  return (
    <div className='container-realisations'>
      <div className='positionning-div-realisations'>Réalisations</div>
      <div className='content-realisations'>
        <div className='realisation-box'>
          <div className='container-hover'>
            <img className='resize-image' src={Dn} alt='' />
            <div className='color-me'>
              <p>
                Digital Nomad est un site dit 'entonnoir' qui facilite l'accès
                aux données aux personnes souhaitant se convertir au nomadisme
                digital.
              </p>
              <p>Développé avec :</p>
            </div>
          </div>
        </div>
        <div className='realisation-box'>
          <div className='container-hover'>
            <img className='resize-image' src={Okan} alt='' />
            <div className='color-me'>
              <p>
                Okanban est une application de type Kanban avec son organisation
                "A faire", "en cours", "terminé".
              </p>
              <p> Développé avec :</p>
            </div>
          </div>
        </div>
        <div className='realisation-box'>
          <div className='container-hover'>
            <img
              className='resize-image'
              src='https://cdn.ebaumsworld.com/thumbs/gallery/24627/85870588.jpg'
              alt=''
            />
            <div className='color-me'>
              <p>Kermit buvant une boisson.</p>
              <p> Développé avec :</p>
            </div>
          </div>
        </div>
        <div className='realisation-box'>
          <div className='container-hover'>
            <img
              className='resize-image'
              src='https://50-best.com/wp-content/uploads/2018/12/swimming_tiger.jpg'
              alt=''
            />
            <div className='color-me'>
              <p>Ricardo chasse la croquette.</p>
              <p> Développé avec :</p>
            </div>
          </div>
        </div>
        <div className='realisation-box'></div>
        <div className='realisation-box'></div>
        <div className='realisation-box'></div>
        <div className='realisation-box'></div>
      </div>
    </div>
  );
};

export default Realisations;
