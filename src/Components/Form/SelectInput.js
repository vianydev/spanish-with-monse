import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const SelectInput = ({  
    inputTitle,
    inpuType, 
    inputName,
    onChangeInput,
    onBlurHere
}) => {        

    return (
        <div id='select' className='form-box'>
            <p>{inputTitle}</p>
            <select 
                className='goals' 
                type={inpuType} 
                name={inputName} 
                onChange={onChangeInput}
                onBlur={onBlurHere}
                required
            > 
                <option value="">*Select your goal</option>
                <option value='beginners'>Begginers</option>
                <option value='conversation'>Conversation</option>
                <option value='next-level'>Next level</option>
            </select>
            <FontAwesomeIcon className='custom-arrow' icon={faChevronDown} />
        </div>
    )
}

export default SelectInput;