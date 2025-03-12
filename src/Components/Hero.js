import { Link } from "react-router-dom";
import { Trans } from 'react-i18next';

const Hero = ({ t }) => {
  const heroButton = t('buttons.bookClass');

  return (
      <section id="hero">
        <div className="hero-container section">
          <div className="hero-content">
            <h1>
              <Trans i18nKey='main.hero.title'>
                Comienza la <span className="highlight">aventura</span> de aprender Español.
              </Trans>
            </h1>
            <Link to='/trialClass' className='btn-shape purple-btn btn-mobile'>{heroButton}</Link>
          </div>
         <div className="hero-img"></div>
        </div>
      </section>
  )
}

export default Hero;
