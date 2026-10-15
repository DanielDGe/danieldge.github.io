export function scrollToSection(id) {
  const target = globalThis.document.getElementById(id)

  if (!target) {
    return false
  }

  const header = globalThis.document.querySelector('.site-header')
  const headerHeight = header?.getBoundingClientRect().height ?? 76
  const sectionPaddingTop =
    Number.parseFloat(globalThis.getComputedStyle(target).paddingTop) || 0
  const desiredGap = 18

  const top =
    id === 'inicio'
      ? 0
      : target.getBoundingClientRect().top +
        globalThis.scrollY +
        sectionPaddingTop -
        headerHeight -
        desiredGap

  const prefersReducedMotion = globalThis.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches

  globalThis.scrollTo({
    top: Math.max(0, top),
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
  })

  globalThis.history.replaceState(null, '', '#' + id)
  return true
}
