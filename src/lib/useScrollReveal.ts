'use client'

import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => {
        el.classList.add('visible')
      })
      return
    }

    const revealElement = (el: Element) => {
      el.classList.add('visible')
    }

    // Check elements in viewport using getBoundingClientRect
    const checkViewportElements = () => {
      const windowHeight = window.innerHeight || document.documentElement.clientHeight
      const targets = document.querySelectorAll<HTMLElement>(
        '.reveal:not(.visible), .reveal-stagger:not(.visible)'
      )

      targets.forEach((el) => {
        const rect = el.getBoundingClientRect()
        // If top of element is near or inside viewport
        if (rect.top <= windowHeight - 30 && rect.bottom >= 0) {
          revealElement(el)
        }
      })
    }

    // Modern IntersectionObserver with generous rootMargin
    let observer: IntersectionObserver | null = null
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              revealElement(entry.target)
              observer?.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.01, rootMargin: '0px 0px 80px 0px' }
      )
    }

    const observeTargets = () => {
      const windowHeight = window.innerHeight || document.documentElement.clientHeight
      const targets = document.querySelectorAll<HTMLElement>(
        '.reveal:not(.visible), .reveal-stagger:not(.visible)'
      )

      targets.forEach((el) => {
        const rect = el.getBoundingClientRect()
        // If already visible on initial mount, reveal immediately!
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          revealElement(el)
        } else if (observer) {
          observer.observe(el)
        }
      })
    }

    // Initial pass immediately and after render frames
    observeTargets()
    const t1 = setTimeout(observeTargets, 60)
    const t2 = setTimeout(observeTargets, 250)

    // Scroll & resize fallback listeners
    window.addEventListener('scroll', checkViewportElements, { passive: true })
    window.addEventListener('resize', checkViewportElements, { passive: true })

    // Safety fallback: Reveal all elements after 1.2s to GUARANTEE content is never blocked
    const safetyTimer = setTimeout(() => {
      document
        .querySelectorAll('.reveal:not(.visible), .reveal-stagger:not(.visible)')
        .forEach((el) => {
          el.classList.add('visible')
        })
    }, 1200)

    // MutationObserver to catch any late React hydration or dynamically added components
    const mutationObserver = new MutationObserver(() => {
      observeTargets()
    })
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(safetyTimer)
      observer?.disconnect()
      mutationObserver.disconnect()
      window.removeEventListener('scroll', checkViewportElements)
      window.removeEventListener('resize', checkViewportElements)
    }
  }, [])

  return null
}

