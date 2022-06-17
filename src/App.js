import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Beneficios from './Components/Beneficios';
import Objetivos from './Components/Objetivos';
import Banner from './Components/Banner';
import Process from './Components/Process';
import AboutMe from './Components/AboutMe';
import Footer from './Components/Footer';
// import Contact from './Components/Contact';

function App() {

  //Banner CTA config
  const titleCta1 = "Da el primer paso, reserva una clase muestra";
  const titleCta2 = "¿Aún no estás seguro de comenzar tus clases privadas?";
  const textCta1 = "Descubre cómo es una clase y resuelve tus dudas";
  const textCta2 = "Agenda una clase de 30 minutos totalmente gratuita y resuelve todas tus dudas.";
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
      <Banner title={titleCta2} 
        text={textCta2} 
        color={greenCta}
        pinkBtn={pinkBtn} />
      <Footer />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
