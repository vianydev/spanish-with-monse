import logoFooter from '../../Assets/images/logo-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <section id='footer'>
        <div className='footer-box'>
        
            <a className="logo-footer"
                href="#nav">
                <img src={ logoFooter }

                    alt="Spanish with Monse Logo"
                />
            </a>

            <div className='nav-footer'>
                <a className='nav-link' href="#process">¿Cómo comenzar?</a>
                <a className='nav-link' href="#about-me">Acerca de mi</a>
            </div>

            <div className='social-icons-footer'>
                <a className='social-link' 
                href='mailto:smonse.rr@gmail.com'>
                    <div className='social-icon'>
                        <FontAwesomeIcon className='fa-social-icon' icon={faEnvelope} />
                    </div>
                </a>

                <a className='social-link' 
                href='https://api.whatsapp.com/send?phone=529211446166'>
                    <div className='social-icon'>
                        <FontAwesomeIcon className='fa-social-icon' icon={faWhatsapp} />
                    </div>
                </a>
            </div>
        </div>

        <div className='footer-copyright'>
            <div className='footer-text'>
                <p>Made with <span><FontAwesomeIcon className='fa-social-icon footer-heart' icon={faHeart} /></span> by <span><a className='footer-link' href='https://github.com/vianydev'>Vianydev</a></span> </p>  
            </div>
        </div>

    </section>
  )
}

export default Footer;