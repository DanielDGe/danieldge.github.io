import SectionHeading from '../components/SectionHeading'
import { educationPreview } from '../data/foundation'

function EducationSection() {
  return (
    <section className="section section--surface" id="formacion">
      <div className="content-shell">
        <SectionHeading
          eyebrow="05 · FORMACIÓN"
          title="Aprender también forma parte del trabajo."
          description="Una trayectoria académica que combina desarrollo de software, ingeniería y formación orientada a la docencia superior."
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
