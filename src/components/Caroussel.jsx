import React from 'react';
import arrow from "../assets/vectorGauche.png";

function Caroussel({ setClickCount, clickCount, picturesArray }) {
    return picturesArray.length > 1 ? (
      <div className="caroussel">
        <span className="picture__order">
          {clickCount + 1 + "/" + picturesArray.length}
        </span>
        <img
          src={arrow}
          alt="clic gauche"
          id="leftClick"
          onClick={() => {
            clickCount <= 0
              ? setClickCount(picturesArray.length - 1)
              : setClickCount(clickCount - 1);
          }}
        />
        <img
          src={picturesArray[clickCount]}
          alt="Images du caroussel"
          className="pictures"
        />
        <img
          src={arrow}
          alt="clic droit"
          id="rightClick"
          onClick={() => {
            clickCount >= picturesArray.length - 1
              ? setClickCount(0)
              : setClickCount(clickCount + 1);
          }}
        />
      </div>
    ) : (
      
      <div className="caroussel max__width">
        <img
          src={picturesArray[0]}
          alt="Images du caroussel"
          className="pictures"
        />
      </div>
    );
  }

  export default Caroussel;