import Icon from './Icon'
import TechPill from './TechPill'

function ProjectCard({ project }) {
  const content = (
    <>
      <div className="project-card__topline">
        <span className="project-card__number">{project.number}</span>
        <span className="project-card__type">{project.type}</span>
      </div>

      <div className="project-card__body">
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>

        <div className="project-card__technologies">
          {project.technologies.map((technology) => (
            <TechPill key={technology}>{technology}</TechPill>
          ))}
        </div>
      </div>

      <div className="project-card__footer">
        <span>{project.status}</span>
        {project.href ? (
          <span className="project-card__action" aria-hidden="true">
            Ver proyecto
            <Icon name="arrowUpRight" size={17} />
          </span>
        ) : (
          <span className="project-card__action project-card__action--muted">
            Caso privado
          </span>
        )}
      </div>
    </>
  )

  const className = 'project-card project-card--' + project.id

  if (project.href) {
    return (
      <a
        className={className}
        href={project.href}
        target="_blank"
        rel="noreferrer"
        aria-label={project.title + ' — abrir repositorio'}
      >
        {content}
      </a>
    )
  }

  return <article className={className}>{content}</article>
}

export default ProjectCard
