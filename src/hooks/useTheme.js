import { useEffect, useRef, useState } from 'react'

const storageKey = 'daniel-portfolio-theme'

function getInitialTheme() {
  const documentTheme = globalThis.document?.documentElement?.dataset?.theme

  if (documentTheme === 'light' || documentTheme === 'dark') {
    return documentTheme
  }

  const savedTheme = globalThis.localStorage?.getItem(storageKey)

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme
  }

  return globalThis.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)
  const transitionRef = useRef(null)

  useEffect(() => {
    globalThis.document.documentElement.dataset.theme = theme
    globalThis.document.documentElement.style.colorScheme = theme
    globalThis.localStorage?.setItem(storageKey, theme)
  }, [theme])

  useEffect(
    () => () => {
      if (transitionRef.current) {
        globalThis.clearTimeout(transitionRef.current)
      }
    },
    [],
  )

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    const root = globalThis.document.documentElement
    const prefersReducedMotion = globalThis.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const applyTheme = () => {
      root.dataset.theme = nextTheme
      root.style.colorScheme = nextTheme
      setTheme(nextTheme)
    }

    if (!prefersReducedMotion && typeof globalThis.document.startViewTransition === 'function') {
      globalThis.document.startViewTransition(applyTheme)
      return
    }

    if (!prefersReducedMotion) {
      root.classList.add('theme-transitioning')
      globalThis.clearTimeout(transitionRef.current)
      transitionRef.current = globalThis.setTimeout(() => {
        root.classList.remove('theme-transitioning')
      }, 460)
    }

    applyTheme()
  }

  return { theme, toggleTheme }
}

export default useTheme
