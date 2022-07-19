import { Link } from 'react-router-dom';
import logo from '../../Assets/images/logo.png';
import './Navbar.css';

const NavSignOut = ({ handleLogOut, t, user }) => {

    return (
        <nav id='nav'>
            {/* Desktop Nav */}
            <a className='nav-logo' href='/'>
                <img src={logo} alt='logo' />
            </a>

            <div className='sign-right'>
                <Link 
                    className='link-purple signout-link' 
                    to={`/profile/${user.id}`} >
                    {t("signoutNav.myProfile")}
                </Link>
                <a 
                    className='link-purple signout-link' 
                    href='/signout' 
                    onClick={() => handleLogOut()}>{t("signoutNav.signout")}</a>
            </div>       
        </nav>
    )
}

export default NavSignOut;