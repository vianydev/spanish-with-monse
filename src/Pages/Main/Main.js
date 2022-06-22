import Hero from '../../Components/Hero';
import Beneficios from '../../Components/Beneficios/Beneficios';
import Objetivos from '../../Components/Objetivos/Objetivos';
import Banner from '../../Components/Banner/Banner';
import Process from '../../Components/Process/Process';
import AboutMe from '../../Components/AboutMe/AboutMe';

const Main = ({ handleRoute }) => {
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

    return (
        <section>
          <Hero handleRoute={handleRoute} />
          <Beneficios />
          <Objetivos handleRoute={handleRoute} />
          <Banner 
            title={bannerInfo[0].title} 
            description={bannerInfo[0].description} 
            bgColor={bannerInfo[0].bgColor}
            btnColor={bannerInfo[0].btnColor}
            handleRoute={handleRoute} />
          <Process />
          <AboutMe />
          <Banner 
            title={bannerInfo[1].title} 
            description={bannerInfo[1].description} 
            bgColor={bannerInfo[1].bgColor}
            btnColor={bannerInfo[1].btnColor}
            handleRoute={handleRoute} />
        </section>
    )
}

export default Main;