import TechLogo from './TechLogo'

function TechPill({ children, withLogo = false, style }) {
  return (
    <span className={'tech-pill' + (withLogo ? ' tech-pill--with-logo' : '')} style={style}>
      {withLogo ? <TechLogo name={children} /> : null}
      <span>{children}</span>
    </span>
  )
}

export default TechPill
