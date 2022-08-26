import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "./home.css";
import "./responsive.css";

const Home = () => {
  const [fadePortfolio, setFadePortfolio] = useState(true);
  const [fadePerson, setFadePerson] = useState(false);

  function handleImage(e) {
    setFadePerson(!fadePerson);
    setFadePortfolio(!fadePortfolio);
  }

  useEffect(() => {
    setTimeout(handleImage, 8000);
  });

  return (
    <section className="home" name="home">
      <div className="diagonal"></div>

      <div
        className={
          fadePortfolio ? "container-portfolio active" : "container-portfolio"
        }
      >
        <div className="portfolio">
          <img
            src={process.env.PUBLIC_URL + "/images/capa_6.jpg"}
            alt="image_front_cover"
          />
          <div className="info">
            <span>Olá, eu sou</span>
            <h1>Well Souza</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
              alias, tenetur.
            </p>
            <div className="links">
              <Link
                to="gallery"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Galeria
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contato
              </Link>
            </div>
          </div>
          <div className="changeImage">
            <IoIosArrowBack onClick={handleImage} />
            <IoIosArrowForward onClick={handleImage} />
          </div>
        </div>
      </div>

      <div
        className={fadePerson ? "container-person active" : "container-person"}
      >
        <div className="person">
          <img
            src={process.env.PUBLIC_URL + "/images/capa_4.jpg"}
            alt="image_front_cover"
          />
          <div className="info">
            <span>Bem vindo ao meu</span>
            <h1>Portifólio</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
              alias, tenetur aut perspiciatis.
            </p>
            <div className="links">
              <a href="#myWork" className="active">
                Galeria
              </a>
              <a href="#contactMe">Contato</a>
            </div>
          </div>
          <div className="changeImage">
            <IoIosArrowBack onClick={handleImage} />
            <IoIosArrowForward onClick={handleImage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
