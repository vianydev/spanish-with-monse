import { Link } from "react-router-dom";
import logo from "../../Assets/images/logo.png";
import iconHamburger from "../../Assets/icons/hamburger.png";
import iconX from "../../Assets/icons/x.png";
import "./Navbar.css";
// import i18n from "../../i18n";
import TranslateButton from "../TranslateButton";

const Nav = ({ checkLocation, t, resetScroll }) => {
  // i18next variables
  const registerButton = t("buttons.register");
  const loginButton = t("buttons.login");
  const howToStart = t("nav.howToStart");
  const aboutMe = t("nav.aboutMe");

  const showNavMobile = () => {
    const showContent = document.getElementById("toggle-nav");
    showContent.classList.toggle("on-nav");
    // Handle Nav mobile icon
    const icon = document.getElementsByClassName("nav-mobile-btn");
    icon[0].src === iconHamburger
      ? (icon[0].src = iconX)
      : (icon[0].src = iconHamburger);
  };

  return (
    <nav id="nav">
      {/* Desktop Nav */}
      <Link className="nav-logo" to="/" onClick={() => resetScroll()}>
        <img src={logo} alt="logo" />
      </Link>

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

        <Link to="/login" className="link-purple nav-right">
          {loginButton}
        </Link>
        <Link to="/register" className="btn-shape purple-btn">
          {registerButton}
        </Link>
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
            <Link to="/login" className="link-purple nav-right">
              {/* {" "} */}
              {loginButton}
            </Link>

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

            <Link to="/register" className="btn-shape purple-btn">
              {registerButton}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
