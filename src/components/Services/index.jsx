import React from "react";
import { BsCamera, BsCameraVideo } from "react-icons/bs";
import { GiFairyWand } from "react-icons/gi";
import { ImMug } from "react-icons/im";

import "./services.css";
import "./responsive.css";

const Services = () => {
  return (
    <section className="services" name="services">
      <h2 data-aos="fade-up">Meus Serviços</h2>
      <p className="description" data-aos="fade-up">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        repudiandae minus aliquamt.
      </p>
      <div className="services-items">
        <div
          className="photography"
          data-aos="zoom-in-up"
          data-aos-duration="500"
        >
          <BsCamera />
          <h3>Fotografia</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            repellat magni cupiditate.
          </p>
        </div>
        <div
          className="videography"
          data-aos="zoom-in-up"
          data-aos-duration="500"
        >
          <BsCameraVideo />
          <h3>Cinegrafia</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            repellat magni cupiditate.
          </p>
        </div>
        <div
          className="Photo-Retouching"
          data-aos="zoom-in-up"
          data-aos-duration="500"
        >
          <GiFairyWand />
          <h3>Edição de fotos</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            repellat magni cupiditate.
          </p>
        </div>
        <div
          className="lightning-Setup"
          data-aos="zoom-in-up"
          data-aos-duration="500"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/services/setup.svg"}
            alt="lightning setup"
          />
          <h3>Fotografias com setup</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            repellat magni cupiditate.
          </p>
        </div>
        <div
          className="video-Color-Grading"
          data-aos="zoom-in-up"
          data-aos-duration="500"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/services/video_color.svg"}
            alt="video color grading"
          />
          <h3>Edição de videos</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            repellat magni cupiditate.
          </p>
        </div>
        <div
          className="mug-Photography"
          data-aos="zoom-in-up"
          data-aos-duration="500"
        >
          <ImMug />
          <h3>Fotografia em canecas personalizadas</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            repellat magni cupiditate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
