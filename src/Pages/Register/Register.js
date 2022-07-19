import { Link } from 'react-router-dom';
import RegisterForm from '../../Components/Form/RegisterForm';


const Register = ({ t }) => {

    return (
        <section id="register">
           <div id="form" className="register">
                <h3>{ t("register.title") }</h3>

                <RegisterForm />
               
               
                <div className='login-link'>
                    <div>                        
                        {t("register.haveAccount")}
                        <Link className='link-purple' to='/login'>{ t("buttons.login") }</Link>
                    </div>
                    <p className='terms-conditions'>Al crear una cuenta, aceptas nuestros Términos y condiciones. Recibirás correos electrónicos y notificaciones de 'Spanish with Monse' sobre el progreso de tu aprendizaje y sobre nuestros productos y servicios. Puedes darte de baja en cualquier momento de forma gratuita.</p>
                </div>
               
            </div>
        </section>
    )
}

export default Register;