import mail from '../images/icons/mail-outline.png';
import whatsapp from '../images/icons/whatsapp-outline.png';

const Contact = () => {
  return (
      <section id="contact">
        <div className="line-top-green"></div>
        <div className="contact-container">
            <h2>¿Necesitas más información?</h2>
            <div className='contact-box'>
                <img src={mail} />
                <p className='contact-text'>smonse.rr@gmail.com</p>
            </div>
            <div className='contact-box'>
                <img src={whatsapp} />
                <p className='contact-text'>smonse.rr@gmail.com</p>
            </div>
        </div>
      </section>
  )

}

export default Contact;