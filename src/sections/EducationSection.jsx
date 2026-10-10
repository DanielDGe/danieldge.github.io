import SectionHeading from '../components/SectionHeading'
import { educationPreview } from '../data/foundation'

function EducationSection() {
  return (
    <section className="section section--surface" id="formacion">
      <div className="content-shell">
        <SectionHeading
          eyebrow="05 · FORMACIÓN"
          title="Una base técnica reforzada por ingeniería y docencia."
          description="Mi formación combina desarrollo de software, ingeniería de software y educación superior, ampliando tanto la profundidad técnica como la forma de analizar, documentar y comunicar soluciones."
        />

        <div className="education-grid">
          {educationPreview.map((item, index) => (
            <article className="education-card" key={item.title}>
              <div className="education-card__index">{String(index + 1).padStart(2, '0')}</div>
              <span className="education-card__level">{item.level}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationSection
