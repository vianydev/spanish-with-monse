import './Form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';

const Form = ( {
        buttonText, 
        enabledName, 
        enabledEmail, 
        enabledPassword, 
        enabledGoals,
        handleName,
        handleEmail,  
        handlePassword,
        handleGoal,
        submitRegister
    }) => {
        

    return (
        <form className='form'>
            <div 
            className='form-box'
            style={enabledName === 'disabled' ? {display: 'none'} : {display: 'grid'}}>
                <p>Name:</p>
                <input 
                    className='input-form' 
                    type="text" 
                    name="user-name"
                    placeholder="*Name"
                    onChange={handleName} 
                    required />
            </div>
            <div 
                className='form-box' 
                style={enabledEmail === 'disabled' ? {display: 'none'} : {display: 'grid'}}>
                <p>E-mail:</p>
                <input 
                className='input-form' 
                type="email" 
                name="email" 
                placeholder="*E-mail" 
                onChange={handleEmail} 
                required />
            </div>
            <div 
                className='form-box'
                style={enabledPassword === 'disabled' ? {display: 'none'} : {display: 'grid'}}>
                <p>Password:</p>
                <input 
                className='input-form' 
                type="password" 
                name="password" 
                placeholder="*Password" 
                onChange={handlePassword} 
                required />
            </div>
            <div 
                id='select' 
                className='form-box'
                style={enabledGoals === 'disabled' ? {display: 'none'} : {display: 'grid'}}>
                <p>Select your goal:</p>
                <select 
                    className='goals' 
                    name='goals' 
                    onChange={handleGoal}
                    required> 
                    <option value="">*Select your goal</option>
                    <option value='beginners'>Begginers</option>
                    <option value='conversation'>Conversation</option>
                    <option value='next-level'>Next level</option>
                </select>
                <FontAwesomeIcon className='custom-arrow' icon={faChevronDown} />
            </div>
            <div className='form-box btn-register-box'>
                <Button 
                    color='outline-purple'
                    buttonText={buttonText}
                    type="submit" 
                    value="Submit" 
                    onClick={submitRegister}
                />
            </div>
        </form>
    )
}

export default Form