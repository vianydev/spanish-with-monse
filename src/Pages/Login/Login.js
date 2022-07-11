import { Link } from 'react-router-dom';
import LoginForm from '../../Components/Form/LoginForm';


function Login ( { loadUser, setIsLog } ){    

    return (
        <section id="login">
           <div id="form" className="login">
                <h1>¡Hola!</h1>
                <h3> Ingresa a tu cuenta</h3>

                <LoginForm loadUser={loadUser} setIsLog={setIsLog} />

                <div className='login-link'>
                    <div style={{display: 'none'}}>
                        <a href='#nav' onClick={() => console.log()} >Forgot your password?</a>
                    </div>     
                    <div>
                        Don’t have an account yet? 
                        <Link className='link-purple' to='/register'>Sign up</Link>
                    </div>                        
                </div>
            </div>
        </section>
    )
}

export default Login;