import { useEffect } from 'react'

function useMotionDelight() {
  useEffect(() => {
    const reducedMotion = globalThis.matchMedia('(prefers-reduced-motion: reduce)')
    const finePointer = globalThis.matchMedia('(pointer: fine)')

    if (reducedMotion.matches || !finePointer.matches) {
      return undefined
    }

    const hero = globalThis.document.querySelector('.hero-visual')
    const projectCards = [...globalThis.document.querySelectorAll('.project-card')]
    const cleanup = []
    let heroFrame = 0

    if (hero) {
      const floatingNodes = [...hero.querySelectorAll('.floating-node')]

      const resetHero = () => {
        globalThis.cancelAnimationFrame(heroFrame)
        hero.style.setProperty('--hero-shift-x', '0px')
        hero.style.setProperty('--hero-shift-y', '0px')
        hero.style.setProperty('--hero-tilt-x', '0deg')
        hero.style.setProperty('--hero-tilt-y', '0deg')
        floatingNodes.forEach((node) => {
          node.style.translate = '0px 0px'
        })
      }

      const handleHeroPointer = (event) => {
        const bounds = hero.getBoundingClientRect()
        const x = (event.clientX - bounds.left) / bounds.width - 0.5
        const y = (event.clientY - bounds.top) / bounds.height - 0.5

        globalThis.cancelAnimationFrame(heroFrame)
        heroFrame = globalThis.requestAnimationFrame(() => {
          hero.style.setProperty('--hero-shift-x', (x * 10).toFixed(2) + 'px')
          hero.style.setProperty('--hero-shift-y', (y * 8).toFixed(2) + 'px')
          hero.style.setProperty('--hero-tilt-x', (-y * 1.8).toFixed(2) + 'deg')
          hero.style.setProperty('--hero-tilt-y', (x * 2.8).toFixed(2) + 'deg')

          const factors = [0.65, -0.42, 0.82]

          floatingNodes.forEach((node, index) => {
            const factor = factors[index] ?? 0.55
            node.style.translate =
              (x * 14 * factor).toFixed(2) + 'px ' +
              (y * 11 * factor).toFixed(2) + 'px'
          })
        })
      }

      hero.addEventListener('pointermove', handleHeroPointer)
      hero.addEventListener('pointerleave', resetHero)

      cleanup.push(() => {
        hero.removeEventListener('pointermove', handleHeroPointer)
        hero.removeEventListener('pointerleave', resetHero)
        resetHero()
      })
    }

    projectCards.forEach((card) => {
      const handlePointer = (event) => {
        const bounds = card.getBoundingClientRect()
        const x = ((event.clientX - bounds.left) / bounds.width) * 100
        const y = ((event.clientY - bounds.top) / bounds.height) * 100

        card.style.setProperty('--glow-x', x.toFixed(1) + '%')
        card.style.setProperty('--glow-y', y.toFixed(1) + '%')
      }

      const resetGlow = () => {
        card.style.setProperty('--glow-x', '50%')
        card.style.setProperty('--glow-y', '50%')
      }

      card.addEventListener('pointermove', handlePointer)
      card.addEventListener('pointerleave', resetGlow)

      cleanup.push(() => {
        card.removeEventListener('pointermove', handlePointer)
        card.removeEventListener('pointerleave', resetGlow)
        resetGlow()
      })
    })

    return () => {
      globalThis.cancelAnimationFrame(heroFrame)
      cleanup.forEach((dispose) => dispose())
    }
  }, [])
}

export default useMotionDelight
