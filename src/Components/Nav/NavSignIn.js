import logo from '../../Assets/images/logo.png';
import './Navbar.css';

const NavSignIn = ({ handleRoute }) => {

    return (
        <nav id='nav'>
            {/* Desktop Nav */}
            <img className='nav-logo'
                onClick={() => handleRoute('main')}
                src={logo}
                alt='logo' /> 
        </nav>
    )
}

export default NavSignIn;