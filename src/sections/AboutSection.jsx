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
              Mi experiencia combina backend, frontend e integración de sistemas.
            </p>
            <p>
              He trabajado en APIs REST, microservicios, aplicaciones web, mensajería,
              seguridad, bases de datos relacionales y entornos contenerizados. Me interesa
              seguir creciendo en arquitectura de aplicaciones e integración de sistemas,
              manteniendo el foco en la calidad técnica, la mantenibilidad y la experiencia
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
