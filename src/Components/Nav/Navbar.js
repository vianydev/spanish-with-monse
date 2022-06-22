import logo from '../../Assets/images/logo.png';
import down from '../../Assets/icons/down.png';
import iconHamburger from '../../Assets/icons/hamburger.png';
import iconX from '../../Assets/icons/x.png';
import './Navbar.css';
// import RegisterButton from '../RegisterButton';

const Navbar = ({ handleRoute, isLogin }) => {

    const setLanguage = () => {
        console.log("click on language")
        const showContent = document.getElementsByClassName("dropdown-content");
        showContent[ 0 ].style.display === "none"
            ? showContent[ 0 ].style.display = "block"
            : showContent[ 0 ].style.display = "none";
    }
    const setLanguageMobile = () => {
        console.log("click on language mobile")
        const showContent = document.getElementsByClassName("dropdown-content-mobile");
        showContent[ 0 ].style.display === "none"
            ? showContent[ 0 ].style.display = "block"
            : showContent[ 0 ].style.display = "none";
    }

    const showNavMobile = () => {
        console.log("click on hamburger")
        const showContent = document.getElementsByClassName("nav-mobile-menu");
        showContent[ 0 ].style.display === "none"
            ? showContent[ 0 ].style.display = "block"
            : showContent[ 0 ].style.display = "none";
        // Handle Nav mobile icon
        const icon = document.getElementsByClassName("nav-mobile-btn");
        icon[ 0 ].src === iconHamburger ? icon[ 0 ].src = iconX : icon[ 0 ].src = iconHamburger;
    }

    return (
        <nav id='nav'>
            {/* Desktop Nav */}
            <img className='nav-logo'
                onClick={() => handleRoute('main')}
                src={logo}
                alt='logo' />

            <div className='nav-links'>
                <a className='nav-link'
                    href="#process">¿Cómo comenzar?</a>
                <a className='nav-link'
                    href="#about-me">Acerca de mi</a>
            </div>

            <div className='nav-buttons'>
                <div className="dropdown">
                    <button className="dropbtn"
                        onClick={setLanguage}> Español
                        <img className='icon-down' src={down} alt="down" />
                    </button>
                    <div className="dropdown-content"
                        style={{ display: "none" }}>
                        <a href="#nav" >Español</a>
                        <a href="#nav" >English</a>
                    </div>
                </div>

                <a className='nav-link link-purple nav-right'
                    href='#nav'
                    onClick={() => handleRoute("login")}
                >Ingresar</a>

                <button className='purple-btn' 
                    onClick={() => handleRoute("register")}
                    > Reservar clase
                </button>   
            </div>

            {/* Nav for mobile */}
            <div className='nav-mobile'>
                <img className='nav-mobile-btn'
                    src={iconHamburger}
                    alt="hamburger-button"
                    onClick={showNavMobile} />

                <div className='nav-mobile-menu'
                    style={{ display: "none" }}>
                    <div className='nav-mobile-menu-content'>
                        <a className='nav-link link-purple'
                            href='#nav'
                            onClick={() => handleRoute("login")}
                        >Ingresar</a>

                        <div className="dropdown">
                            <button className="dropbtn"
                                onClick={setLanguageMobile}> Español
                                <img className='icon-down' src={down} alt="down" />
                            </button>
                            <div className="dropdown-content-mobile"
                                style={{ display: "none" }}>
                                <a href="#nav" >Español</a>
                                <a href="#nav" >English</a>
                            </div>
                        </div>

                        <div className='nav-links-mobile'>
                            <a className='nav-link'
                                href="#nav">¿Cómo comenzar?</a>
                            <a className='nav-link'
                                href="#nav">Contacto</a>
                        </div>

                        <button className='purple-btn' 
                            onClick={() => handleRoute("register")}
                            > Reservar clase
                        </button>
                    </div>

                </div>
            </div>

        </nav>
    )
}

export default Navbar;