import Form from '../../Components/Form/Form';


const Login = ( { handleRoute }) => {

    return (
        <section id="login">
           <div id="form" className="login">
                <h1>¡Hola!</h1>
                <h3> Ingresa a tu cuenta</h3>
                <Form
                color={'outline-purple'}
                // buttonType={'submit'}
                // buttonValue={'submit'}
                buttonText={'Entrar'}
                actionButton={()=>handleRoute('dashboard')}
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
                        <a href='#nav' onClick={() => console.log()} >Forgot your password?</a>
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