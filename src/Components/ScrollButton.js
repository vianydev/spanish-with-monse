import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <a href="#Nav" className="scroll-top">
      <FontAwesomeIcon
        className="fa-scroll-top"
        icon={faCircleChevronUp}
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </a>
  );
};

export default ScrollButton;
