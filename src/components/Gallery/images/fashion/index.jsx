import React from 'react'

const Fashion = ({ active }) => {
  return (
    <div className={`${active}`}>
        <div className="cardImage">
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            <img src={process.env.PUBLIC_URL + "/images/gallery/fashion/fashion.jpg"} alt="imagem do evento" />
        </div>
    </div>
  )
}

export default Fashion