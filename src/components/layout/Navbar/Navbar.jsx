import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__container">

        <h2 className="logo">
          Hackathon
        </h2>

        <nav>

          <ul className="navbar__menu">

            <li>
              <a href="#inicio">Inicio</a>
            </li>

            <li>
              <a href="#hackathon">Hackathon</a>
            </li>

            <li>
              <a href="#premios">Premios</a>
            </li>

            <li>
              <a href="#cronograma">Cronograma</a>
            </li>

            <li>
              <a href="#contacto">Contacto</a>
            </li>

          </ul>

        </nav>

      </div>
    </header>
  );
}

export default Navbar;