const RegisterButton = ({ handleRoute }) => {
    return (
        <button className='purple-btn' 
            onClick={() => handleRoute("register")}
            > Reservar clase
        </button>
    );
}

export default RegisterButton;

