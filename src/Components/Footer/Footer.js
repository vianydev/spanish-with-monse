import logoFooter from '../../Assets/images/logo-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = ({ checkLocation }) => {
  return (
    <section id='footer'>
        <div className='footer-box'>

            <a className='logo-footer' href='/'>
                <img src={ logoFooter } alt='Spanish with Monse Logo' />
            </a>

            <div className='nav-footer'>
                <Link className='nav-link' to={'/register'}>Book your class</Link>
                <Link className='nav-link' to={'/login'}>Login</Link>
            </div>

            <div className='social-icons-footer'>
                <a className='social-link' href='mailto:smonse.rr@gmail.com'>
                    <div className='social-icon'>
                        <FontAwesomeIcon className='footer-fa fa-social-icon' icon={faEnvelope} />
                    </div>
                </a>

                <a className='social-link' href='https://api.whatsapp.com/send?phone=529211446166'>
                    <div className='social-icon'>
                        <FontAwesomeIcon className='footer-fa fa-social-icon' icon={faWhatsapp} />
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