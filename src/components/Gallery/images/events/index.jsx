import React from 'react'

const Events = ({ active }) => {
  return (
    <div className={`${active}`}>
        <div className="cardImage">
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            <img src={process.env.PUBLIC_URL + "/images/gallery/events/event-0.jpg"} alt="imagem do evento" />
        </div>
        <div className="cardImage">
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            <img src={process.env.PUBLIC_URL + "/images/gallery/events/event-1.jpg"} alt="imagem do evento" />
        </div>
        <div className="cardImage">
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            <img src={process.env.PUBLIC_URL + "/images/gallery/events/event-2.jpg"} alt="imagem do evento" />
        </div>
        <div className="cardImage">
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            <img src={process.env.PUBLIC_URL + "/images/gallery/events/event-3.jpg"} alt="imagem do evento" />
        </div>
        <div className="cardImage">
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            <img src={process.env.PUBLIC_URL + "/images/gallery/events/event-4.jpg"} alt="imagem do evento" />
        </div>
        <div className="cardImage">
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            <img src={process.env.PUBLIC_URL + "/images/gallery/events/event-5.jpg"} alt="imagem do evento" />
        </div>
    </div>
  )
}

export default Events