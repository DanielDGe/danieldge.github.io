import { useEffect, useState } from 'react'
import { navigationItems } from '../data/foundation'
import Icon from './Icon'

function Navigation({ activeSection, theme, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleSectionNavigation = (event, id) => {
    event.preventDefault()

    const target = globalThis.document.getElementById(id)

    if (!target) {
      return
    }

    const headerOffset = 82
    const sectionLeadOffset = id === 'inicio' ? 0 : 24
    const top =
      target.getBoundingClientRect().top +
      globalThis.scrollY -
      headerOffset +
      sectionLeadOffset

    globalThis.scrollTo({
      top,
      behavior: 'smooth',
    })

    globalThis.history.replaceState(null, '', '#' + id)
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleResize = () => {
      if (globalThis.innerWidth > 900) {
        setIsMenuOpen(false)
      }
    }

    globalThis.addEventListener('resize', handleResize)
    return () => globalThis.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="#inicio" aria-label="Daniel García — Inicio">
          <span className="brand__mark" aria-hidden="true">DG</span>
          <span className="brand__text">
            <strong>Daniel García</strong>
            <small>Software Engineer</small>
          </span>
        </a>

        <nav
          id="mobile-navigation"
          className={'site-nav' + (isMenuOpen ? ' site-nav--open' : '')}
          aria-label="Navegación principal"
        >
          {navigationItems.map(({ id, label }) => (
            <a
              key={id}
              className={activeSection === id ? 'site-nav__link is-active' : 'site-nav__link'}
              href={'#' + id}
              onClick={(event) => handleSectionNavigation(event, id)}
              aria-current={activeSection === id ? 'location' : undefined}
            >
              {label}
            </a>
          ))}

          <a
            className="site-nav__contact"
            href="#contacto"
            onClick={(event) => handleSectionNavigation(event, 'contacto')}
          >
            Hablemos
            <Icon name="arrowUpRight" size={16} />
          </a>
        </nav>

        <div className="site-header__actions">
          <button
            className="icon-button"
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Activar tema claro' : 'Activar tema oscuro'}
            title={theme === 'dark' ? 'Tema claro' : 'Tema oscuro'}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
          </button>

          <button
            className="icon-button site-header__menu-button"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <Icon name={isMenuOpen ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navigation
