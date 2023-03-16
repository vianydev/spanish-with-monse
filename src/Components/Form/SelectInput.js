import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from "react-i18next";

const SelectInput = ({  
    inputTitle,
    inpuType, 
    inputName,
    onChangeInput,
    onBlurHere
}) => {        
    // Translations
    const { t } = useTranslation();
    const beginner = t("form.beginner");
    const conversation = t("form.conversation");
    const nextLevel = t("form.nextLevel");

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
                <option value='select'></option>
                <option value='beginners'>{beginner}</option>
                <option value='conversation'>{conversation}</option>
                <option value='next-level'>{nextLevel}</option>
            </select>
            <FontAwesomeIcon className='custom-arrow' icon={faChevronDown} />
        </div>
    )
}

export default SelectInput;