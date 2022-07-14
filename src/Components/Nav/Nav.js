import { Link } from "react-router-dom";
import logo from "../../Assets/images/logo.png";
import down from "../../Assets/icons/down.png";
import iconHamburger from "../../Assets/icons/hamburger.png";
import iconX from "../../Assets/icons/x.png";
import "./Navbar.css";
import i18n from "../../i18n";

const Nav = ({ checkLocation, t, resetScroll }) => {
  const registerButton = t("buttons.register");
  const loginButton = t("buttons.login");
  const howToStart = t("nav.howToStart");
  const aboutMe = t("nav.aboutMe");

  const hoverDropdown = (actived) => {
    const dropdown = document.getElementById("toggle-dropdown");
    actived === "active"
      ? dropdown.classList.add("on")
      : dropdown.classList.remove("on");
  };

  const clickDropdown = () => {
    const dropdown = document.getElementById("toggle-dropdown-mobile");
    dropdown.classList.toggle("on");
  };

  const handleLanguage = (lang) => {
    const dropdown = document.getElementById("toggle-dropdown-mobile");

    if (lang === "es") {
      i18n.changeLanguage("es", (err, t) => {
        if (err) return console.log("something went wrong loading", err);
        dropdown.classList.remove("on");
      });
    } else {
      i18n.changeLanguage("en", (err, t) => {
        if (err) return console.log("something went wrong loading", err);
        dropdown.classList.remove("on");
      });
    }
  };

  const showNavMobile = () => {
    const showContent = document.getElementById("toggle-nav");
    showContent.classList.toggle("on");
    // Handle Nav mobile icon
    const icon = document.getElementsByClassName("nav-mobile-btn");
    icon[0].src === iconHamburger
      ? (icon[0].src = iconX)
      : (icon[0].src = iconHamburger);
  };

  return (
    <nav id="nav">
      {/* Desktop Nav */}
      <Link className="nav-logo" to="/" onClick={resetScroll()}>
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
          <div
            className="dropdown"
            onMouseEnter={() => hoverDropdown("active")}
            onMouseLeave={() => hoverDropdown("desactive")}
          >
            <button className="dropbtn">
              {i18n.language === "es" ? "Español" : "English"}
              <img className="icon-down" src={down} alt="down" />
            </button>

            <div id="toggle-dropdown" className="dropdown-content">
              <p className="link-dark" onClick={() => handleLanguage("es")}>
                Español
              </p>
              <p className="link-dark" onClick={() => handleLanguage("en")}>
                English
              </p>
            </div>
          </div>
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
              {" "}
              {loginButton}
            </Link>

            <div className="dropdown">
              <button className="dropbtn" onClick={clickDropdown}>
                {i18n.language === "es" ? "Español" : "English"}
                <img className="icon-down" src={down} alt="down" />
              </button>
              <div
                id="toggle-dropdown-mobile"
                className="dropdown-content-mobile"
              >
                <p className="link-dark" onClick={() => handleLanguage("es")}>
                  Español
                </p>
                <p className="link-dark" onClick={() => handleLanguage("en")}>
                  English
                </p>
              </div>
            </div>

            <div className="nav-links-mobile">
              <a className="nav-link" href="#process" onClick={showNavMobile}>
                {howToStart}
              </a>
              <a className="nav-link" href="#about-me" onClick={showNavMobile}>
                {aboutMe}
              </a>
            </div>

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
