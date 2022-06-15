import logo from '../images/logo.png';
import down from '../images/icons/down.png';
import iconHamburger from '../images/icons/hamburger.png';
import iconX from '../images/icons/x.png';
import './Navbar.css';

const Navbar = () => {
    const setLanguage = () => {
        console.log("click on language")
        const showContent = document.getElementsByClassName("dropdown-content");
        showContent[0].style.display === "none" 
        ?  showContent[0].style.display = "block" 
        :  showContent[0].style.display = "none";
    }
    const setLanguageMobile = () => {
        console.log("click on language mobile")
        const showContent = document.getElementsByClassName("dropdown-content-mobile");
        showContent[0].style.display === "none" 
        ?  showContent[0].style.display = "block" 
        :  showContent[0].style.display = "none";
    }

    const showNavMobile = () => {
        console.log("click on hamburger")
        const showContent = document.getElementsByClassName("nav-mobile-menu");
        showContent[0].style.display === "none" 
        ?  showContent[0].style.display = "block" 
        :  showContent[0].style.display = "none";
        // Handle Nav mobile icon
        const icon = document.getElementsByClassName("nav-mobile-btn");
        icon[0].src === iconHamburger ? icon[0].src = iconX : icon[0].src = iconHamburger;
    }

    return (
        <nav id='nav'>
           <img className='nav-logo' src={logo} alt='logo' />

           <div className='nav-links'>
               <a className='nav-link'
                    href="#nav">¿Cómo comenzar?</a>
                    <a className='nav-link'
                        href="#nav">Acerca de mi</a>

           </div>
           
           <div className='nav-buttons'>
                <div className="dropdown">
                    <button className="dropbtn"
                        onClick={setLanguage}> Spanish 
                        <img className='icon-down' src={down} alt="down" /> 
                    </button>
                    <div className="dropdown-content"
                        style={{display: "none"}}>
                        <a href="#nav" >Spanish</a>
                        <a href="#nav" >English</a>
                    </div>
                </div>
                <button 
                    className='gradient-btn'>Reservar clase muestra</button>
           </div>
           
          {/* Nav for mobile */}
           <div className='nav-mobile'>
               <img className='nav-mobile-btn'
                src={iconHamburger}
                alt="hamburger-button"
                onClick={showNavMobile} />
                
                <div className='nav-mobile-menu'
                    style={{display: "none"}}>
                    <div className='nav-mobile-menu-content'>
                        <div className='link-purple'>
                            <a href='#nav'>Ingresar</a>
                        </div>

                        <div className="dropdown">
                            <button className="dropbtn"
                                onClick={setLanguageMobile}> Spanish 
                                <img className='icon-down' src={down} alt="down" /> 
                            </button>
                            <div className="dropdown-content-mobile"
                                style={{display: "none"}}>
                                <a href="#nav" >Spanish</a>
                                <a href="#nav" >English</a>
                            </div>
                        </div>

                        <div className='nav-links-mobile'>
                            <a className='nav-link'
                                    href="#nav">¿Cómo comenzar?</a>
                            <a className='nav-link'
                                    href="#nav">Contacto</a>
                        </div>
                    
                        <button 
                            className='purple-btn'>Reservar clase muestra
                        </button>
                    </div>
                    
                </div>
           </div>

        </nav>
    )
}

export default Navbar;