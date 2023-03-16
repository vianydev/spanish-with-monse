import { Link } from 'react-router-dom';
import logo from '../../Assets/images/logo.png';
import './Navbar.css';

const NavBookClass = ({ t }) => {

    return (
        <nav id='login-nav' >
            {/* Desktop Nav */}
            <Link className='nav-logo' to='/' >
                <img src={logo} alt='logo' />
            </Link>
        </nav>
    )
}

export default NavBookClass;