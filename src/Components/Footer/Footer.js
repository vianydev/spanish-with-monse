import logoFooter from "../../Assets/images/logo-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import TranslateButton from "../TranslateButton";

const Footer = ({ t }) => {
  return (
    <section id="footer">
      <div className="footer-box">
        <a className="logo-footer" href="/">
          <img src={logoFooter} alt="Spanish with Monse Logo" width="150px" />
        </a>

        <div className="social-icons-footer">
          <a className="social-link" href="mailto:smonse.rr@gmail.com">
            <div className="social-icon">
              <FontAwesomeIcon
                className="footer-fa fa-social-icon"
                icon={faEnvelope}
              />
            </div>
          </a>

          <a className="social-link"
            href="https://api.whatsapp.com/send?phone=529211446166"
          >
            <div className="social-icon">
              <FontAwesomeIcon
                className="footer-fa fa-social-icon"
                icon={faWhatsapp}
              />
            </div>
          </a>
        </div>
        <TranslateButton id={"translate-footer"} />
      </div>

      <div className="footer-copyright">
        <div className="footer-text">
          <p>
            Made with{" "}
            <span>
              <FontAwesomeIcon
                className="fa-social-icon footer-heart"
                icon={faHeart}
              />{" "}
            </span>
            by{" "}
            <span>
              <a className="footer-link" href="https://vianydev.github.io" target="_blank" rel="noreferrer">
                viany.dev
              </a>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
