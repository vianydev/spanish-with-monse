import './AboutMe.css';
import profilePicture from "../../Assets/images/profile-circulo.png";
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
