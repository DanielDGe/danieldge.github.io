import { useEffect, useState } from 'react'
import { navigationItems } from '../data/foundation'
import { scrollToSection } from '../utils/scrollToSection'
import Icon from './Icon'
import BrandMark from './BrandMark'

function Navigation({ activeSection, theme, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(() => globalThis.scrollY > 40)

  const handleSectionNavigation = (event, id) => {
    event.preventDefault()

    if (scrollToSection(id)) {
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    let scrollFrame = 0

    const handleResize = () => {
      if (globalThis.innerWidth > 900) {
        setIsMenuOpen(false)
      }
    }

    const handleScroll = () => {
      globalThis.cancelAnimationFrame(scrollFrame)
      scrollFrame = globalThis.requestAnimationFrame(() => {
        setIsScrolled(globalThis.scrollY > 40)
      })
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    globalThis.addEventListener('resize', handleResize)
    globalThis.addEventListener('scroll', handleScroll, { passive: true })
    globalThis.addEventListener('keydown', handleKeyDown)
    handleScroll()

    return () => {
      globalThis.cancelAnimationFrame(scrollFrame)
      globalThis.removeEventListener('resize', handleResize)
      globalThis.removeEventListener('scroll', handleScroll)
      globalThis.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <header className={'site-header' + (isScrolled ? ' site-header--scrolled' : '')}>
      <div className="site-header__inner">
        <a
          className="brand"
          href="#inicio"
          aria-label="Daniel García — Inicio"
          onClick={(event) => handleSectionNavigation(event, 'inicio')}
        >
          <BrandMark size={38} />
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
