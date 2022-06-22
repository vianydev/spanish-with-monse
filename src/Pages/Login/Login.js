import { useState } from 'react';
import Form from '../../Components/Form/Form';


const Login = ( { handleRoute }) => {
    // // Register User
    // const [user, setUser] = useState({
    //     name: 'vianey',
    //     email: 'viany@gmail.com',
    //     password: '123',
    //     goal: 'begginer' 
    // }); 


    // const [name, setName] = useState('');
    // const handleName = (e) => {
    //     setName(e.target.value);
    //     console.log(name)
    // }
    // const [email, setEmail] = useState('');
    // const handleEmail = (e) => {
    //     setEmail(e.target.value);
    //     console.log(email)
    // }
    // const [password, setPassword] = useState('');
    // const handlePassword = (e) => {
    //     setPassword(e.target.value);
    //     console.log(password)
    // }
    // const [goal, setGoal] = useState('');
    // const handleGoal = (e) => {
    //     setGoal(e.target.value);
    //     console.log(goal)
    // }


    // const submitRegister = () => {
    //     console.log("submit")
    //     setUser({...{
    //         name: name,
    //         email: email,
    //         password: password,
    //         goal: goal
    //     }})
    //     console.log(user)
        
    // }

    return (
        <section id="login">
           <div id="form" className="login">
                <h1>¡Hola!</h1>
                <Form
                buttonText={'Entrar'}
                enabledName='disabled' 
                enabledEmail='enabled' 
                enabledPassword='enabled' 
                enabledGoals='disabled' 
                // handleName={handleName}
                // handleEmail={handleEmail}
                // handlePassword={handlePassword}
                // handleGoal={handleGoal}
                // submitRegister={submitRegister}

                />
                 <div className='login-link'>
                    <div>
                        Forgot your password?  
                        <a className='link-purple'
                        href='#nav'
                        onClick={() => console.log()}
                        >Reset password</a>
                    </div>     
                    <div>
                        Don’t have an account yet? 
                        <a className='link-purple'
                        href='#nav'
                        onClick={() => handleRoute("register")}
                        >Sign up</a>
                    </div>                    
                                   
                </div>

            </div>
        </section>
    )
}

export default Login;