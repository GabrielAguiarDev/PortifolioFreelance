import React from 'react'

const Product = ({ active }) => {
  return (
    <div className={`${active}`}>
        <div className="cardImage">
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            <img src={process.env.PUBLIC_URL + "/images/gallery/product/product-0.jpg"} alt="imagem do evento" />
        </div>
        <div className="cardImage">
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            <img src={process.env.PUBLIC_URL + "/images/gallery/product/product-1.jpg"} alt="imagem do evento" />
        </div>
        <div className="cardImage">
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            <img src={process.env.PUBLIC_URL + "/images/gallery/product/product-2.jpg"} alt="imagem do evento" />
        </div>
        <div className="cardImage">
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            <img src={process.env.PUBLIC_URL + "/images/gallery/product/product-3.jpg"} alt="imagem do evento" />
        </div>
        <div className="cardImage">
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            <img src={process.env.PUBLIC_URL + "/images/gallery/product/product-4.jpg"} alt="imagem do evento" />
        </div>
        <div className="cardImage">
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            <img src={process.env.PUBLIC_URL + "/images/gallery/product/product-5.jpg"} alt="imagem do evento" />
        </div>
    </div>
  )
}

export default Product