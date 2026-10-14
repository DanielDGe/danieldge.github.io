function BrandMark({ size = 38, className = '' }) {
  return (
    <svg
      className={'brand-mark' + (className ? ' ' + className : '')}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
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
        className="brand-mark__code"
        x="32"
        y="39"
        textAnchor="middle"
      >
        {'<DG/>'}
      </text>
    </svg>
  )
}

export default BrandMark
