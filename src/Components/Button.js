const Button = ({ type, value, buttonText, color }) => {
    return (
        <button
            className={color} 
            type={type} 
            value={value} 
            > {buttonText}
        </button>
    );
}

export default Button;