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
        btnColor="btn-shape green-btn"
        btnDescription={t("buttons.bookYourClass")}
      />
      <Process t={t} />
      <AboutMe t={t} />
      <Banner 
        title={t("main.banner2.title")}
        description={t("main.banner2.content")} 
        bgColor="var(--black)"
        btnColor="btn-shape green-btn"
        btnDescription={t("buttons.bookClass")}
      />
    </section>
  )
}

export default Main;