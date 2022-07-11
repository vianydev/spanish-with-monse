import { Link } from "react-router-dom";

const Hero = () => {
  return (
      <section id="hero">
        <div className="hero-content">
            <h1>Comienza la <span className="highlight">aventura</span> de aprender español</h1>
            <Link to='/register' className='btn-shape purple-btn'>Reservar clase gratis</Link>
        </div>
      </section>
  )
}

export default Hero;
