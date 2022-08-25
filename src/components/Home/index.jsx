import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import './home.css'
import './responsive.css'

const Home = () => {
  return (
    <section className='home'>
      <div className="diagonal"></div>
      <div className="container">
        <img src={process.env.PUBLIC_URL + "/images/capa_4.jpg"} alt="image_front_cover" />
        <div className="portfolio">
          <span>Bem vindo ao meu</span>
          <h1>Portifólio</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem alias, tenetur aut perspiciatis asperiores similique sint doloremque, architecto quibusdam labore iste eos!</p>
          <div className="links">
            <a href="#myWork">Galeria</a>
            <a href="#contactMe">Entre em Contato</a>
          </div>
        </div>
        <div className="person">
          <span>Olá, eu sou</span>
          <h1>Well Souza</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem alias, tenetur aut perspiciatis asperiores similique sint doloremque, architecto quibusdam labore iste eos!</p>
          <div className="links">
            <a href="#myWork">Galeria</a>
            <a href="#contactMe">Entre em Contato</a>
          </div>
        </div>
        <div className="changeImage">
          <IoIosArrowBack />
          <IoIosArrowForward />
        </div>
      </div>
    </section>
  )
}

export default Home