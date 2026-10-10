import Icon from './Icon'
import ProjectVisual from './ProjectVisual'
import TechPill from './TechPill'

function ProjectCard({ project }) {
  return (
    <article className={'project-card project-card--' + project.id}>
      <ProjectVisual project={project} />

      <div className="project-card__content">
        <div className="project-card__topline">
          <span className="project-card__number">{project.number}</span>
          <span className="project-card__type">{project.type}</span>
        </div>

        <div className="project-card__body">
          <div>
            <p className="project-card__tagline">{project.tagline}</p>
            <h3>{project.title}</h3>
            <p className="project-card__description">{project.description}</p>
          </div>

          <ul className="project-card__highlights">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          <div className="project-card__architecture" aria-label={'Arquitectura resumida de ' + project.title}>
            {project.architecture.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="project-card__technologies" aria-label={'Tecnologías de ' + project.title}>
            {project.technologies.map((technology) => (
              <TechPill key={technology}>{technology}</TechPill>
            ))}
          </div>

          {project.privateNote ? (
            <p className="project-card__private-note">{project.privateNote}</p>
          ) : null}
        </div>

        <div className="project-card__footer">
          <span className="project-card__status">{project.status}</span>

          {project.links.length > 0 ? (
            <div className="project-card__links">
              {project.links.map((link) => (
                <a
                  className="project-card__action"
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name={link.icon} size={16} />
                  {link.label}
                </a>
              ))}
            </div>
          ) : (
            <span className="project-card__action project-card__action--muted">
              Código no público
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
