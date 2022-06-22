import "./Beneficios.css";
import time from "../../Assets/icons/time.png";
import person from "../../Assets/icons/person.png";
import place from "../../Assets/icons/place.png";
import check from "../../Assets/icons/check.png";
import pin from "../../Assets/icons/pin.png";
import lightbulb from "../../Assets/icons/lightbulb.png";

const Beneficios = () => {
  return (
    <section id="beneficios">
      <div className="line-top"></div>
      <div className="beneficios-container">
        <h2>Disfruta de los <span className="highlight">beneficios</span> de aprender Español con clases privadas en línea.</h2>

        <div className="beneficios-box-container">
          {/* Avanza a tu ritmo */}
          <div className="beneficios-box">
            <div className="beneficios-img">
              <img src={time}
                alt="avanza-a-tu-ritmo"/>
            </div>
            <div className="beneficios-box-text">
              <h4>Avanza a tu ritmo</h4>
              <p>Cada clase es adaptada a la velocidad que tu quieras llevar. </p>
            </div>
          </div>
          {/* Conversaciones reales */}
          <div className="beneficios-box">
            <div className="beneficios-img">
              <img src={person}
                alt="Conversaciones-reales"/>
            </div>
            <div className="beneficios-box-text">
              <h4>Conversaciones reales</h4>
              <p>Practica con conversaciones reales sobre temas que te interesen y amplia tu vocabulario.</p>
            </div>
          </div>
          {/* Desde cualquier lugar */}
          <div className="beneficios-box">
            <div className="beneficios-img">
              <img src={place}
                alt="Desde-cualquier-lugar"/>
            </div>
            <div className="beneficios-box-text">
              <h4>Desde cualquier lugar</h4>
              <p>Mejora tu fluidez en el idioma desde cualquier lugar.</p>
            </div>
          </div>
          {/* Just in Desktop */}
          <div className="beneficios-box beneficios-desktop">
            <div className="beneficios-img">
              <img src={check}
                alt="Desde-cualquier-lugar"/>
            </div>
            <div className="beneficios-box-text">
              <h4>Define tus objetivos</h4>
              <p>Aprovecha el tiempo para mejorar las areas que te interesen.</p>
            </div>
          </div>
          {/* temas de tu interes */}
          <div className="beneficios-box beneficios-desktop">
            <div className="beneficios-img">
              <img src={pin}
                alt="Temas-de-tu-interes"/>
            </div>
            <div className="beneficios-box-text">
              <h4>Temas de tu interes</h4>
              <p>Mejora tu experiencia aprendiendo con temas que te gustan.</p>
            </div>
          </div>
          {/* Resuelve tus dudas */}
          <div className="beneficios-box beneficios-desktop">
            <div className="beneficios-img">
              <img src={lightbulb}
                alt="Temas-de-tu-interes"/>
            </div>
            <div className="Resuelve-tus-dudas">
              <h4>Resuelve tus dudas</h4>
              <p>A diferencia de un video, en una clase privada puedes preguntar si algo no te quedó claro.</p>
            </div>
          </div>

        </div>

      </div>
      <div className="line-bottom"></div>
        
    </section>
  )
}

export default Beneficios;
