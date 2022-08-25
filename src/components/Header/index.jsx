import React from 'react'
import { CgLivePhoto } from 'react-icons/cg'

import './header.css'
import './responsive.css'

const Header = () => {
  return (
    <header>
      <div className="container">
        <a href="#logo" className="logo"><CgLivePhoto /> Well Souza</a>
        <ul>
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#services">Serviços</a>
          </li>
          <li>
            <a href="#pricing">Preços</a>
          </li>
          <li>
            <a href="#gallery">Galeria</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </div>
    </header>
  )

}

export default Header