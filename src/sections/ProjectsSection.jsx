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
            title="Trabajo que representa cómo pienso y construyo."
            description="Esta primera selección define la experiencia de navegación. Las historias, screenshots y detalles técnicos se profundizarán en la Fase 5."
          />
          <span className="projects-heading__note">Selected work · 2026</span>
        </div>

        <div className="projects-grid">
          {projectPreview.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
