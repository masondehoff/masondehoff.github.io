function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2
}

export function scrollToSection(id: string) {
  const target = document.getElementById(id)
  if (!target) return

  const scrollMarginTop = parseFloat(getComputedStyle(target).scrollMarginTop) || 0
  const targetY = target.getBoundingClientRect().top + window.scrollY - scrollMarginTop

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion) {
    window.scrollTo(0, targetY)
    return
  }

  const startY = window.scrollY
  const distance = targetY - startY
  const duration = 500
  const startTime = performance.now()

  function step(now: number) {
    const t = Math.min(1, (now - startTime) / duration)
    window.scrollTo(0, startY + distance * easeInOutCubic(t))
    if (t < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}
