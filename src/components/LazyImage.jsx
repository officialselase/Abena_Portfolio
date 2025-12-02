import { useState, useEffect, useRef } from 'react'

/**
 * LazyImage component for optimized image loading
 * Features:
 * - Lazy loading using Intersection Observer
 * - Responsive images with srcset support
 * - Loading placeholder
 * - Error handling
 * - Fade-in animation on load
 */
function LazyImage({ 
  src, 
  srcSet, 
  sizes, 
  alt, 
  className = '', 
  width, 
  height,
  loading = 'lazy',
  decoding = 'async',
  fetchpriority,
  onLoad,
  onError,
  placeholder = true,
  style = {}
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(loading === 'eager')
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    // Skip intersection observer for eager loading
    if (loading === 'eager') {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.01
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      if (observer) {
        observer.disconnect()
      }
    }
  }, [loading])

  const handleLoad = (e) => {
    setIsLoaded(true)
    if (onLoad) {
      onLoad(e)
    }
  }

  const handleError = (e) => {
    setHasError(true)
    if (onError) {
      onError(e)
    }
  }

  const imageStyle = {
    ...style,
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out'
  }

  const placeholderStyle = {
    backgroundColor: '#f0f0f0',
    minHeight: height ? `${height}px` : '200px',
    display: isLoaded ? 'none' : 'block'
  }

  return (
    <div ref={imgRef} className={`lazy-image-container ${className}`}>
      {placeholder && !isLoaded && !hasError && (
        <div style={placeholderStyle} className="image-placeholder" />
      )}
      
      {hasError && (
        <div style={placeholderStyle} className="image-error">
          <span>Failed to load image</span>
        </div>
      )}
      
      {isInView && !hasError && (
        <img
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          decoding={decoding}
          fetchpriority={fetchpriority}
          onLoad={handleLoad}
          onError={handleError}
          style={imageStyle}
          className={className}
        />
      )}
    </div>
  )
}

export default LazyImage
