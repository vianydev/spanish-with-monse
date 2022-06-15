import "./Objetivos.css";
import rocket from "../images/icons/goal-rocket.png";
import conversation from "../images/icons/goal-conversation.png";
import next from "../images/icons/goal-next.png";

const Objetivos = () => {
  return (
    <section id="objetivos">
        <div className="objetivos-container">
            <div>
                <h2>Clases totalmente enfocadas en alcanzar tus <span className="highlight">objetivos</span>.</h2>
                <h3>Para dar el siguiente paso, selecciona cual es el objetivo que te interesa alcanzar.</h3>
            </div>
            <div className="objetivos-container-box">
                <div className="objetivos-box">
                    <div className="objetivos-box-content">
                        <div className="objetivos-img">
                            <img src={rocket}
                                alt="principiante-avanzado"
                            />
                        </div>
                        <div className="objetivos-text">
                            <h4>Principiante a avanzado</h4>
                            <h6>Comienza la aventura con las bases para comenzar a comunicarte en español lo más pronto posible, de manera sencilla y practica. </h6>
                        </div>
                        <div className="objetivos-list">
                            <p>Ideal para ti</p>
                            <ul>
                                <li>Nunca has tenido clases de español.</li>
                                <li>Te desenvuelves en el idioma pero quieres mejorar.</li>
                                <li>Buscas un nivel especifico (A1, A2, B1, B2)</li>
                            </ul>
                        </div>
                        <button className="outline-purple">Este es mi objetivo</button>
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
                            <h6>Mejora tu habilidad para expresarte,  expande tu vocabulario, mejora tu pronunciación  y diviértete en el trayecto. </h6>
                        </div>
                        <div className="objetivos-list">
                            <p>Ideal para ti</p>
                            <ul>
                                <li>Tienes las bases pero te cuesta hablar.</li>
                                <li>Te cuesta expresar tus ideas .</li>
                                <li>Quieres hablar de temas especializados o tecnicos.</li>
                            </ul>
                        </div>
                        <button className="outline-purple">Este es mi objetivo</button>
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
                            <h6>Trabajaremos juntos para alcanzar tus objetivos, ya sea pronunciar mejor, leer o escribir textos complejos,  o desenvolverte en el idioma para viajar. </h6>
                        </div>
                        <div className="objetivos-list">
                            <p>Ideal para ti</p>
                            <ul>
                                <li>Si vas a viajar o vivir en algun pais hispano hablante.</li>
                                <li>Quieres mejorar en algún area especifica: hablar, escuchar, escribir, leer, gramatica. </li>
                            </ul>
                        </div>
                        <button className="outline-purple">Este es mi objetivo</button>
                    </div>
                </div>
            </div>
        </div>
        
    </section>

  )
}

export default Objetivos;
