import Hero from '../../Components/Hero';
import Beneficios from '../../Components/Beneficios/Beneficios';
import Objetivos from '../../Components/Objetivos/Objetivos';
import Banner from '../../Components/Banner/Banner';
import Process from '../../Components/Process/Process';
import AboutMe from '../../Components/AboutMe/AboutMe';

const Main = () => {
    return (
        <section>
          <Hero />
          <Beneficios />
          <Objetivos />
          <Banner 
            title="Da el primer paso, reserva una clase muestra"
            description="Descubre cómo es una clase y resuelve tus dudas"
            bgColor="var(--gradient)"
            btnColor="btn-shape pink-btn"
            btnDescription='Book your class'
          />
          <Process />
          <AboutMe />
          <Banner 
            title="¿Aún no estás seguro de comenzar tus clases privadas?"
            description="Agenda una clase de 30 minutos totalmente gratuita y resuelve todas tus dudas." 
            bgColor="var(--dark-gray)"
            btnColor="btn-shape pink-btn"
            btnDescription='Book your class'
          />
        </section>
    )
}

export default Main;