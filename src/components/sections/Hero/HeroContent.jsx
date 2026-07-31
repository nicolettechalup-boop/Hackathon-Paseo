import Countdown from "./Countdown";
import ScrollIndicator from "./ScrollIndicator";
import hackathonLogo from "../../../assets/logos/HACKATOON-02.png";

/*
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
*/

function HeroContent() {
  return (
    <div className="hero__content">

      <img
        src={hackathonLogo}
        alt="Hackathon"
        className="hero__logo"
      />

      <span className="hero__tag">
        17 — 23 AGOSTO 2026
      </span>

      <p className="hero__description">
        Una semana donde estudiantes,
        desarrolladores, diseñadores y emprendedores
        crearán soluciones tecnológicas para transformar
        Cochabamba.
      </p>

      <div className="hero__buttons">

        <button className="hero__btn hero__btn--primary">
          Inscribirme
        </button>

        <button className="hero__btn hero__btn--secondary">
          Ver Cronograma
        </button>

      </div>

      <div className="hero__stats">

        <div>

          <h3>250+</h3>

          <span>Participantes</span>

        </div>

        <div>

          <h3>7+</h3>

          <span>Mentores</span>

        </div>

        <div>

          <h3>10+</h3>

          <span>Premios</span>

        </div>

      </div>

      <Countdown />

      <ScrollIndicator />

    </div>
  );
}

export default HeroContent;