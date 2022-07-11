import { Link } from 'react-router-dom';
import logo from '../../Assets/images/logo.png';
import down from '../../Assets/icons/down.png';
import iconHamburger from '../../Assets/icons/hamburger.png';
import iconX from '../../Assets/icons/x.png';
import './Navbar.css';

const Nav = ({ checkLocation }) => {
    const setLanguage = () => {
        const showContent = document.getElementById("toggle-dropdown");
        showContent.classList.toggle('on');
    }
    const setLanguageMobile = () => {
        const showContent = document.getElementById("toggle-dropdown-mobile");
        showContent.classList.toggle('on');
    }
    const showNavMobile = () => {
        const showContent = document.getElementById("toggle-nav");
        showContent.classList.toggle('on');
        // Handle Nav mobile icon
        const icon = document.getElementsByClassName("nav-mobile-btn");
        icon[ 0 ].src === iconHamburger ? icon[ 0 ].src = iconX : icon[ 0 ].src = iconHamburger;
    }

    return (
        <nav id='nav'>
             {/* Desktop Nav */}
             {
                checkLocation === '/' ?
                    <a className='nav-logo' href='./#'>
                        <img src={logo} alt='logo' />
                    </a>
                    :  <Link className='nav-logo' to='/'>
                            <img src={logo} alt='logo' />
                        </Link>
             }

            { 
                checkLocation === '/' ?
                <div className='nav-links'>
                    <a className='nav-link'
                        href="#process">¿Cómo comenzar?</a>
                    <a className='nav-link'
                        href="#about-me">Acerca de mi</a>
                </div>
                : <div></div>
            }

            <div className='nav-buttons'>
                { 
                    checkLocation === '/' ?
                        <div className="dropdown">
                            <button className="dropbtn"
                                onClick={setLanguage}> Español
                                <img className='icon-down' src={down} alt="down" />
                            </button>
                            <div id="toggle-dropdown" className="dropdown-content">
                                <a href="#nav" >Español</a>
                                <a href="#nav" >English</a>
                            </div>
                        </div>
                        : <div></div>
                }

                <Link to='/login' className='link-purple nav-right'>Ingresar</Link>
                <Link to='/register' className='btn-shape purple-btn'>Reservar clase</Link>
            </div>

            {/* Nav for mobile */}
            <div className='nav-mobile'>
                <img className='nav-mobile-btn'
                    src={iconHamburger}
                    alt="hamburger-button"
                    onClick={showNavMobile} 
                />

                <div id='toggle-nav' className='nav-mobile-menu'>
                    <div className='nav-mobile-menu-content'>

                        <Link to='/login' className='link-purple nav-right'>Ingresar</Link>

                        <div className="dropdown">
                            <button className="dropbtn" onClick={setLanguageMobile}> 
                                Español <img className='icon-down' src={down} alt="down" />
                            </button>
                            <div id="toggle-dropdown-mobile" className="dropdown-content-mobile">
                                <a href="#nav" >Español</a>
                                <a href="#nav" >English</a>
                            </div>
                        </div>

                        <div className='nav-links-mobile'>
                            <a className='nav-link'
                                href="#process" 
                                onClick={showNavMobile}
                            >¿Cómo comenzar?</a>
                            <a className='nav-link'
                                href="#about-me" 
                                onClick={showNavMobile}
                            >Acerca de mi</a>
                        </div>

                        <Link to='/register' className='btn-shape purple-btn'>Reservar clase</Link>
                    </div>

                </div>
            </div>

        </nav>
    )
}

export default Nav;