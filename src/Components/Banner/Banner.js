import './Banner.css';

const Banner = ({ 
    title, 
    description,
    bgColor,
    btnColor }) => {
  return (
      <section id='banner-clase-muestra' style={{
        background: bgColor
        }}>
        <div className='banner-clase-muestra'>
            <h2>{title}</h2>
            <p>{description}</p>
            <button id='hero-btn' 
              className={btnColor}>Reservar clase muestra</button>
        </div>
      </section>
  )
}

export default Banner;