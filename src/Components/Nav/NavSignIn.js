import { Link, useLocation } from 'react-router-dom';
import logo from '../../Assets/images/logo.png';
import './Navbar.css';

const NavSignIn = ({ t }) => {
    let location = useLocation();

    return (
        <nav id='login-nav' >
            {/* Desktop Nav */}
            <Link className='nav-logo' to='/' >
                <img src={logo} alt='logo' />
            </Link>
            {
                location.pathname === '/login' ?
                <Link to='/register' className='link-purple nav-right'>{ t("buttons.createAccount") }</Link>
                    : <Link to='/login' className='link-purple nav-right'>{t("buttons.login")}</Link>
            }
           

        </nav>
    )
}

export default NavSignIn;