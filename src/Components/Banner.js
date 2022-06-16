import './Banner.css';

const Banner = ({ title, text, color, pinkBtn }) => {
  return (
      <section id='banner-clase-muestra' style={{
        background: color
        }}>
        <div className='banner-clase-muestra'>
            <h2>{title}</h2>
            <p>{text}</p>
            <button id='hero-btn' 
              className={pinkBtn}>Reservar clase muestra</button>
        </div>
      </section>
  )
}

export default Banner;