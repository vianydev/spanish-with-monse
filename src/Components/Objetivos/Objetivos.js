import { Link } from "react-router-dom";
import "./Objetivos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpRightDots } from '@fortawesome/free-solid-svg-icons';

const Objetivos = () => {
  return (
    <section id="objetivos"  data-scroll>
        <div className="objetivos-container">
            <div className="objetivos-title">
                <h2 data-splitting>Clases totalmente enfocadas en alcanzar tus <span className="highlight">objetivos</span>.</h2>
                <h3>Para dar el siguiente paso, selecciona cual es el objetivo que te interesa alcanzar.</h3>
            </div>
            <div className="objetivos-container-box">
                <div className="objetivos-box">
                    <div className="objetivos-box-content">
                        <div className="objetivos-img">
                            <FontAwesomeIcon 
                                className="icon-objetivos" 
                                icon={faRocket}
                            />
                        </div>
                        <div className="objetivos-text">
                            <h4>Principiante</h4>
                            <h6>Comienza la aventura con las bases para comunicarte en español lo más pronto posible, de manera sencilla y practica.</h6>
                        </div>
                        <div className="objetivos-list">
                            <p>Ideal para ti</p>
                            <ul>
                                <li>Es tu primera vez intentando aprender Español.</li>
                                <li>Entiendes un poco pero no conoces la gramatica.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="objetivos-box">
                    <div className="objetivos-box-content">
                        <div className="objetivos-img">
                            <FontAwesomeIcon className="icon-objetivos" icon={faMessage} />
                        </div>
                        <div className="objetivos-text">
                            <h4>Conversación</h4>
                            <h6>Mejora tu habilidad para expresarte,  expande tu vocabulario, mejora tu pronunciación  y diviértete en el trayecto.</h6>
                        </div>
                        <div className="objetivos-list">
                            <p>Ideal para ti</p>
                            <ul>
                                <li>Tienes las bases pero te cuesta comunicarte.</li>
                                <li>Te cuesta expresar tus ideas.</li>
                                <li>Quieres hablar de temas especializados o tecnicos.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="objetivos-box">
                    <div className="objetivos-box-content">
                        <div className="objetivos-img">
                            <FontAwesomeIcon className="icon-objetivos" icon={faArrowUpRightDots} />
                        </div>
                        <div className="objetivos-text">
                            <h4>Siguiente nivel</h4>
                            <h6>Trabajaremos juntos para alcanzar el siguiente nivel en tu español, ya sea pronunciar mejor, leer o escribir textos complejos, ampliar tu vocabulario, etc.</h6>
                        </div>
                        <div className="objetivos-list">
                            <p>Ideal para ti</p>
                            <ul>
                                <li>Anteriormente has tomado clases y quieres continuar.</li>
                                <li>Buscas un nivel especifico (A1, A2, B1, B2).</li>
                                <li>Quieres mejorar tu español.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Link 
                className="btn-shape link-purple" 
                to='./register'
                style={{padding: '20px 0 0 0'}}
            >Book your class</Link>
        </div>
    </section>
  )
}

export default Objetivos;
