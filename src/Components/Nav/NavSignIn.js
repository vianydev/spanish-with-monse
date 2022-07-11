import { Link, useLocation } from 'react-router-dom';
import logo from '../../Assets/images/logo.png';
import './Navbar.css';

const NavSignIn = () => {
    let location = useLocation();

    return (
        <nav id='login-nav' >
            {/* Desktop Nav */}
            <Link className='nav-logo' to='/' >
                <img src={logo} alt='logo' />
            </Link>
            {
                location.pathname === '/login' ?
                <Link to='/register' className='link-purple nav-right'>Sign up</Link>
                :  <Link to='/login' className='link-purple nav-right'>Log in</Link>
            }
           

        </nav>
    )
}

export default NavSignIn;