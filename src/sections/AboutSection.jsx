import SectionHeading from '../components/SectionHeading'
import { focusAreas } from '../data/foundation'

function AboutSection() {
  return (
    <section className="section section--surface" id="sobre-mi">
      <div className="content-shell">
        <SectionHeading
          eyebrow="01 · PERFIL"
          title="Tecnología con criterio de producto."
          description="Más que escribir código, me interesa entender el problema, diseñar una solución mantenible y cuidar cómo la experimenta la persona que la utiliza."
        />

        <div className="about-layout">
          <div className="about-statement">
            <p className="about-statement__lead">
              Mi trabajo se mueve entre backend, frontend e integración de sistemas.
            </p>
            <p>
              Esa visión de extremo a extremo me permite conectar reglas de negocio,
              servicios, datos e interfaz sin perder de vista el objetivo real del producto.
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
