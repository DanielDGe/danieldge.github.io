import { useEffect, useState } from 'react'

function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const sections = sectionIds
      .map((id) => globalThis.document.getElementById(id))
      .filter(Boolean)

    if (!sections.length || !globalThis.IntersectionObserver) {
      return undefined
    }

    const observer = new globalThis.IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries[0]?.target?.id) {
          setActiveSection(visibleEntries[0].target.id)
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0, 0.2, 0.45, 0.7],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [sectionIds])

  return activeSection
}

export default useActiveSection
