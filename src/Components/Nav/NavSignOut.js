import logo from '../../Assets/images/logo.png';
import './Navbar.css';

const NavSignOut = ({ handleRoute }) => {

    return (
        <nav id='nav'>
            {/* Desktop Nav */}
            <img className='nav-logo'
                src={logo}
                alt='logo' />

            <div className='sign-right'>
                {/* <p>Don’t have an account yet? </p> */}
                
                <a className='link-purple'
                href='#Nav'
                onClick={() => handleRoute("main")}
                >Salir</a>
            </div>       
        </nav>
    )
}

export default NavSignOut;