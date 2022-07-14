import './AboutMe.css';
import profilePicture from "../../Assets/images/profile-circulo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Trans } from 'react-i18next';
import { t } from 'i18next';

const AboutMe = () => {
  
  return (
      <section id="about-me">
        <div className='about-me-container'>
          <div className='about-me-box'>
            <div className="about-me-picture">
                <img src={profilePicture}
                    alt="profile" />
            </div>
            <div className="about-me-text">
                <h2 className='highlight'>
                  <Trans i18nKey={"main.aboutMe.hello"}>
                    ¡Hola!
                  </Trans>
                </h2>
                <h3>{t("main.aboutMe.myName")}</h3>
                <p>{t("main.aboutMe.content")}</p>
            </div>
          </div>

          <div className='social-icons'>
            <a className='social-link' 
              href='mailto:smonse.rr@gmail.com'>
              <div className='social-icon'>
                <FontAwesomeIcon className='fa-social-icon' icon={faEnvelope} />
                <p className='social-text'>smonse.rr@gmail.com</p>
              </div>
            </a>

            <a className='social-link' 
              href='https://api.whatsapp.com/send?phone=529211446166'>
              <div className='social-icon'>
                <FontAwesomeIcon className='fa-social-icon' icon={faWhatsapp} />
                <p className='social-text'>+521 921 144 6166</p>
              </div>
            </a>
          </div>
        </div>
      </section>
  )
}

export default AboutMe;
