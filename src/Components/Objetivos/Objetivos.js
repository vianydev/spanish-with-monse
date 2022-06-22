import "./Objetivos.css";
import rocket from "../../Assets/icons/goal-rocket.png";
import conversation from "../../Assets/icons/goal-conversation.png";
import next from "../../Assets/icons/goal-next.png";

const Objetivos = () => {
  return (
    <section id="objetivos">
        <div className="objetivos-container">
            <div className="objetivos-title">
                <h2>Clases totalmente enfocadas en alcanzar tus <span className="highlight">objetivos</span>.</h2>
                <h3>Para dar el siguiente paso, selecciona cual es el objetivo que te interesa alcanzar.</h3>
            </div>
            <div className="objetivos-container-box">
                <div className="objetivos-box">
                    <div className="objetivos-box-content">
                        <div className="objetivos-img">
                            <img src={rocket}
                                alt="principiante"
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
                        <button className="outline-purple">Más información</button>
                    </div>
                </div>
                <div className="objetivos-box">
                    <div className="objetivos-box-content">
                        <div className="objetivos-img">
                            <img src={conversation}
                                alt="principiante-avanzado"
                            />
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
                        <button className="outline-purple">Más información</button>
                    </div>
                </div>
                <div className="objetivos-box">
                    <div className="objetivos-box-content">
                        <div className="objetivos-img">
                            <img src={next}
                                alt="principiante-avanzado"
                            />
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
                        <button className="outline-purple">Más información</button>
                    </div>
                </div>
            </div>
        </div>
        
    </section>

  )
}

export default Objetivos;
