import "./Navbar.css";
import useScroll from "../../../hooks/useScroll";
import logo from "../../../assets/logos/HACKATOON_5.png";
function Navbar() {
  const scrolled = useScroll();

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container">

       <div className="navbar__logo">
          <img 
            src={logo}
            alt="Hackathon Paseo Aranjuez"
          />
        </div>
        <nav className="navbar__menu">

          <a href="#inicio">Inicio</a>

          <a href="#about">Hackathon</a>

          <a href="#timeline">Agenda</a>

          <a href="#premios">Premios</a>

          <a href="#sponsors">Sponsors</a>

          <a href="#contact">Contacto</a>

        </nav>

        <button className="navbar__button">
          Inscribirme
        </button>

      </div>
    </header>
  );
}

export default Navbar;