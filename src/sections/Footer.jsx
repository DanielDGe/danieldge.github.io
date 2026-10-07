function Footer() {
  return (
    <footer className="footer">
      <div className="content-shell footer__inner">
        <div>
          <strong>Daniel García</strong>
          <span>Software Engineer · Full-Stack Developer</span>
        </div>
        <p>Diseñado y construido con intención. <span>© {new Date().getFullYear()}</span></p>
      </div>
    </footer>
  )
}

export default Footer
