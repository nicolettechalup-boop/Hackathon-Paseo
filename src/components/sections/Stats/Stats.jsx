import "./Stats.css";
import stats from "../../../data/stats";

function Stats() {
  return (
    <section className="stats">
      <div className="container">

        <span className="section-tag">
          ¿POR QUÉ PARTICIPAR?
        </span>

        <h2>Mucho más que una competencia</h2>

        <p className="stats__subtitle">
          Aprende, crea conexiones, desarrolla proyectos reales y demuestra tu talento.
        </p>

        <div className="stats__grid">

          {stats.map((item) => {

            const Icon = item.icon;

            return (
              <article key={item.title} className="stats__card">

                <div className="stats__icon">
                  <Icon />
                </div>

                <h3>{item.number}</h3>

                <span>{item.title}</span>

              </article>
            );

          })}

        </div>

      </div>
    </section>
  );
}

export default Stats;