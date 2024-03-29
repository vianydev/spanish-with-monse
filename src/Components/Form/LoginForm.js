import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Input from './Input';
import './Form.css';

const LoginForm = ({ loadUser, setIsLog }) => { 
  const [input, setInput] = useState({
      email: '',
      password: ''
    });

  const onInputChange = e => {
      let { name, value } = e.target;
      setInput(prev => ({
          ...prev,
          [name]: value
      }));
      validateInput(e);
  }
  // Translations
  const { t } = useTranslation();
  const email = t("form.email")
  const emailPlaceholder = t("form.emailPlaceholder")
  const addEmail = t("form.addEmail")
  const password = t("form.password")
  const passwordPlaceholder = t("form.passwordPlaceholder")
  const addPassword = t("form.addPassword")
  const login = t("buttons.login")
  const errorLogin = t("form.errorLogin")

  // Set up Error, Input validation
  const [error, setError] = useState({
      email: '',
      password: ''
    });

  const validateInput = e => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };
  
      switch (name) {
        case "email":
          if (!value) {
            stateObj[name] = addEmail;
          } 
          break;

        case "password":
          if (!value) {
            stateObj[name] = addPassword;
          } 
          break;
    
        default:
          break;
      }
  
      return stateObj;
    });
  }
    
  const handleLoginError = () => {
    const errorText = document.getElementById('error-popup');
    errorText.style.display = "flex";
  }

  let navigate = useNavigate();

  const handleLoggin = e => {
    e.preventDefault();
    const { email, password } = input;
    
    fetch('https://swmonse-server.onrender.com/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(response => response.json())
    .then(user => {
        if (user.id){
            loadUser(user);
            setIsLog(true)
            localStorage.setItem(
                "loggedUser", JSON.stringify(user)
            );
          fetch(`https://swmonse-server.onrender.com/profile/${user.id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
          })
            .then((response) => response.json())
            .then((user) => {
              if (user.id) {
                navigate('/profile/'+user.id);
              } else {
                console.log('error');
              }
            });
        } else {
            handleLoginError();
        }
      })   
  }

    return (
      <section>
        <form className='form' onSubmit={handleLoggin} >
          <Input
            inputTitle={email}
            inputType={'email'}
            inputName={'email'}
            inputPlaceholder={emailPlaceholder}
            onChangeInput={onInputChange}
            onBlurHere={validateInput}
            required
          />
          {error.email && <span className='err'>{error.email}</span>}

          <Input
            inputTitle={password}
            inputType={'password'}
            inputName={'password'}
            inputPlaceholder={passwordPlaceholder}
            onChangeInput={onInputChange}
            onBlurHere={validateInput}
            autocomplete={'off'}
            required
          />
          {error.password && <span className='err'>{error.password}</span>}

          <div className='form-box btn-register-box'>
            <button
              className='outline-purple'
              type="submit"
              name="submit"
              value="submit"
            >
              {login}</button>
          </div>
        </form>
        <div id='error-popup'><p>{errorLogin}</p></div>
      </section>
    )
}

export default LoginForm;