import './Process.css';

const Process = () => {
  return (
      <section id="process">
        <div className="process-container">
          {/* <div className='process-title'> */}
            <h2>¿Cómo <span className='highlight'>comenzar</span> tus clases?</h2>
          {/* </div> */}
          <div className="process-box-container">
            <div className="process-box"
               onClick={() => console.log("click 1")}>
              <p className="process-number highlight">1</p>
              <p className='process-text'>Selecciona tu objetivo</p>
            </div>
            <div className="process-box"
                onClick={() => console.log("click 2")}>
              <p className="process-number highlight">2</p>
              <p className='process-text'>Reserva tu clase muestra</p>
            </div>
            <div className="process-box"
                onClick={() => console.log("click 3")}>
              <p className="process-number highlight">3</p>
              <p className='process-text'>Elige el plan de clases que prefieras</p>
            </div>
          </div>
        </div>
        <div className="line-bottom"></div>
      </section>
  )
}

export default Process;
