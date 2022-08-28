import React from 'react'

import './pricing.css' 
import './responsive.css'

const Pricing = () => {
  return (
    <section className='pricing' name='pricing'>
      <h2 data-aos="zoom-in">Planos disponíveis</h2>
      <div className="underline" data-aos="zoom-in"></div>
      <div className="pricing-container">
        <div className="pricing-plan" data-aos="flip-right">
          <div className='pricing-info'>
            <h3>Standart</h3>
            <div className="value">
              <span>R$</span>
              <h4>300</h4>
            </div>
            <ul>
              <li>Sessão de 3 horas</li>
              <li>Edição de fotos</li>
              <li>50 Imagens Digitais</li>
              <li>Galeria on-line</li>
            </ul>
          </div>
          <div className="image">
            <img src={process.env.PUBLIC_URL + "/images/pricing-standart.jpg"} alt="Preço Padrão" />
          </div>
        </div>
        <div className="pricing-plan" data-aos="flip-right" data-aos-delay="200">
          <div className='pricing-info'>
            <h3>Premium</h3>
            <div className="value">
              <span>R$</span>
              <h4>450</h4>
            </div>
            <ul>
              <li>Sessão de 6 horas</li>
              <li>Edição de fotos</li>
              <li>100 Imagens Digitais</li>
              <li>Galeria on-line</li>
            </ul>
          </div>
          <div className="image">
            <img src={process.env.PUBLIC_URL + "/images/pricing-premium.jpg"} alt="Preço prêmio" />
          </div>
        </div>
        <div className="pricing-plan" data-aos="flip-right" data-aos-delay="300">
          <div className='pricing-info'>
            <h3>Platinum</h3>
            <div className="value">
              <span>R$</span>
              <h4>750</h4>
            </div>
            <ul>
              <li>Sessão de 12 horas</li>
              <li>Edição de fotos</li>
              <li>250 Imagens Digitais</li>
              <li>Galeria on-line</li>
            </ul>
          </div>
          <div className="image">
            <img src={process.env.PUBLIC_URL + "/images/pricing-platinum.jpg"} alt="Preço platina" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing