import Hero from '../../Components/Hero';
import Beneficios from '../../Components/Beneficios/Beneficios';
import Objetivos from '../../Components/Objetivos/Objetivos';
import Banner from '../../Components/Banner/Banner';
import Process from '../../Components/Process/Process';
import AboutMe from '../../Components/AboutMe/AboutMe';

const Main = ({ t }) => {

  return (
    <section>
      <Hero t={t} />
      <Beneficios t={t} />
      <Objetivos t={t} />
      <Banner 
        title={t("main.banner1.title")}
        description={t("main.banner1.content")}
        bgColor="var(--gradient)"
        btnColor="btn-shape pink-btn"
        btnDescription={t("buttons.book")}
      />
      <Process t={t} />
      <AboutMe t={t} />
      <Banner 
        title={t("main.banner2.title")}
        description={t("main.banner2.content")} 
        bgColor="var(--dark-gray)"
        btnColor="btn-shape pink-btn"
        btnDescription={t("buttons.book")}
      />
    </section>
  )
}

export default Main;