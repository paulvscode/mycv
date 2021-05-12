import React from "react";
import "./styles.css";

const JobTitle = () => {
  return (
    <div className='container-jobtitle'>
      <div className='content-jobtitle'>
        <h1 className='introduction-jobtitle'>
          {" "}
          Je suis un développeur Javascript fullstack.
        </h1>
        <p className='paragraphe-jobtitle'>
          Je suis spécialisé en React pour le front-end et en Node Js pour le
          back-end.
        </p>
        <p className='paragraphe-jobtitle'>
          Suite à ma formation chez{" "}
          <a
            target='_blank'
            rel='noreferrer'
            className='oclock'
            href='https://oclock.io/'
          >
            O'clock
          </a>
          , je suis à la recherche d'un poste de développeur fullstack junior
          dans la région du Havre ou en non-présentiel.
        </p>
      </div>
    </div>
  );
};

export default JobTitle;
