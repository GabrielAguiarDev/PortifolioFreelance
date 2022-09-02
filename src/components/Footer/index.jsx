import React from 'react'
import { Link } from 'react-scroll'

import './footer.css'
import './responsive.css'

const Footer = () => {
  return (
    <>
      <div className="parallax">
        <div className="link" data-aos="zoom-in-up">
          <h3>Gostou do meu trabalho?</h3>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="active"
          >
            Entre em contato
          </Link>
        </div>
        <div className="cardFloat" data-aos="fade-left">
          <div className="card1"></div>
          <div className="card2"></div>
        </div>
      </div>
      <footer>

      </footer>
    </>
  )
}

export default Footer