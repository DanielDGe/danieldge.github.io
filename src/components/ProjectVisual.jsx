function ProjectVisual({ project }) {
  const visual = project.visual

  if (!visual) {
    return null
  }

  if (visual.kind === 'fleet') {
    return (
      <div className="project-visual project-visual--fleet-dashboard" role="img" aria-label={visual.label}>
        <div className="fleet-dashboard__window" aria-hidden="true">
          <div className="fleet-dashboard__topbar">
            <div className="fleet-dashboard__brand"><span>FP</span><strong>FleetPulse</strong></div>
            <div className="fleet-dashboard__live"><i />Monitoreo en tiempo real</div>
            <div className="fleet-dashboard__avatar">DG</div>
          </div>

          <div className="fleet-dashboard__content">
            <div className="fleet-dashboard__heading">
              <div><span>CENTRO DE CONTROL</span><strong>Resumen de la flota</strong></div>
              <small>Datos en vivo</small>
            </div>

            <div className="fleet-dashboard__metrics">
              <article><span>Vehículos en línea</span><strong>18</strong><small>de 24 vehículos</small></article>
              <article><span>Velocidad promedio</span><strong>47.8</strong><small>km/h</small></article>
              <article><span>Combustible promedio</span><strong>72%</strong><small>flota activa</small></article>
              <article><span>En movimiento</span><strong>11</strong><small>vehículos</small></article>
            </div>

            <div className="fleet-dashboard__main">
              <div className="fleet-dashboard__map">
                <div className="fleet-dashboard__map-grid" />
                <div className="fleet-dashboard__route fleet-dashboard__route--one" />
                <div className="fleet-dashboard__route fleet-dashboard__route--two" />
                <span className="fleet-dashboard__marker fleet-dashboard__marker--one">V-014</span>
                <span className="fleet-dashboard__marker fleet-dashboard__marker--two">V-027</span>
                <span className="fleet-dashboard__marker fleet-dashboard__marker--three">V-031</span>
              </div>

              <div className="fleet-dashboard__vehicles">
                <div className="fleet-dashboard__vehicles-header"><span>VEHÍCULOS</span><strong>24 registrados</strong></div>
                <div className="fleet-dashboard__vehicle"><i /><span><strong>V-014</strong><small>Online · 52 km/h</small></span></div>
                <div className="fleet-dashboard__vehicle"><i /><span><strong>V-027</strong><small>Online · 41 km/h</small></span></div>
                <div className="fleet-dashboard__vehicle"><i className="is-muted" /><span><strong>V-031</strong><small>Detenido · 0 km/h</small></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (visual.kind === 'security') {
    return (
      <div className="project-visual project-visual--security" role="img" aria-label={visual.label}>
        <div className="security-flow" aria-hidden="true">
          <div className="security-flow__node"><span>01</span><strong>React</strong><small>Frontend</small></div>
          <div className="security-flow__connector"><span>OIDC</span></div>
          <div className="security-flow__node security-flow__node--accent"><span>02</span><strong>Keycloak</strong><small>Identity</small></div>
          <div className="security-flow__connector"><span>JWT</span></div>
          <div className="security-flow__node"><span>03</span><strong>Spring Boot</strong><small>Protected API</small></div>
          <div className="security-flow__connector"><span>JPA</span></div>
          <div className="security-flow__node"><span>04</span><strong>PostgreSQL</strong><small>Persistence</small></div>
        </div>

        <div className="security-flow__badges" aria-hidden="true">
          <span>Flyway</span><span>Testcontainers</span><span>Docker</span><span>GitHub Actions</span>
        </div>
      </div>
    )
  }

  return (
    <div className="project-visual project-visual--portfolio" role="img" aria-label={visual.label}>
      <div className="portfolio-preview__window">
        <div className="portfolio-preview__topbar"><span /><span /><span /></div>
        <div className="portfolio-preview__layout">
          <aside aria-hidden="true"><strong>ISAE</strong><i /><i /><i /><i /><i /></aside>
          <div className="portfolio-preview__content" aria-hidden="true">
            <span>PORTAFOLIO DIGITAL</span>
            <h4>Aprendizaje & evidencias</h4>
            <div className="portfolio-preview__cards"><i /><i /><i /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectVisual
