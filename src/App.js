import { React, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Main from "./Pages/Main/Main";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Footer from "./Components/Footer/Footer";
import ScrollButton from "./Components/ScrollButton";
import SignOut from "./Pages/SignOut/SignOut";
import NotFound from "./Pages/NotFound/NotFound";
import NavSignIn from "./Components/Nav/NavSignIn";
import NavSignOut from "./Components/Nav/NavSignOut";
import Nav from "./Components/Nav/Nav";
import Info from "./Pages/Profile/Info";

function App() {
  const { t } = useTranslation();

  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    goal: "",
    joined: "",
  });

  const loadUser = (data) => {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      goal: data.goal,
      joined: data.joined,
    });
  };

  const [isLog, setIsLog] = useState(false);

  //Login & Logout
  useEffect(() => {
    const loggedUserJSON = localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      setIsLog(true);
    }
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("loggedUser");
    setUser({
      id: "",
      name: "",
      email: "",
      goal: "",
      joined: "",
    });
    setIsLog(false);
  };

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
        checkLocation === "/login" || checkLocation === "/register" ? (
          <NavSignIn t={t} />
        ) : isLog ? (
          <NavSignOut handleLogOut={handleLogOut} t={t} user={user} />
        ) : (
          <Nav t={t} checkLocation={checkLocation} resetScroll={resetScroll} />
        )
      }
      <Routes>
        <Route path="/" element={<Main t={t} />} />
        <Route path="register" element={<Register t={t} />} />
        <Route
          path="login"
          element={
            <Login t={t} loadUser={loadUser} user={user} setIsLog={setIsLog} />
          }
        />
        <Route
          path="profile/:id"
          element={<Profile t={t} loadUser={loadUser} user={user} />}
        />
        <Route path="profile/info" element={<Info t={t} />} />
        <Route path="signout" element={<SignOut t={t} />} />
        <Route path="*" element={<NotFound t={t} />} />
      </Routes>
      {/* Footer */}
      <Footer checkLocation={checkLocation} t={t} />
      <ScrollButton />
    </div>
  );
}

export default App;
