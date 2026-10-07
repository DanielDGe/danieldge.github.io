import { useEffect, useState } from 'react'

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollableHeight =
        globalThis.document.documentElement.scrollHeight - globalThis.innerHeight
      const nextProgress =
        scrollableHeight > 0 ? (globalThis.scrollY / scrollableHeight) * 100 : 0

      setProgress(Math.min(100, Math.max(0, nextProgress)))
    }

    updateProgress()
    globalThis.addEventListener('scroll', updateProgress, { passive: true })
    globalThis.addEventListener('resize', updateProgress)

    return () => {
      globalThis.removeEventListener('scroll', updateProgress)
      globalThis.removeEventListener('resize', updateProgress)
    }
  }, [])

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span style={{ transform: 'scaleX(' + progress / 100 + ')' }} />
    </div>
  )
}

export default ScrollProgress
