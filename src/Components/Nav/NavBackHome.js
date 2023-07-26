import { Link } from 'react-router-dom';
import logo from '../../Assets/images/logo.png';
import './Navbar.css';

const NavBackHome = ({ t }) => {

    return (
        <header id='header'>
            <nav id='nav'>
                {/* Desktop Nav */}
                <a className='nav-logo' href='/'>
                    <img src={logo} alt='logo' />
                </a>

                <div className='sign-right'>
                    <Link
                        className='link-purple signout-link'
                        to={`/`} >
                        {t("buttons.backHome")}
                    </Link>

                </div>
            </nav>
        </header>
    )
}

export default NavBackHome;