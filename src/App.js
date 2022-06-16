import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Beneficios from './Components/Beneficios';
import Objetivos from './Components/Objetivos';
import Banner from './Components/Banner';
import Process from './Components/Process';
import AboutMe from './Components/AboutMe';
// import Contact from './Components/Contact';

function App() {

  //Banner CTA config
  const titleCta1 = "Da el primer paso, reserva una clase muestra";
  const textCta1 = "Descubre cómo es una clase y resuelve tus dudas en una clase totalmente gratuita.";
  const pinkBtn = "pink-btn";
  const gradientCta = "var(--gradient)";
  const greenCta = "var(--dark-gray)";


  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Beneficios />
      <Objetivos />
      <Banner title={titleCta1} 
        text={textCta1} 
        color={gradientCta}
        pinkBtn={pinkBtn} />
      <Process />
      <AboutMe />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
