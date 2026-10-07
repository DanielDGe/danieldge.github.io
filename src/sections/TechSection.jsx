import SectionHeading from '../components/SectionHeading'
import TechPill from '../components/TechPill'
import { techGroups } from '../data/foundation'

function TechSection() {
  return (
    <section className="section section--surface" id="tecnologias">
      <div className="content-shell">
        <SectionHeading
          eyebrow="03 · STACK"
          title="Herramientas elegidas por lo que permiten construir."
          description="Sin porcentajes arbitrarios: el stack se presenta por áreas de trabajo y contexto de uso."
        />

        <div className="tech-grid">
          {techGroups.map((group, index) => (
            <article className="tech-card" key={group.title}>
              <div className="tech-card__header">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>
              </div>
              <div className="tech-card__items">
                {group.items.map((item) => <TechPill key={item}>{item}</TechPill>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechSection
