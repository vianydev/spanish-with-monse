import { Link } from 'react-router-dom';
import logo from '../../Assets/images/logo.png';
import './Navbar.css';

const NavSignOut = ({ handleLogOut, t }) => {
    return (
        <nav id='nav'>
            {/* Desktop Nav */}
            <Link className='nav-logo' to='/'>
                <img src={logo} alt='logo' />
            </Link>

            <div className='sign-right'>
                {/* <p>Don’t have an account yet? </p> */}
                <Link className='link-purple' to='/profile'>{t("signout-nav.my-profile")}</Link>
                <Link className='link-purple' to='/signout' onClick={() => handleLogOut()}>{t("signout-nav.signout")}</Link>
            </div>       
        </nav>
    )
}

export default NavSignOut;