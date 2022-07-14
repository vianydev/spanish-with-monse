import { Link } from "react-router-dom";
import "./Objetivos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpRightDots } from '@fortawesome/free-solid-svg-icons';
import { Trans } from 'react-i18next';

const Objetivos = ({ t }) => {

  return (
    <section id="objetivos"  data-scroll>
        <div className="objetivos-container">
            <div className="objetivos-title">
                <h2 data-splitting>
                    <Trans i18nKey={"main.goals.title"}>
                        Clases totalmente enfocadas en alcanzar tus <span className="highlight">objetivos</span>.
                    </Trans>
                </h2>
                <h3>{t("main.goals.subtitle")}</h3>
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
                            <h6>{t("main.goals.beginner")}</h6>
                        </div>
                        <div className="objetivos-list">
                            <p>{t("main.goals.perfectForYou")}</p>
                            <ul>
                                <Trans i18nKey={"main.goals.beginnerList"}>
                                    <li>Es tu primera vez intentando aprender Español.</li>
                                    <li>Entiendes un poco, pero no conoces la gramática.</li>
                                </Trans>
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
                            <h6>{t("main.goals.conversation")}</h6>
                        </div>
                        <div className="objetivos-list">
                            <p>{t("main.goals.perfectForYou")}</p>
                            <ul>
                                <Trans i18nKey={"main.goals.conversationList"}>
                                    <li>Tienes las bases, pero te cuesta comunicarte.</li>
                                    <li>Te cuesta expresar tus ideas.</li>
                                    <li>Quieres hablar de temas especializados o técnicos.</li>
                                </Trans>
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
                            <h6>{t("main.goals.nextLevel")}</h6>
                        </div>
                        <div className="objetivos-list">
                            <p>{t("main.goals.perfectForYou")}</p>
                            <ul>
                                <Trans i18nKey={"main.goals.conversationList"}>
                                    <li>Anteriormente has tomado clases y quieres continuar.</li>
                                    <li>Buscas un nivel específico (A1, A2, B1, B2).</li>
                                    <li>Quieres mejorar tu español.</li>
                                </Trans>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Link 
                className="link-purple" 
                to='./register'
                style={{padding: '20px 0 0 0'}}
            >{t("buttons.registerFor")}</Link>
        </div>
    </section>
  )
}

export default Objetivos;
