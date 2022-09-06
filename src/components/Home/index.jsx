import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "./home.css";
import "./responsive.css";

const Home = () => {
  const [fadePortfolio, setFadePortfolio] = useState(false);

  function handleImage() {
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
          fadePortfolio === true
            ? "container-portfolio active"
            : "container-portfolio"
        }
      >
        <div className="portfolio">
          <img
            src={process.env.PUBLIC_URL + "/images/home/capa_1.jpg"}
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
                className="active"
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
        className={
          fadePortfolio === false
            ? "container-person active"
            : "container-person"
        }
      >
        <div className="person">
          <img
            src={process.env.PUBLIC_URL + "/images/home/capa_2.jpg"}
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
              <Link
                to="gallery"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="active"
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
    </section>
  );
};

export default Home;
