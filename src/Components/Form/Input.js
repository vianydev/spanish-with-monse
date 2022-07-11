const Input = ({
    inputTitle,
    inputType, 
    inputName,
    inputPlaceholder,
    onChangeInput,
    onBlurHere,
    autocomplete
    }) => {


    return (
        <div className='form-box'>
            <p>{inputTitle}</p>
            <input 
                className='input-form' 
                type={inputType} 
                name={inputName}
                placeholder={inputPlaceholder}
                onChange={onChangeInput}
                onBlur={onBlurHere}
                autoComplete={autocomplete}
                // required 
                />
        </div>
    )
}

export default Input;