import Icon from '../components/Icon'

function HeroSection() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__ambient hero__ambient--one" aria-hidden="true" />
      <div className="hero__ambient hero__ambient--two" aria-hidden="true" />

      <div className="hero__layout content-shell">
        <div className="hero__content">
          <div className="availability">
            <span className="availability__dot" aria-hidden="true" />
            Software Engineer · Analista Programador
          </div>

          <p className="hero__kicker">JAVA 17 · SPRING BOOT · REACT · SYSTEMS INTEGRATION</p>

          <h1>
            Construyo software que conecta
            <span> sistemas, datos y experiencias.</span>
          </h1>

          <p className="hero__description">
            Desarrollo aplicaciones empresariales de extremo a extremo, con experiencia en
            backend, frontend, APIs, microservicios e integración de sistemas. Mi enfoque combina
            solidez técnica, mantenibilidad y una experiencia clara para el usuario.
          </p>

          <div className="hero__actions">
            <a className="button button--primary" href="#proyectos">
              Explorar proyectos
              <Icon name="arrowUpRight" size={18} />
            </a>
            <a className="button button--ghost" href="#sobre-mi">
              Conocer mi perfil
            </a>
          </div>

          <div className="hero__signals" aria-label="Áreas principales">
            <span>Backend & APIs</span>
            <span>Architecture & Integration</span>
            <span>Full-Stack Development</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Representación visual de arquitectura de software">
          <div className="hero-visual__grid" aria-hidden="true" />
          <div className="hero-visual__halo" aria-hidden="true" />

          <div className="system-card">
            <div className="system-card__header">
              <span className="system-card__lights" aria-hidden="true">
                <i /><i /><i />
              </span>
              <span>software.system</span>
            </div>

            <div className="system-card__content">
              <span>01</span>
              <p><b>build</b> ('reliable')</p>
              <span>02</span>
              <p><b>integrate</b> ('systems')</p>
              <span>03</span>
              <p><b>design</b> ('experience')</p>
            </div>

            <div className="system-card__status">
              <span><i aria-hidden="true" /> system healthy</span>
              <strong>100%</strong>
            </div>
          </div>

          <div className="floating-node floating-node--api"><span>API</span><strong>REST</strong></div>
          <div className="floating-node floating-node--events"><span>EVENTS</span><strong>Async</strong></div>
          <div className="floating-node floating-node--ux"><span>UX</span><strong>Clear</strong></div>
        </div>
      </div>

      <a className="hero__scroll" href="#sobre-mi" aria-label="Ir a la siguiente sección">
        <span>Descubrir</span>
        <Icon name="chevronDown" size={17} />
      </a>
    </section>
  )
}

export default HeroSection
