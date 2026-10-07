function StatusBadge({ children }) {
  return (
    <span className="status-badge" role="status">
      <span className="status-badge__dot" aria-hidden="true" />
      {children}
    </span>
  )
}

export default StatusBadge
