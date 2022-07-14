import { InlineWidget } from "react-calendly";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Profile.css';

const Profile = ({ user, t }) => {
    // URL without cookies banner
    const hiddeCookies = "https://calendly.com/monserratrodriguez/clase-de-espanol?hide_gdpr_banner=1"
    // URL without cookies banner and info
    //const hiddeInfo = "https://calendly.com/monserratrodriguez/clase-de-espanol?hide_event_type_details=1&hide_gdpr_banner=1"

    return (
        <section id="dashboard">
            <h1>Hola { user.name }</h1>
            
            <div className="Cal">
                <InlineWidget url={hiddeCookies} styles={{height:"1050px"}} />
            </div>

            <div className="user-options-board">
                <h4>{t("profile.help")}</h4>
                <div className="user-options-container">
                    <a className="icon-user-options-box" href='mailto:smonse.rr@gmail.com'>
                        <FontAwesomeIcon className="icon-user-options" icon={faEnvelope} />
                    </a>
                    <p>Email</p>
                </div>
                <div className="user-options-container">
                    <a className="icon-user-options-box" href='https://api.whatsapp.com/send?phone=529211446166'>
                        <FontAwesomeIcon className='icon-user-options' icon={faWhatsapp} />
                    </a>
                    <p>WhatsApp</p>
                </div>

           </div>

        </section>
    )
}

export default Profile;