import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
  return (
      <section id="contact">
        <div className="line-top-green"></div>
        <div className="contact-container">
            <h2>¿Necesitas más información?</h2>
            <div className='contact-box'>
                <FontAwesomeIcon className='fa-social-icon' icon={faEnvelope} />
                <p className='contact-text'>smonse.rr@gmail.com</p>
            </div>
            <div className='contact-box'>
                <FontAwesomeIcon className='fa-social-icon' icon={faWhatsapp} />
                <p className='contact-text'>+521 921 144 6166</p>
            </div>
        </div>
      </section>
  )

}

export default Contact;