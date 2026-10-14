function BrandMark({ size = 38, className = '' }) {
  return (
    <svg
      className={'brand-mark' + (className ? ' ' + className : '')}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Monograma DG de Daniel García"
    >
      <rect
        className="brand-mark__background"
        x="3"
        y="3"
        width="58"
        height="58"
        rx="16"
      />
      <rect
        className="brand-mark__border"
        x="3"
        y="3"
        width="58"
        height="58"
        rx="16"
      />
      <text
        className="brand-mark__letter brand-mark__letter--d"
        x="13"
        y="40"
      >
        D
      </text>
      <text
        className="brand-mark__letter brand-mark__letter--g"
        x="34"
        y="40"
      >
        G
      </text>
    </svg>
  )
}

export default BrandMark
