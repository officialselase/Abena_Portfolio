import { useEffect, useRef, useState } from 'react'

/**
 * LazySection component that lazy loads content when it enters the viewport
 * Uses Intersection Observer API for efficient lazy loading
 */
function LazySection({ children, threshold = 0.1, rootMargin = '50px' }) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Once visible, stop observing
          observer.disconnect()
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (observer) {
        observer.disconnect()
      }
    }
  }, [threshold, rootMargin])

  return (
    <div ref={sectionRef}>
      {isVisible ? children : <div style={{ minHeight: '200px' }} />}
    </div>
  )
}

export default LazySection
