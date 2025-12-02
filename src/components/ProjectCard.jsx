import './ProjectCard.css'

function ProjectCard({ project, onViewDetails }) {
  // Extract metrics from impact text with better context
  const extractMetrics = (impactText) => {
    const metrics = []
    
    // Match percentages with context
    const percentageRegex = /(?:by |improved |increased |reduced |enhanced )?(\d+)%/gi
    const matches = [...impactText.matchAll(percentageRegex)]
    
    matches.forEach((match, index) => {
      const value = parseInt(match[1])
      // Get surrounding text for context
      const startPos = Math.max(0, match.index - 60)
      const endPos = Math.min(impactText.length, match.index + match[0].length + 40)
      const contextText = impactText.substring(startPos, endPos).trim()
      
      // Extract a short label from the context
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
    <div className="project-card">
      <div className="project-header-visual">
        <div className="project-visual">{project.visual}</div>
        <div className="project-category">{project.category}</div>
      </div>
      
      <h2 className="project-title">{project.title}</h2>
      
      {/* Key Metrics Summary */}
      {metrics.length > 0 && (
        <div className="metrics-summary">
          {metrics.map((metric, index) => (
            <div key={index} className="metric-badge">
              <div className="metric-value">{metric.value}%</div>
              <div className="metric-icon">📊</div>
            </div>
          ))}
        </div>
      )}
      
      <div className="project-section problem">
        <div className="section-header">
          <span className="section-icon">⚠️</span>
          <h3>Problem</h3>
        </div>
        <p>{project.problem}</p>
      </div>

      <div className="project-section solution">
        <div className="section-header">
          <span className="section-icon">💡</span>
          <h3>Solution</h3>
        </div>
        <p>{project.solution}</p>
      </div>

      <div className="project-section impact">
        <div className="section-header">
          <span className="section-icon">📈</span>
          <h3>Impact & Results</h3>
        </div>
        <p>{project.impact}</p>
        
        {/* Detailed metrics visualization */}
        {metrics.length > 0 && (
          <div className="metrics-visualization">
            <h4 className="metrics-title">Key Improvements</h4>
            {metrics.map((metric, index) => (
              <div key={index} className="metric-bar">
                <div className="metric-bar-header">
                  <span className="metric-label">{metric.value}%</span>
                  <span className="metric-description">{metric.label}</span>
                </div>
                <div className="metric-bar-container">
                  <div 
                    className="metric-bar-fill" 
                    style={{ width: `${Math.min(metric.value, 100)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <button 
        className="btn btn-gradient btn-full view-details-btn"
        onClick={() => onViewDetails(project)}
        aria-label={`View details for ${project.title}`}
      >
        View Full Details
      </button>
    </div>
  )
}

export default ProjectCard
