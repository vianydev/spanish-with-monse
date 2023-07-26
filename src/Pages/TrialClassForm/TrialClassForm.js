import ContactForm from "../../Components/Form/ContactForm";
import { Link } from "react-router-dom";

const TrialClassForm = ({ t }) => {
  return (
    <section id="trialClassForm">
      <div id="form" className="register">
        <div className="infoForm">
          <h3>{t("trialClassForm.title")}</h3>
          <p>{t("trialClassForm.description")}</p>
        </div>

        <ContactForm />

        {/* <div className="login-link">
          <p className="terms-conditions">
            Al crear una cuenta, aceptas nuestros Términos y condiciones.
            Recibirás correos electrónicos y notificaciones de 'Spanish with
            Monse' sobre el progreso de tu aprendizaje y sobre nuestros
            productos y servicios. Puedes darte de baja en cualquier momento de
            forma gratuita.
          </p>
        </div> */}
      </div>
      <div style={{ margin: '30px 10px 10px 10px' }}>
        <Link
          to='/'
        >
          {t("thanks.back")}
        </Link>

      </div>
    </section>
  );
};

export default TrialClassForm;
