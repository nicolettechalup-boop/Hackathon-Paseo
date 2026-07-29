import Countdown from "./Countdown";
import ScrollIndicator from "./ScrollIndicator";

function HeroContent() {
  return (
    <div className="hero__content">

      <div className="hero__wrapper">

        <span className="hero__tag">
          HACKATHON TECNOLÓGICA 2026
        </span>

        <h1>
          Hackathon Paseo Aranjuez
        </h1>

        <p>
          Una semana donde estudiantes, desarrolladores,
          diseñadores y emprendedores crearán soluciones
          tecnológicas para transformar Cochabamba.
        </p>

        <div className="hero__buttons">

          <button className="hero__btn hero__btn--primary">
            Inscribirme
          </button>

          <button className="hero__btn hero__btn--secondary">
            Conocer más
          </button>

        </div>

        <Countdown />

      </div>

      <ScrollIndicator />

    </div>
  );
}

export default HeroContent;