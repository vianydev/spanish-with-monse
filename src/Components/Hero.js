const Hero = ({ handleRoute }) => {
  return (
      <section id="hero">
        <div className="hero-content">
            <h1>Comienza la <span className="highlight">aventura</span> de aprender español</h1>
            <button className="purple-btn"
              onClick={()=>handleRoute("signin")}>Reservar clase gratis</button>
        </div>
      </section>
  )
}

export default Hero;
