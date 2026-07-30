import "./Timeline.css";
import schedule from "../../../data/schedule";

function Timeline() {
  return (
    <section className="timeline" id="agenda">

      <div className="container">

        <span className="section-tag">
          CRONOGRAMA
        </span>

        <h2>
          Del 17 al 23 de agosto
        </h2>

        <p className="timeline__subtitle">
          Una semana completa de innovación,
          aprendizaje y colaboración.
        </p>

        <div className="timeline__line">

          {schedule.map((event) => (

            <div
              className="timeline__item"
              key={event.day}
            >

              <div className="timeline__circle"></div>

              <span className="timeline__day">
                {event.day}
              </span>

              <h3>
                {event.title}
              </h3>

              <p>
                {event.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Timeline;