import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from './Input';
import SelectInput from './SelectInput';
import './Form.css';

function RegisterForm () {        
    const [input, setInput] = useState({
        username: '',
        email: '',
        password: '',
        goal: ''
      });

    const onInputChange = e => {
        let { name, value } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
        validateInput(e);
    }

    // Set up Error and Input validation
    const [error, setError] = useState({
        username: '',
        email: '',
        password: '',
        goal: ''
      });

    const validateInput = e => {
        let { name, value } = e.target;
        setError(prev => {
            const stateObj = { ...prev, [name]: "" };
            const numbers = /[0-9]+/; 
        
            switch (name) {
            case "username":
                if (!value) {
                    stateObj[name] = "Please enter Name.";
                } else if (value.match(numbers)){
                    stateObj[name] = "Please don't use numbers in your Name.";
                } 
                break;
        
            case "email":
                if (!value) {
                 stateObj[name] = "Please enter Email.";
                } 
                break;

            case "password":
                if (!value) {
                    stateObj[name] = "Please enter Password.";
                } 
                break;
            
            case "goal":
                if (!value) {
                    stateObj[name] = "Please add your Goal.";
                }
                break; 

            default:
                break;
            }
        
            return stateObj;
        });
    }

    const validateForm = e => {
        const numbers = /[0-9]/;
    
        setError(prev => {
            const stateObj = { ...prev};
            const {email, password, goal} = input;
           
            const validEmail = () => {
               if (!email.includes('@') || !email.includes('.')){
                    stateObj.email = "Please add a valid Email.";
                } 
            }
            const validPassword = () => {
               if (password.length < 6){
                    stateObj.password = "Use at least 6 characters.";
                } else if (!password.match(numbers)){
                    stateObj.password = "Please add at least 1 number.";
                } 
            }
            const validGoal = () => {
               if (!goal){
                    stateObj.goal = "Please add your Goal.";
                } 
            }

            validEmail();
            validPassword();
            validGoal();
    
            return stateObj;
        });
    }

    let navigate = useNavigate();

    const handleButton = e => {
        e.preventDefault();
        validateForm(e);
        const numbers = /[0-9]+/; //regex
        const { username, email, password, goal } = input;

        if(error.username || !username){
            return
        } else if (error.email){
            return
        } else if (!email.includes('@') || !email.includes('.')){
            return
        } else if (error.password){
            return
        } else if (password.length < 6 || !password){
            return
        } else if (!password.match(numbers)){
            return
        } else if (error.goal || !goal){
            return
        } else {
            fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: username,
                    email: email, 
                    password: password,
                    goal: goal
                })
            })
            .then(response => response.json())
            .then(user => {
                console.log(user)
                if(user.id){
                    navigate('/login');
                } else {
                    console.log('oopsi something when wrong');
                }
            });
        }
    }

    return (
        <form className='form' >
            <Input
                inputTitle={'Name:'}
                inputType={'text'}
                inputName={'username'}
                inputPlaceholder={'*Name'}
                onChangeInput={onInputChange}
                onBlurHere={validateInput}
                required
            />
            {error.username && <span className='err'>{error.username}</span>}

            <Input
                inputTitle={'Email:'}
                inputType={'email'}
                inputName={'email'}
                inputPlaceholder={'*Email'}
                onChangeInput={onInputChange}
                onBlurHere={validateInput}
                required
            />
             {error.email && <span className='err'>{error.email}</span>}
            <Input
                inputTitle={'Password:'}
                inputType={'password'}
                inputName={'password'}
                inputPlaceholder={'*Password'}
                onChangeInput={onInputChange}
                onBlurHere={validateInput}
                autocomplete={'off'}
                required 
            />
             {error.password && <span className='err'>{error.password}</span>}
            <SelectInput
                inputTitle={'Select your goal:'}
                inputType={'select'}
                inputName={'goal'}
                onChangeInput={onInputChange}
                onBlurHere={validateInput}
                required  

            />
             {error.goal && <span className='err'>{error.goal}</span>}

            <div className='form-box btn-register-box'>
                <button 
                    className='outline-purple'
                    type="submit"
                    name="submit"
                    value="submit"
                    onClick={handleButton} 
                >
                    Crear cuenta</button>
            </div>
            
        </form>
    )
}

export default RegisterForm;