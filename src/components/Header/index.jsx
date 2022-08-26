import React from 'react'
import { Link } from 'react-scroll'
import { CgLivePhoto } from 'react-icons/cg'

import './header.css'
import './responsive.css'

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link
          className="logo"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <CgLivePhoto /> 
          Well Souza
        </Link>
        <ul>
          <li>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Inicio
            </Link>
          </li>
          <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Sobre
          </Link>
          </li>
          <li>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Serviços
          </Link>
          </li>
          <li>
          <Link
            to="pricing"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Preços
          </Link>
          </li>
          <li>
          <Link
            to="gallery"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Galeria
          </Link>
          </li>
          <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contato
          </Link>
          </li>
        </ul>
      </div>
    </header>
  )

}

export default Header