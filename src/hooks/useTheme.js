import { useEffect, useState } from 'react'

const storageKey = 'daniel-portfolio-theme'

function getInitialTheme() {
  const savedTheme = globalThis.localStorage?.getItem(storageKey)

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme
  }

  return globalThis.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    globalThis.document.documentElement.dataset.theme = theme
    globalThis.document.documentElement.style.colorScheme = theme
    globalThis.localStorage?.setItem(storageKey, theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return { theme, toggleTheme }
}

export default useTheme
