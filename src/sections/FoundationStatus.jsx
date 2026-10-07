import StatusBadge from '../components/StatusBadge'
import { foundationChecks } from '../data/foundation'

function FoundationStatus() {
  return (
    <section className="foundation" aria-labelledby="foundation-title">
      <div className="foundation__glow foundation__glow--one" aria-hidden="true" />
      <div className="foundation__glow foundation__glow--two" aria-hidden="true" />

      <div className="foundation__content">
        <StatusBadge>Nueva base técnica lista</StatusBadge>

        <p className="foundation__eyebrow">PORTFOLIO REDESIGN · 2026</p>

        <h1 id="foundation-title">
          La base legacy quedó atrás.
          <span> Ahora empieza el nuevo portafolio.</span>
        </h1>

        <p className="foundation__intro">
          Esta pantalla es temporal. Su objetivo es validar que React + Vite funcionan
          correctamente antes de construir el sistema visual y la experiencia definitiva.
        </p>

        <div className="foundation__grid" aria-label="Estado de la migración técnica">
          {foundationChecks.map(({ label, value, detail }) => (
            <article className="foundation-card" key={label}>
              <p className="foundation-card__label">{label}</p>
              <h2>{value}</h2>
              <p>{detail}</p>
            </article>
          ))}
        </div>

        <div className="foundation__next">
          <span aria-hidden="true">02 → 03</span>
          <div>
            <strong>Siguiente fase</strong>
            <p>Sistema visual, estructura de la experiencia y primeras secciones reales.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FoundationStatus
