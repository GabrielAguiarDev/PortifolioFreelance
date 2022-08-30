import React from 'react'

const Personal = ({ active }) => {
  return (
    <div className={`${active}`}>
        <div className="cardImage">
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            <img src={process.env.PUBLIC_URL + "/images/gallery/personal/personal-00.jpg"} alt="imagem do evento" />
        </div>
        <div className="cardImage">
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            <img src={process.env.PUBLIC_URL + "/images/gallery/personal/personal-1.jpg"} alt="imagem do evento" />
        </div>
        <div className="cardImage">
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            <img src={process.env.PUBLIC_URL + "/images/gallery/personal/personal-2.jpg"} alt="imagem do evento" />
        </div>
        <div className="cardImage">
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            <img src={process.env.PUBLIC_URL + "/images/gallery/personal/personal-3.jpg"} alt="imagem do evento" />
        </div>
        <div className="cardImage">
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            <img src={process.env.PUBLIC_URL + "/images/gallery/personal/personal-4.jpg"} alt="imagem do evento" />
        </div>
        <div className="cardImage">
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            <img src={process.env.PUBLIC_URL + "/images/gallery/personal/personal-5.jpg"} alt="imagem do evento" />
        </div>
        <div className="cardImage">
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            <img src={process.env.PUBLIC_URL + "/images/gallery/personal/personal-6.jpg"} alt="imagem do evento" />
        </div>
        <div className="cardImage">
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            <img src={process.env.PUBLIC_URL + "/images/gallery/personal/personal-7.jpg"} alt="imagem do evento" />
        </div>
        <div className="cardImage">
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            <img src={process.env.PUBLIC_URL + "/images/gallery/personal/personal-8.jpg"} alt="imagem do evento" />
        </div>
        <div className="cardImage">
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            <img src={process.env.PUBLIC_URL + "/images/gallery/personal/personal-9.jpg"} alt="imagem do evento" />
        </div>
    </div>
  )
}

export default Personal