import SectionHeading from '../components/SectionHeading'
import { experiencePreview } from '../data/foundation'

function ExperienceSection() {
  return (
    <section className="section" id="experiencia">
      <div className="content-shell">
        <SectionHeading
          eyebrow="02 · EXPERIENCIA"
          title="Construir, integrar, resolver."
          description="Experiencia en desarrollo de software empresarial, telecomunicaciones y soporte técnico, con una evolución progresiva hacia soluciones full stack e integración de sistemas."
        />

        <div className="timeline">
          {experiencePreview.map((experience, index) => (
            <article className="timeline-item" key={experience.eyebrow}>
              <div className="timeline-item__rail" aria-hidden="true">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <i />
              </div>
              <div className="timeline-item__period">{experience.period}</div>
              <div className="timeline-item__content">
                <p className="timeline-item__eyebrow">{experience.eyebrow}</p>
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
