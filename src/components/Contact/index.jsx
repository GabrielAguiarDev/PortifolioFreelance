import React from "react";
import { IoIosCall } from "react-icons/io"
import { MdOutlineMail } from "react-icons/md"
import { GoLocation } from "react-icons/go"

import "./contact.css";
import "./responsive.css";

const Contact = () => {
  return (
    <section className="contact" name="contact">
      <div className="diagonal"></div>
      <div className="container-contact">
        <div className="contact-info">
          <h2 data-aos="fade-right">Contato</h2>
          <p data-aos="fade-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius magni aperiam, architecto qui ducimus quidem aliquam.</p>
          <ul>
            <li data-aos="zoom-in-up" data-aos-delay="300"><IoIosCall /> <div className="info">Ligue para mim <span>+55 (73) 9 9916-5406</span></div></li>
            <li data-aos="zoom-in-up" data-aos-delay="400"><MdOutlineMail /> <div className="info">Envie-me um e-mail <span>wellsouza@gmail.com</span></div></li>
            <li data-aos="zoom-in-up" data-aos-delay="500"><GoLocation /> <div className="info">Visite meu escritório <span>Santa C. Cabrália, R. dos Tupinambás, n° 225</span></div></li>
          </ul>
        </div>
        <form method="POST">
          <h3>Entrar em contato</h3>
          <input type="text" name="name" id="name" placeholder="Seu nome *" />
          <input type="email" name="email" id="email" placeholder="Seu e-mail *" />
          <input type="text" name="number" id="number" placeholder="Seu número *" />
          <input type="text" name="subject" id="subject" placeholder="Assunto *" />
          <textarea cols="30" rows="10" placeholder="Mensagem *"></textarea>
          <button>Enviar Mensagem</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
