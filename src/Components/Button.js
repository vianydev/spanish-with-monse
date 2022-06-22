const Button = ({ buttonText, color,  }) => {
    return (
        <button
            className={color}
            > {buttonText}
        </button>
    );
}

export default Button;