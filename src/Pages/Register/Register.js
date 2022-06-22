import { useState } from 'react';
import Form from '../../Components/Form/Form';


const Register = ({ handleRoute }) => {
    // Register User
    const [user, setUser] = useState({
        name: 'vianey',
        email: 'viany@gmail.com',
        password: '123',
        goal: 'begginer' 
    }); 

    const [name, setName] = useState('');
    const handleName = (e) => {
        setName(e.target.value);
        console.log(name)
    }
    const [email, setEmail] = useState('');
    const handleEmail = (e) => {
        setEmail(e.target.value);
        console.log(email)
    }
    const [password, setPassword] = useState('');
    const handlePassword = (e) => {
        setPassword(e.target.value);
        console.log(password)
    }
    const [goal, setGoal] = useState('');
    const handleGoal = (e) => {
        setGoal(e.target.value);
        console.log(goal)
    }

    const submitRegister = () => {
        console.log("submit")
        setUser({...{
            name: name,
            email: email,
            password: password,
            goal: goal
        }})
        console.log(user)
    }

    return (
        <section id="register">
           <div id="form" className="register">
                <h1>Register</h1>
                <h3>Sign up to start learning Spanish</h3>
                <p></p>
                <Form
                buttonText={'Crear cuenta'}
                enabledName='enabled' 
                enabledEmail='enabled' 
                enabledPassword='enabled' 
                enabledGoals='enabled' 
                handleName={handleName}
                handleEmail={handleEmail}
                handlePassword={handlePassword}
                handleGoal={handleGoal}
                submitRegister={submitRegister}

                />
                <div className='login-link'>
                    <p style={{display: 'none'}}>Al crear una cuenta, aceptas nuestros Términos y condiciones. Recibirás correos electrónicos y notificaciones de Lingoda sobre el progreso de tu aprendizaje y sobre nuestros productos y servicios. Puedes darte de baja en cualquier momento de forma gratuita. Procesaremos tus datos personales de acuerdo con nuestra Política de privacidad.</p>
                    
                    ¿Ya tienes una cuenta? 
                    <a className='link-purple'
                    href='#nav'
                    onClick={() => handleRoute("login")}
                >Ingresar</a>
                </div>
               
            </div>
        </section>
    )
}

export default Register;