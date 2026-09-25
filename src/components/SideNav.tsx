import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { NAV_LINKS } from '../data/navigation'
import { useActiveSection } from '../hooks/useActiveSection'
import { scrollToSection } from '../lib/scrollToSection'

const IDS = NAV_LINKS.map((link) => link.id)

export default function SideNav() {
  const activeId = useActiveSection(IDS)
  const { scrollY } = useScroll()

  const railRef = useRef<HTMLUListElement>(null)
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([])
  const [dotPositions, setDotPositions] = useState<number[]>([])
  const [scrollBreakpoints, setScrollBreakpoints] = useState<number[]>([])

  useEffect(() => {
    function measure() {
      const railTop = railRef.current?.getBoundingClientRect().top ?? 0
      setDotPositions(
        dotRefs.current.map((el) => {
          if (!el) return 0
          const rect = el.getBoundingClientRect()
          return rect.top + rect.height / 2 - railTop
        }),
      )
      setScrollBreakpoints(
        IDS.map((id) => {
          const el = document.getElementById(id)
          if (!el) return 0
          return el.getBoundingClientRect().top + window.scrollY
        }),
      )
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const canTrack = scrollBreakpoints.length >= 2 && dotPositions.length >= 2
  const travelerY = useTransform(
    scrollY,
    canTrack ? scrollBreakpoints : [0, 1],
    canTrack ? dotPositions : [0, 0],
    { clamp: true },
  )

  return (
    <nav aria-label="Section navigation" className="fixed top-1/2 right-6 z-40 hidden -translate-y-1/2 md:block lg:right-10">
      <ul ref={railRef} className="relative flex flex-col items-center">
        <AnimatePresence>
          {activeId && canTrack && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ top: travelerY }}
              className="pointer-events-none absolute left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_10px_rgba(94,106,210,0.7)]"
            />
          )}
        </AnimatePresence>

        {NAV_LINKS.map((link, index) => {
          const isActive = activeId === link.id
          return (
            <li key={link.id} className="flex flex-col items-center">
              <button
                type="button"
                onClick={() => scrollToSection(link.id)}
                aria-label={link.label}
                aria-current={isActive ? 'true' : undefined}
                className="group relative flex h-6 w-6 items-center justify-center"
              >
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      initial={{ opacity: 0, x: 6 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 6 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="label-mono absolute right-full mr-3 text-xs whitespace-nowrap text-accent"
                    >
                      {link.label}
                    </motion.span>
                  )}
                </AnimatePresence>
                <span
                  ref={(el) => {
                    dotRefs.current[index] = el
                  }}
                  className={`block rounded-full transition-all duration-300 ${
                    isActive ? 'h-2 w-2 bg-accent' : 'h-1.5 w-1.5 bg-border group-hover:bg-muted'
                  }`}
                />
              </button>
              {index < NAV_LINKS.length - 1 && <span className="h-6 w-px bg-border" />}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
