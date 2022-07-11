import { Link } from 'react-router-dom';
import RegisterForm from '../../Components/Form/RegisterForm';


const Register = () => {

    return (
        <section id="register">
           <div id="form" className="register">
                <h3>Sign up to start learning Spanish</h3>
                <RegisterForm />
               
                <div className='login-link'>
                    <p style={{display: 'none'}}>Al crear una cuenta, aceptas nuestros Términos y condiciones. Recibirás correos electrónicos y notificaciones de 'Spanish with Monse' sobre el progreso de tu aprendizaje y sobre nuestros productos y servicios. Puedes darte de baja en cualquier momento de forma gratuita. Procesaremos tus datos personales de acuerdo con nuestra Política de privacidad.</p>
                    
                    ¿Ya tienes una cuenta? 
                    <Link className='link-purple' to='/login'>Ingresar</Link>
                </div>
               
            </div>
        </section>
    )
}

export default Register;