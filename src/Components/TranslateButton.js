import down from "../Assets/icons/down.png";
import "./TranslateButton.css";
import i18n from "../i18n";

const TranslateButton = ({ id }) => {
  // Handle menu in desktop with hover
  const hoverDropdown = (actived) => {
    const dropdown = document.getElementById(id);
    if (window.innerWidth > 650) {
      actived === "active"
        ? dropdown.classList.add("on")
        : dropdown.classList.remove("on");
    }
  };

  // Handle menu in mobile devices
  const clickDropdown = () => {
    const dropdown = document.getElementById(id);
    if (window.innerWidth < 650) {
      dropdown.classList.contains("on")
        ? dropdown.classList.remove("on")
        : dropdown.classList.add("on");
    }
  };

  const handleLanguage = (lang) => {
    const dropdown = document.getElementById(id);

    if (lang === "es") {
      i18n.changeLanguage("es", (err) => {
        if (err) {
          return console.log("something went wrong loading", err);
        } else if (window.innerWidth < 650) {
          dropdown.classList.remove("on");
        }
      });
    } else {
      i18n.changeLanguage("en", (err) => {
        if (err) {
          return console.log("something went wrong loading", err);
        } else if (window.innerWidth < 650) {
          dropdown.classList.remove("on");
        }
      });
    }
  };

  return (
    <div
      className="dropdown"
      onMouseEnter={() => hoverDropdown("active")}
      onMouseLeave={() => hoverDropdown("desactive")}
    >
      <button className="dropbtn" onClick={clickDropdown}>
        {i18n.language === "es" ? "Español" : "English"}
        <img className="icon-down" src={down} alt="down" />
      </button>

      <div id={id} className="dropdown-content">
        <p className="link-dark" onClick={() => handleLanguage("es")}>
          Español
        </p>
        <p className="link-dark" onClick={() => handleLanguage("en")}>
          English
        </p>
      </div>
    </div>
  );
};

export default TranslateButton;
