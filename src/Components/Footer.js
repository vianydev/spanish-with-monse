import logoFooter from '../images/logo-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <section id='footer'>
        <div className="footer-container">
            <div className='footer-box'>
            
                <a className="logo-footer"
                    href="#nav">
                    <img src={ logoFooter }
                        alt="Spanish with Monse Logo"
                    />
                </a>

                <div className='nav-footer nav-link'>
                    <a href="#nav">¿Cómo comenzar?</a>
                    <a href="#nav">Acerca de mi</a>
                </div>

                <div className='social-icons social-icons-footer'>
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

        </div>
    </section>
  )
}

export default Footer;