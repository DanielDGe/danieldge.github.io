import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import { projectPreview } from '../data/foundation'

function ProjectsSection() {
  return (
    <section className="section" id="proyectos">
      <div className="content-shell">
        <div className="projects-heading">
          <SectionHeading
            eyebrow="04 · PROYECTOS"
            title="Proyectos que muestran cómo diseño y construyo soluciones."
            description="Una selección de proyectos donde aplico seguridad, arquitectura, integración, tiempo real y experiencia de usuario en contextos diferentes."
          />
          <span className="projects-heading__note">Selected work · 2026</span>
        </div>

        <div className="projects-grid">
          {projectPreview.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
