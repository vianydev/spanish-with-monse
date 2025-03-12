import "./Beneficios.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faThumbTack } from '@fortawesome/free-solid-svg-icons';
import { Trans } from 'react-i18next';

const Beneficios = ({ t }) => {

  return (
    <section id="beneficios">
      <div className="beneficios-container">
        <h2>
          <Trans i18nKey='main.benefits.title'>
            Disfruta de los <span className="highlight">beneficios</span> de aprender Español con clases privadas en línea.
          </Trans>
        </h2>
        

        <div className="beneficios-box-container">
          {/* Avanza a tu ritmo */}
          <div className="beneficios-box">
            <div className="beneficios-img">
              <FontAwesomeIcon className="icon-beneficios" icon={faClock} />
            </div>
            <div className="main.beneficios-box-text">
              <h4>{t('main.benefits.Rhythm')}</h4>
              <p>{t('main.benefits.RhythmText')}</p>
            </div>
          </div>
          {/* Conversaciones reales */}
          <div className="beneficios-box">
            <div className="beneficios-img">
              <FontAwesomeIcon className="icon-beneficios" icon={faComments} />
            </div>
            <div className="beneficios-box-text">
              <h4>{t('main.benefits.Conversations')}</h4>
              <p>{t('main.benefits.ConversationsText')}</p>
            </div>
          </div>
          {/* Desde cualquier lugar */}
          <div className="beneficios-box">
            <div className="beneficios-img">
              <FontAwesomeIcon className="icon-beneficios" icon={faLocationDot} />
            </div>
            <div className="beneficios-box-text">
              <h4>{t('main.benefits.Place')}</h4>
              <p>{t('main.benefits.PlaceText')}</p>
            </div>
          </div>
          {/* Just in Desktop */}
          <div className="beneficios-box beneficios-desktop">
            <div className="beneficios-img">
              <FontAwesomeIcon className="icon-beneficios" icon={faListCheck} />
            </div>
            <div className="beneficios-box-text">
              <h4>{t('main.benefits.Plan')}</h4>
              <p>{t('main.benefits.PlanText')}</p>
            </div>
          </div>
          {/* temas de tu interes */}
          <div className="beneficios-box beneficios-desktop">
            <div className="beneficios-img">
              <FontAwesomeIcon className="icon-beneficios" icon={faThumbTack} />
            </div>
            <div className="beneficios-box-text">
              <h4>{t('main.benefits.Topics')}</h4>
              <p>{t('main.benefits.TopicsText')}</p>
            </div>
          </div>
          {/* Resuelve tus dudas */}
          <div className="beneficios-box beneficios-desktop">
            <div className="beneficios-img">
              <FontAwesomeIcon className="icon-beneficios" icon={faLightbulb} />
            </div>
            <div className="Resuelve-tus-dudas">
              <h4>{t('main.benefits.Questions')}</h4>
              <p>{t('main.benefits.QuestionsText')}</p>
            </div>
          </div>
        </div>

      </div>
      {/* <div className="line-bottom"></div> */}
    </section>
  )
}

export default Beneficios;