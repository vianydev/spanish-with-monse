import './Process.css';
import { Trans } from 'react-i18next';

const Process = ({ t }) => {

  return (
      <section id="process">
        <div className="process-container">
          {/* <div className='process-title'> */}
            <h2>
              <Trans i18nKey={"main.howToStart.title"}>
                ¿Cómo <span className='highlight'>comenzar</span> tus clases?
              </Trans>
            </h2>
          {/* </div> */}
          <div className="process-box-container">
            <div className="process-box">
              <p className="process-number highlight">1</p>
              <p className='process-text'>{t("main.howToStart.1")}</p>
            </div>
            <div className="process-box">
              <p className="process-number highlight">2</p>
              <p className='process-text'>{t("main.howToStart.2")}</p>
            </div>
            <div className="process-box">
              <p className="process-number highlight">3</p>
            <p className='process-text'>{t("main.howToStart.3")}</p>
            </div>
          </div>
        </div>
        <div className="line-bottom"></div>
      </section>
  )
}

export default Process;
