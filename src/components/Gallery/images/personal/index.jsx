import React from "react";

const Personal = ({ active }) => {
  return (
    <div className={`${active}`}>
      <div className="cardImage">
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
        <img
          src={
            process.env.PUBLIC_URL + "/images/gallery/personal/personal-0.jpg"
          }
          alt="imagem do evento"
        />
      </div>
      <div className="cardImage">
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
        <img
          src={
            process.env.PUBLIC_URL + "/images/gallery/personal/personal-1.jpg"
          }
          alt="imagem do evento"
        />
      </div>
      <div className="cardImage">
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
        <img
          src={
            process.env.PUBLIC_URL + "/images/gallery/personal/personal-2.jpg"
          }
          alt="imagem do evento"
        />
      </div>
      <div className="cardImage">
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
        <img
          src={
            process.env.PUBLIC_URL + "/images/gallery/personal/personal-3.jpg"
          }
          alt="imagem do evento"
        />
      </div>
      <div className="cardImage">
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
        <img
          src={
            process.env.PUBLIC_URL + "/images/gallery/personal/personal-4.jpg"
          }
          alt="imagem do evento"
        />
      </div>
      <div className="cardImage">
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
        <img
          src={
            process.env.PUBLIC_URL + "/images/gallery/personal/personal-5.jpg"
          }
          alt="imagem do evento"
        />
      </div>
    </div>
  );
};

export default Personal;
