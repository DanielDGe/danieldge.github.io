import SectionHeading from '../components/SectionHeading'
import { focusAreas } from '../data/foundation'

function AboutSection() {
  return (
    <section className="section section--surface" id="sobre-mi">
      <div className="content-shell">
        <SectionHeading
          eyebrow="01 · PERFIL"
          title="Ingeniería de software con visión de extremo a extremo."
          description="Soy Ingeniero de Software y Analista Programador. Trabajo en el desarrollo y mantenimiento de aplicaciones empresariales, combinando backend, frontend e integración de sistemas."
        />

        <div className="about-layout">
          <div className="about-statement">
            <p className="about-statement__lead">
              Mi stack principal hoy gira alrededor de Java 17, Spring Boot y React.
            </p>
            <p>
              He participado en APIs REST, microservicios, mensajería con RabbitMQ,
              autenticación y autorización con Keycloak, bases de datos relacionales y
              despliegues con Docker. Me interesa seguir creciendo en arquitectura de
              aplicaciones e integración de sistemas, sin perder de vista la experiencia
              final del usuario.
            </p>

            <div className="about-statement__signature">
              <span aria-hidden="true">DG</span>
              <div>
                <strong>Daniel García</strong>
                <small>Software Engineer · Programmer Analyst</small>
              </div>
            </div>
          </div>

          <div className="focus-grid">
            {focusAreas.map((area) => (
              <article className="focus-card" key={area.number}>
                <span className="focus-card__number">{area.number}</span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
