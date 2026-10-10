function ProjectVisual({ project }) {
  const visual = project.visual

  if (!visual) {
    return null
  }

  if (visual.kind === 'image') {
    return (
      <div className="project-visual project-visual--image">
        <div className="project-visual__browser">
          <span /><span /><span />
        </div>
        <img src={visual.src} alt={visual.alt} loading="lazy" />
      </div>
    )
  }

  if (visual.kind === 'fleet') {
    return (
      <div
        className="project-visual project-visual--fleet"
        role="img"
        aria-label={visual.label}
      >
        <div className="fleet-map__grid" aria-hidden="true" />
        <div className="fleet-map__route fleet-map__route--one" aria-hidden="true" />
        <div className="fleet-map__route fleet-map__route--two" aria-hidden="true" />
        <div className="fleet-map__vehicle fleet-map__vehicle--one" aria-hidden="true">
          <i />
          <span>V-014</span>
        </div>
        <div className="fleet-map__vehicle fleet-map__vehicle--two" aria-hidden="true">
          <i />
          <span>V-027</span>
        </div>
        <div className="fleet-map__panel" aria-hidden="true">
          <span>LIVE TELEMETRY</span>
          <strong>24 vehicles</strong>
          <small>MQTT · SignalR</small>
        </div>
      </div>
    )
  }

  return (
    <div
      className="project-visual project-visual--portfolio"
      role="img"
      aria-label={visual.label}
    >
      <div className="portfolio-preview__window">
        <div className="portfolio-preview__topbar">
          <span />
          <span />
          <span />
        </div>
        <div className="portfolio-preview__layout">
          <aside aria-hidden="true">
            <strong>ISAE</strong>
            <i /><i /><i /><i /><i />
          </aside>
          <div className="portfolio-preview__content" aria-hidden="true">
            <span>PORTAFOLIO DIGITAL</span>
            <h4>Aprendizaje & evidencias</h4>
            <div className="portfolio-preview__cards">
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectVisual
