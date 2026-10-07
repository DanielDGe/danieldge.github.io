import FoundationStatus from './sections/FoundationStatus'

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Ir al contenido
      </a>

      <main id="main-content" className="app-shell">
        <FoundationStatus />
      </main>
    </>
  )
}

export default App
