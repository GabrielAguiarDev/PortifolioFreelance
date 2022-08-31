import React from 'react'

const Wedding = ({ active }) => {
  return (
    <div className={`${active}`}>
        <div className="cardImage">
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            <img src={process.env.PUBLIC_URL + "/images/gallery/wedding/wedding-0.jpg"} alt="imagem do evento" />
        </div>
        <div className="cardImage">
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            <img src={process.env.PUBLIC_URL + "/images/gallery/wedding/wedding-1.jpg"} alt="imagem do evento" />
        </div>
        <div className="cardImage">
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            <img src={process.env.PUBLIC_URL + "/images/gallery/wedding/wedding-2.jpg"} alt="imagem do evento" />
        </div>
        <div className="cardImage">
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            <img src={process.env.PUBLIC_URL + "/images/gallery/wedding/wedding-3.jpg"} alt="imagem do evento" />
        </div>
        {/* <div className="cardImage">
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            <img src={process.env.PUBLIC_URL + "/images/gallery/wedding/wedding-4.jpg"} alt="imagem do evento" />
        </div>
        <div className="cardImage">
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            <img src={process.env.PUBLIC_URL + "/images/gallery/wedding/wedding-5.jpg"} alt="imagem do evento" />
        </div> */}
    </div>
  )
}

export default Wedding