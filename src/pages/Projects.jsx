import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import './Projects.css'

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Process Optimization Initiative",
      category: "Operational Strategy",
      problem: "Company was experiencing delays in project delivery and resource allocation inefficiencies, leading to missed deadlines and frustrated stakeholders",
      solution: "Led cross-functional team to analyze and redesign core operational workflows. Implemented new project management framework with automated tracking and resource allocation tools",
      impact: "Reduced project delivery time by 30%, improved resource utilization by 25%, and increased team satisfaction scores by 40%",
      visual: "📊",
      icon: "chart-line",
      image: null // Placeholder for future images
    },
    {
      id: 2,
      title: "Virtual Team Coordination System",
      category: "Virtual Assistance",
      problem: "Remote team struggled with communication gaps and task visibility, resulting in duplicated work and missed deadlines",
      solution: "Designed and implemented comprehensive virtual coordination system. Created centralized communication hub with integrated task management, daily standups, and progress tracking",
      impact: "Improved team communication efficiency by 50%, reduced missed deadlines by 60%, and enhanced remote collaboration",
      visual: "💻",
      icon: "network",
      image: null
    },
    {
      id: 3,
      title: "Budget Management Overhaul",
      category: "Business Administration",
      problem: "Department faced budget overruns and lack of spending visibility, creating financial risk and limiting strategic planning capabilities",
      solution: "Developed new budget tracking and approval system. Implemented digital budget management tool with real-time tracking, approval workflows, and automated reporting",
      impact: "Eliminated budget overruns, reduced approval time by 45%, and provided 100% spending visibility to stakeholders",
      visual: "💰",
      icon: "dollar-sign",
      image: null
    },
    {
      id: 4,
      title: "Onboarding Process Redesign",
      category: "Management",
      problem: "New employee onboarding was inconsistent and time-consuming, leading to delayed productivity and variable new hire experiences",
      solution: "Redesigned end-to-end onboarding experience. Created structured onboarding program with checklists, automated workflows, and mentorship pairing",
      impact: "Reduced onboarding time from 4 weeks to 2 weeks, improved new hire satisfaction by 35%, and standardized process across organization",
      visual: "🎯",
      icon: "target",
      image: null
    },
    {
      id: 5,
      title: "Executive Calendar & Meeting Optimization",
      category: "Virtual Assistance",
      problem: "Executive team struggled with meeting overload and inefficient time management, reducing strategic focus time and decision-making quality",
      solution: "Implemented comprehensive calendar management and meeting optimization strategy. Developed priority-based scheduling system, established meeting protocols, and created automated agenda templates with pre-meeting briefs",
      impact: "Reduced executive meeting time by 40%, increased focus time by 8 hours per week, and improved meeting productivity scores by 55%",
      visual: "📅",
      icon: "calendar",
      image: null
    }
  ]

  // Extract unique categories from projects
  const categories = ['All', ...new Set(projects.map(p => p.category))]

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="projects-page">
      <section className="header">
        <h1>Projects & Case Studies</h1>
        <p className="subtitle">
          Demonstrating operational strategy through real-world impact
        </p>
        <div className="visual-legend">
          <span className="legend-item">📊 Charts show quantifiable results</span>
          <span className="legend-item">🎯 Icons represent project focus</span>
        </div>
      </section>

      <section className="filter-section">
        <div className="filter-label">Filter by category:</div>
        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`btn btn-filter ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
              aria-pressed={activeFilter === category}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="filter-count">
          Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
        </div>
      </section>

      <section className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project}
            onViewDetails={setSelectedProject}
          />
        ))}
      </section>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}

export default Projects
