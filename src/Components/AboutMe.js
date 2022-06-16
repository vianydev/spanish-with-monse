import './AboutMe.css';
import profilePicture from "../images/profile-circulo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

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
                <h2 className='highlight'>¡Hola!</h2>
                <h3>Mi nombre es Monserrat pero puedes decirme Monse.</h3>
                <p>Soy mexicana y  he sido profesora de español para extranjeros y nativos por más de 6 años. Una de las cosas que más disfruto es conocer estudiantes de diferentes países y ayudarlos en la aventura de aprender un nuevo idioma. </p>
            </div>
          </div>

          <div className='social-icons'>
            <a href='mailto:smonse.rr@gmail.com'>
              <div className='social-icon'>
                <FontAwesomeIcon className='fa-social-icon' icon={faEnvelope} />
                <h5 className='social-text'>smonse.rr@gmail.com</h5>
              </div>
            </a>

            <a href='https://api.whatsapp.com/send?phone=529211446166'>
              <div className='social-icon'>
                <FontAwesomeIcon className='fa-social-icon' icon={faWhatsapp} />
                <h5 className='social-text'>+521 921 144 6166</h5>
              </div>
            </a>
          </div>
        </div>
      </section>
  )
}

export default AboutMe;
