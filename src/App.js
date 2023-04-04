import { React, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Main from "./Pages/Main/Main";
import TrialClassForm from "./Pages/TrialClassForm/TrialClassForm";
import Footer from "./Components/Footer/Footer";
import ScrollButton from "./Components/ScrollButton";
import Thanks from "./Pages/Thanks/Thanks";
import NotFound from "./Pages/NotFound/NotFound";
import NavBookClass from "./Components/Nav/NavBookClass";
// import NavBackHome from "./Components/Nav/NavBackHome";
import Nav from "./Components/Nav/Nav";

function App() {
  const { t } = useTranslation();

  let location = useLocation();
  const [checkLocation, setCheckLocation] = useState("");

  useEffect(() => {
    setCheckLocation(location.pathname);
    resetScroll();
  }, [location.pathname]);

  const resetScroll = () => {
    if (window.scrollY !== 0) {
      window.scroll({
        top: 0,
      });
    }
  };

  return (
    <div id="home" className="App">
      {
        //Set Nav
        checkLocation === "/trialClass" ? (
          <NavBookClass t={t} />
        ) : (
          <Nav t={t} checkLocation={checkLocation} resetScroll={resetScroll} />
        )
      }
      <Routes>
        <Route path="/" element={<Main t={t} />} />
        <Route path="/trialClass" element={<TrialClassForm t={t} />} />
        <Route path="/thanks" element={<Thanks t={t} />} />
        <Route path="*" element={<NotFound t={t} />} />
      </Routes>
      {/* Footer */}
      <Footer checkLocation={checkLocation} t={t} />
      <ScrollButton />
    </div>
  );
}

export default App;
