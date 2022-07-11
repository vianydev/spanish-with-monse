import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = ({ 
    title, 
    description,
    bgColor,
    btnColor,
    btnDescription 
}) => {
  return (
      <section id='banner-clase-muestra' style={{
        background: bgColor
        }}>
        <div className='banner-clase-muestra'>
            <h2>{title}</h2>
            <p>{description}</p>
            <Link 
              className={btnColor} 
              to='./register'
              style={{margin: '30px 10px 10px 10px'}}
            >{btnDescription}</Link>
        </div>
      </section>
  )
}

export default Banner;