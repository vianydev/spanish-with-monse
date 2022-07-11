import { Link } from 'react-router-dom';
import logo from '../../Assets/images/logo.png';
import './Navbar.css';

const NavSignOut = ({ handleLogOut }) => {
    return (
        <nav id='nav'>
            {/* Desktop Nav */}
            <Link className='nav-logo' to='/'>
                <img src={logo} alt='logo' />
            </Link>

            <div className='sign-right'>
                {/* <p>Don’t have an account yet? </p> */}
                <Link className='link-purple' to='/profile'>My profile</Link>
                <Link className='link-purple' to='/signout' onClick={()=>handleLogOut()}>Salir</Link>
            </div>       
        </nav>
    )
}

export default NavSignOut;