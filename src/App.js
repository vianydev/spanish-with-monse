import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Beneficios from './Components/Beneficios';
import Objetivos from './Components/Objetivos';
import Banner from './Components/Banner';
import Process from './Components/Process';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Beneficios />
      <Objetivos />
      <Banner />
      <Process />
      <AboutMe />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
