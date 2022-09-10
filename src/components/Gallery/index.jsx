import React, { useState } from "react";

import "./gallery.css";
import "./responsive.css";

import All from "./images/all";
import Personal from "./images/personal";
import Wedding from "./images/wedding";
import Events from "./images/events";
import Product from "./images/product";

const Gallery = () => {
  const [gallery, setGallery] = useState("all");

  function classActive(className) {
    setGallery(className);
  }

  return (
    <section className="gallery" name="gallery">
      <h2 data-aos="zoom-in">Galeria</h2>
      <div className="underline" data-aos="fade-up"></div>
      <ul data-aos="zoom-in" data-aos-delay="800">
        <li
          className={gallery === "all" ? "active" : ""}
          onClick={() => {
            classActive("all");
          }}
        >
          Todos
        </li>
        <li
          className={gallery === "personal" ? "active" : ""}
          onClick={() => {
            classActive("personal");
          }}
        >
          Pessoal
        </li>
        <li
          className={gallery === "wedding" ? "active" : ""}
          onClick={() => {
            classActive("wedding");
          }}
        >
          Casamento
        </li>
        <li
          className={gallery === "events" ? "active" : ""}
          onClick={() => {
            classActive("events");
          }}
        >
          Eventos
        </li>
        <li
          className={gallery === "product" ? "active" : ""}
          onClick={() => {
            classActive("product");
          }}
        >
          Produtos
        </li>
      </ul>
      <div className="container-images" data-aos="fade-up">
        <div className={gallery ? "images " + gallery : "images"}>
          <All active={gallery === "all" ? "active" : ""} />
          <Personal active={gallery === "personal" ? "active" : ""} />
          <Wedding active={gallery === "wedding" ? "active" : ""} />
          <Events active={gallery === "events" ? "active" : ""} />
          <Product active={gallery === "product" ? "active" : ""} />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
