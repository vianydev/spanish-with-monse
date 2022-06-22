import './App.css';
import { React, useState } from 'react';
import Navbar from './Components/Nav/Navbar';
import Hero from './Components/Hero';
import Beneficios from './Components/Beneficios/Beneficios';
import Objetivos from './Components/Objetivos/Objetivos';
import Banner from './Components/Banner/Banner';
import Process from './Components/Process/Process';
import AboutMe from './Components/AboutMe/AboutMe';
import Footer from './Components/Footer/Footer';
import ScrollButton from './Components/ScrollButton';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';

function App() {
    //Banner CTA config
    const bannerInfo = [
      {
        title: "Da el primer paso, reserva una clase muestra",
        description: "Descubre cómo es una clase y resuelve tus dudas",
        bgColor: "var(--gradient)",
        btnColor: "pink-btn"
      },
      {
        title: "¿Aún no estás seguro de comenzar tus clases privadas?",
        description: "Agenda una clase de 30 minutos totalmente gratuita y resuelve todas tus dudas.",
        bgColor: "var(--dark-gray)",
        btnColor: "pink-btn"
      }];

  //Routing Default 'main'
  const [route, setRoute] = useState('login');

  const handleRoute = (route) => {
    if(route === 'signin') {
      setRoute('signin');
    } else if (route === 'login'){
      setRoute('login');
      setIsLogin(true);
    } else if (route === 'register'){
      setRoute('register');
    } else {
      setRoute('main');
    }
  }

  // Handle Log in
  const [isLogin, setIsLogin] = useState(false);
  
 

  // useEffect(()=> {
  //   handleRoute(route)}, [route])


  return (
    <div className="App">
      <Navbar 
        route={route}
        handleRoute={handleRoute}  />

      { 
        route === "main" ? 
        <section>
          <Hero handleRoute={handleRoute} />
          <Beneficios />
          <Objetivos />
          <Banner title={bannerInfo[0].title} 
            description={bannerInfo[0].description} 
            bgColor={bannerInfo[0].bgColor}
            btnColor={bannerInfo[0].btnColor} />
          <Process />
          <AboutMe />
          <Banner title={bannerInfo[1].title} 
            description={bannerInfo[1].description} 
            bgColor={bannerInfo[1].bgColor}
            btnColor={bannerInfo[1].btnColor} />
        </section>

        : route === "register" ?  
        <Register handleRoute={handleRoute} />
        : route === "signin" ?  <section>
            <h1> Testing route Signin</h1>
        </section>
        : route === "login" ?  
        <Login handleRoute={handleRoute} />
        :  <section>
            <h1> Testing route 404</h1>
        </section>
      }
      
      
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default App;
