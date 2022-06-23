import './App.css';
import { React, useState } from 'react';
import Main from './Pages/Main/Main';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import Footer from './Components/Footer/Footer';
import ScrollButton from './Components/ScrollButton';
import Navigation from './Components/Nav/Navigation';
import SignOut from './Pages/SignOut/SignOut';
import Error404 from './Pages/Error/Error404'

function App() {
    
  //Routing Default 'main'
  const [route, setRoute] = useState('main');

  const handleRoute = (route) => {
    if(route === 'dashboard') {
      setRoute('dashboard');
      setIsLogin(true);
    } else if (route === 'login'){
      setRoute('login');
      // setIsLogin(true);
    } else if (route === 'register'){
      setRoute('register');
    } else if (route === 'signout'){
      setRoute('signout');
      setIsLogin(false);
    }
    setRoute(route);
    
  }

  //Log in
  const [isLogin, setIsLogin] = useState(false);


  return (
    <div className="App">
      {/* Set Nav */}
      <Navigation 
        route={route} 
        handleRoute={handleRoute} 
        isLogin={isLogin} />

      {/* Set content */}
      { 
        route === "main" 
        ? <Main handleRoute={handleRoute} />
        : route === "register" ?  
        <Register handleRoute={handleRoute} />
        : route === "dashboard" ?  
        <Dashboard />
        : route === "login" ?  
        <Login handleRoute={handleRoute} />
        : route === "signout" ?  
        <SignOut handleRoute={handleRoute} />  
        : <Error404 />
      }
      {/* Footer */}
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default App;
