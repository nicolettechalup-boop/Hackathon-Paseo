import "./About.css";

import {
    FaLightbulb,
    FaUsers,
    FaLaptopCode
} from "react-icons/fa";

function About() {

    const cards = [

        {
            icon: <FaLightbulb />,
            title: "Innovación",
            text:
                "Convierte ideas en soluciones reales para los desafíos de la ciudad."
        },

        {
            icon: <FaUsers />,
            title: "Trabajo en Equipo",
            text:
                "Forma equipos multidisciplinarios y aprende de otros participantes."
        },

        {
            icon: <FaLaptopCode />,
            title: "Tecnología",
            text:
                "Desarrolla proyectos utilizando las tecnologías más actuales."
        }

    ];

    return (

        <section
            className="about"
            id="hackathon"
        >

            <div className="container">

                <span className="section-tag">
                    SOBRE LA HACKATHON
                </span>

                <h2>

                    Una semana para crear
                    el futuro de Cochabamba

                </h2>

                <p className="about__subtitle">

                    Participa en una experiencia donde
                    estudiantes, desarrolladores,
                    diseñadores y emprendedores colaboran
                    para construir soluciones tecnológicas
                    con impacto real.

                </p>

                <div className="about__grid">

                    {cards.map((card) => (

                        <article
                            className="about__card"
                            key={card.title}
                        >

                            <div className="about__icon">

                                {card.icon}

                            </div>

                            <h3>{card.title}</h3>

                            <p>{card.text}</p>

                        </article>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default About;