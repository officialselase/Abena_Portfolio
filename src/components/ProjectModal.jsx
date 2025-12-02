import { useEffect } from 'react'
import './ProjectModal.css'

function ProjectModal({ project, onClose }) {
  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden' // Prevent background scroll
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  // Close modal when clicking backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  // Extract metrics from impact text
  const extractMetrics = (impactText) => {
    const metrics = []
    const percentageRegex = /(?:by |improved |increased |reduced |enhanced )?(\d+)%/gi
    const matches = [...impactText.matchAll(percentageRegex)]
    
    matches.forEach((match, index) => {
      const value = parseInt(match[1])
      const startPos = Math.max(0, match.index - 60)
      const endPos = Math.min(impactText.length, match.index + match[0].length + 40)
      const contextText = impactText.substring(startPos, endPos).trim()
      
      const words = contextText.split(' ')
      const matchIndex = words.findIndex(w => w.includes(match[0]))
      const label = words.slice(Math.max(0, matchIndex - 3), matchIndex).join(' ')
      
      metrics.push({ 
        value, 
        label: label || `Metric ${index + 1}`,
        fullContext: contextText 
      })
    })
    
    return metrics
  }

  const metrics = extractMetrics(project.impact)

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button 
          className="btn btn-close modal-close" 
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="modal-header">
          <div className="modal-visual">{project.visual}</div>
          <div className="modal-header-text">
            <h2 id="modal-title" className="modal-title">{project.title}</h2>
            <span className="modal-category">{project.category}</span>
          </div>
        </div>

        {/* Key Metrics Highlight */}
        {metrics.length > 0 && (
          <div className="modal-metrics-highlight">
            <h3 className="metrics-highlight-title">Key Results</h3>
            <div className="metrics-grid">
              {metrics.map((metric, index) => (
                <div key={index} className="metric-card">
                  <div className="metric-card-value">{metric.value}%</div>
                  <div className="metric-card-label">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="modal-body">
          <section className="modal-section problem-section">
            <div className="section-header">
              <span className="section-icon">⚠️</span>
              <h3>The Challenge</h3>
            </div>
            <p className="section-content">{project.problem}</p>
          </section>

          <section className="modal-section solution-section">
            <div className="section-header">
              <span className="section-icon">💡</span>
              <h3>The Solution</h3>
            </div>
            <p className="section-content">{project.solution}</p>
          </section>

          <section className="modal-section impact-section">
            <div className="section-header">
              <span className="section-icon">📈</span>
              <h3>Impact & Results</h3>
            </div>
            <p className="section-content">{project.impact}</p>
            
            {/* Detailed metrics visualization */}
            {metrics.length > 0 && (
              <div className="modal-metrics-visualization">
                <h4 className="metrics-viz-title">Detailed Improvements</h4>
                {metrics.map((metric, index) => (
                  <div key={index} className="modal-metric-bar">
                    <div className="modal-metric-bar-header">
                      <span className="modal-metric-label">{metric.value}%</span>
                      <span className="modal-metric-description">{metric.label}</span>
                    </div>
                    <div className="modal-metric-bar-container">
                      <div 
                        className="modal-metric-bar-fill" 
                        style={{ width: `${Math.min(metric.value, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
