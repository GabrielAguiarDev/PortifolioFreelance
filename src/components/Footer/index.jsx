import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CgLivePhoto } from "react-icons/cg";

import "./footer.css";
import "./responsive.css";

const Footer = () => {

  const [card, setCard] = useState(true)

  const moveCard = () => {
    setCard(!card)
  }

  useEffect(() => {
    setTimeout(moveCard, 8000)
  })

  return (
    <footer>
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
          <div className={card === true ? "card1 active" : "card1"}>
            <div className="card-info">
              <img src={process.env.PUBLIC_URL + "/images/aspas.png"} className="aspas" alt="aspas" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates facilis rem accusantium sit harum autem, tempore qui saepe.</p>
              <div className="profile">
                <img src={process.env.PUBLIC_URL + "/images/profile-bia.jpg"} alt="perfil-bia" />
                <div className="profile-info">
                  <h4>Beatriz Almeida</h4>
                  <span>Advogada</span>
                </div>
              </div>
            </div>
          </div>
          <div className={card === false ? "card2 active" : "card2"}>
            <div className="card-info">
              <img src={process.env.PUBLIC_URL + "/images/aspas.png"} className="aspas" alt="aspas" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, atque. Pariatur placeat expedita, dolorum sequi autem eligendi doloribus.</p>
              <div className="profile">
                <img src={process.env.PUBLIC_URL + "/images/profile-manu.jpg"} alt="perfil-manu" />
                <div className="profile-info">
                  <h4>Manu Oliveira</h4>
                  <span>Fotógrafa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-info">
        <div className="footer-container">
          <div className="footer-left">
            <div className="footer-logo">
              <CgLivePhoto />
              Well Souza
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
              laboriosam aut exercitationem.
            </p>
          </div>
          <div className="underline"></div>
          <div className="footer-right">
            <h4>Links Rápidos</h4>
            <ul>
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
            </ul>
          </div>
        </div>
        <div className="underline"></div>
        <div className="footer-bottom">
          <p>Copyright © 2022 by Gabriel Aguiar. All rights reserved.</p>
          <ul>
            <a href="instagram">
              <li>
                <FaInstagram />
              </li>
            </a>
            <a href="whatsapp">
              <li>
                <FaWhatsapp />
              </li>
            </a>
            <a href="facebook">
              <li>
                <FaFacebookF />
              </li>
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
