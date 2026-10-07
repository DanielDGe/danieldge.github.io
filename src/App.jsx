import Navigation from './components/Navigation'
import ScrollProgress from './components/ScrollProgress'
import useActiveSection from './hooks/useActiveSection'
import useTheme from './hooks/useTheme'
import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'
import EducationSection from './sections/EducationSection'
import ExperienceSection from './sections/ExperienceSection'
import Footer from './sections/Footer'
import HeroSection from './sections/HeroSection'
import ProjectsSection from './sections/ProjectsSection'
import TechSection from './sections/TechSection'

const trackedSections = [
  'inicio',
  'sobre-mi',
  'experiencia',
  'tecnologias',
  'proyectos',
  'formacion',
  'contacto',
]

function App() {
  const { theme, toggleTheme } = useTheme()
  const activeSection = useActiveSection(trackedSections)

  return (
    <>
      <a className="skip-link" href="#contenido">Ir al contenido</a>
      <ScrollProgress />
      <Navigation activeSection={activeSection} theme={theme} onToggleTheme={toggleTheme} />

      <main id="contenido">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <TechSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}

export default App
