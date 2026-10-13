import { useEffect } from 'react'

const revealSelector = [
  '.section-heading',
  '.about-statement',
  '.focus-card',
  '.timeline-item',
  '.tech-card',
  '.project-card',
  '.education-card',
  '.contact-card',
].join(', ')

function useRevealOnScroll() {
  useEffect(() => {
    const prefersReducedMotion = globalThis.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion || !('IntersectionObserver' in globalThis)) {
      return undefined
    }

    const elements = [...globalThis.document.querySelectorAll(revealSelector)]

    elements.forEach((element, index) => {
      element.classList.add('reveal-item')
      element.style.setProperty('--reveal-delay', (index % 4) * 55 + 'ms')
    })

    globalThis.document.documentElement.classList.add('reveal-enabled')

    const observer = new globalThis.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.08,
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
      globalThis.document.documentElement.classList.remove('reveal-enabled')
      elements.forEach((element) => {
        element.classList.remove('reveal-item', 'is-visible')
        element.style.removeProperty('--reveal-delay')
      })
    }
  }, [])
}

export default useRevealOnScroll
