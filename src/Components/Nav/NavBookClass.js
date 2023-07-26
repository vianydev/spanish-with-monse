import { Link } from 'react-router-dom';
import logo from '../../Assets/images/logo.png';
import './Navbar.css';

const NavBookClass = ({ t }) => {

    return (
        <header id='header'>
            <nav id='login-nav' >
                {/* Desktop Nav */}
                <Link className='nav-logo' to='/' >
                    <img src={logo} alt='logo' />
                </Link>
            </nav>
        </header>
    )
}

export default NavBookClass;