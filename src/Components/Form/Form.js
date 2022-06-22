import './Form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Form = ( {
        color,
        buttonType,
        buttonValue,
        buttonText, 
        actionButton,
        enabledName, 
        enabledEmail, 
        enabledPassword, 
        enabledGoals,
        handleName,
        handleEmail,  
        handlePassword,
        handleGoal,
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
                     />
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
                 />
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
                 />
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
                    > 
                    <option value="">*Select your goal</option>
                    <option value='beginners'>Begginers</option>
                    <option value='conversation'>Conversation</option>
                    <option value='next-level'>Next level</option>
                </select>
                <FontAwesomeIcon className='custom-arrow' icon={faChevronDown} />
            </div>
            <div className='form-box btn-register-box'>
                <button 
                    className={color}
                    type={buttonType} 
                    value={buttonValue} 
                    onClick={actionButton}>
                    {buttonText}</button>
            </div>
        </form>
    )
}

export default Form