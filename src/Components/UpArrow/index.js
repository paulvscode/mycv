import React from "react";
import "./styles.css";

const UpArrow = () => {
  return (
    <div>
      <div
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className='up-arrow'
      >
        UP
      </div>
    </div>
  );
};

export default UpArrow;
