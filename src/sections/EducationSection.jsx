import SectionHeading from '../components/SectionHeading'
import Icon from '../components/Icon'
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
            <article
              className="education-card"
              key={item.title}
              style={{ '--education-delay': `${index * 120}ms` }}
            >
              <div className="education-card__top">
                <span className="education-card__icon" aria-hidden="true">
                  <Icon name={item.icon} size={22} />
                </span>
                <span className="education-card__index">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <span className="education-card__level">{item.level}</span>
              <h3>{item.title}</h3>
              {item.path ? <p className="education-card__path">{item.path}</p> : null}
              <p className="education-card__description">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationSection
