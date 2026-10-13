import TechLogo from './TechLogo'

function TechPill({ children, withLogo = false }) {
  return (
    <span className={'tech-pill' + (withLogo ? ' tech-pill--with-logo' : '')}>
      {withLogo ? <TechLogo name={children} /> : null}
      <span>{children}</span>
    </span>
  )
}

export default TechPill
