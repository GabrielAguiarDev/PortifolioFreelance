import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

import "./about.css";
import "./responsive.css";

const About = () => {
  return (
    <section className="about" name="about">
      <div className="container-about">
        <div className="about-info" data-aos="zoom-in-up">
          <h2>
            Hello, I'm Well Souza, a professional photographer based on New York
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
            itaque ipsam, magnam deleniti rerum sed ab mollitia in ratione odit
            magni eos quaerat consectetur.
          </p>
          <ul>
            <li>
              <AiFillCheckCircle /> Mais de 10 anos de experiência
            </li>
            <li>
              <AiFillCheckCircle /> 100+ projetos executados com sucesso
            </li>
            <li>
              <AiFillCheckCircle /> Qualidade de trabalho excepcional
            </li>
          </ul>
          <div className="underline"></div>
          <div className="about-bottom">
            <img
              src={process.env.PUBLIC_URL + "/images/about/signature.svg"}
              alt="signature"
              className="signature"
            />
            <div className="about-name">
              Well Souza
              <span>Photographer</span>
            </div>
          </div>
        </div>
        <div className="about-image" data-aos="zoom-in-up">
          <div className="image">
            <img
              src={process.env.PUBLIC_URL + "/images/about/profile.jpg"}
              alt="profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
