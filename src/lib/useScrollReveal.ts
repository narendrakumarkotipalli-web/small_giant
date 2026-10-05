'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Lightweight IntersectionObserver-based scroll reveal.
 * Adds/removes the 'visible' class on observed elements
 * that carry 'reveal' or 'reveal-stagger' class.
 */
export function useScrollReveal() {
  const ref = useRef<HTMLElement | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    // Small delay to allow Next.js to render new page DOM
    const timer = setTimeout(() => {
      const targets = document.querySelectorAll('.reveal, .reveal-stagger')
      if (!targets.length) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      )

      targets.forEach(el => observer.observe(el))
    }, 100)
    
    return () => clearTimeout(timer)
  }, [pathname])

  return ref
}
