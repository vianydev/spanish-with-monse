import { Link } from "react-router-dom";
// import logo from "../../Assets/images/logo.png";
import iconHamburger from "../../Assets/icons/list.svg";
import iconX from "../../Assets/icons/x-lg.svg";
import "./Navbar.css";
// import i18n from "../../i18n";
import TranslateButton from "../TranslateButton";

const Nav = ({ checkLocation, t, resetScroll }) => {
  // i18next variables
  const bookTrialClassButton = t("buttons.bookTrialClass");
  const howToStart = t("nav.howToStart");
  const aboutMe = t("nav.aboutMe");

  const showNavMobile = () => {
    const showContent = document.getElementById("toggle-nav");
    showContent.classList.toggle("on-nav");
    // Handle Nav mobile icon
    const icon = document.getElementsByClassName("nav-mobile-btn");
    icon[0].src.includes(iconHamburger) 
      ? (icon[0].src = iconX)
      : (icon[ 0 ].src = iconHamburger);
  };

  return (
    <header id="header">
      <nav id="nav" className="section">
        {/* Desktop Nav */}
        <Link className="nav-logo" to="/" onClick={() => resetScroll()}>
          {/* <img src={logo} alt="logo" /> */}
          spanish with monse
        </Link>

        <div className="nav-menu-header">

          {checkLocation === "/" ? (
            <div className="nav-links">
              <a className="nav-link" href="#process">
                {howToStart}
              </a>
              <a className="nav-link" href="#about-me">
                {aboutMe}
              </a>
            </div>
          ) : (
            <div></div>
          )}


          <div className="nav-buttons">
            {checkLocation === "/" ? (
              <TranslateButton id={"toggle-translate"} />
            ) : (
              <div></div>
            )}

            {/* <Link to="/trialClass" className="btn-shape outline-purple">
              {bookTrialClassButton}
            </Link> */}
          </div>
        </div>

        

        {/* Nav for mobile */}
        <div className="nav-mobile">
          <img
            className="nav-mobile-btn"
            src={iconHamburger}
            alt="hamburger-button"
            onClick={showNavMobile}
          />

          <div id="toggle-nav" className="nav-mobile-menu">
            <div className="nav-mobile-menu-content">
              <TranslateButton id={"toggle-translate-mobile"} />

              {checkLocation === "/" ? (
                <div className="nav-links-mobile">
                  <a className="nav-link" href="#process" onClick={showNavMobile}>
                    {howToStart}
                  </a>
                  <a
                    className="nav-link"
                    href="#about-me"
                    onClick={showNavMobile}
                  >
                    {aboutMe}
                  </a>
                </div>
              ) : (
                <div className="nav-links-mobile"></div>
              )}

              <Link to="/trialClass" className="btn-shape purple-btn">
                {bookTrialClassButton}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
