import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      id: 1,
      category: "Operational Strategy",
      skills: [
        { name: "Process Optimization", level: 90, description: "Analyzing and improving operational workflows" },
        { name: "Strategic Planning", level: 85, description: "Developing long-term operational strategies" },
        { name: "Resource Allocation", level: 88, description: "Optimizing resource distribution and utilization" },
        { name: "Performance Metrics", level: 82, description: "Defining and tracking KPIs for operational success" },
        { name: "Change Management", level: 80, description: "Leading organizational transitions and improvements" },
        { name: "Risk Assessment", level: 78, description: "Identifying and mitigating operational risks" }
      ]
    },
    {
      id: 2,
      category: "Business Administration",
      skills: [
        { name: "Project Management", level: 92, description: "Planning, executing, and delivering projects on time" },
        { name: "Budget Management", level: 85, description: "Financial planning and cost control" },
        { name: "Data Analysis", level: 88, description: "Interpreting data to drive business decisions" },
        { name: "Stakeholder Communication", level: 90, description: "Managing relationships and expectations" },
        { name: "Documentation", level: 87, description: "Creating clear processes and procedures" },
        { name: "Compliance & Governance", level: 80, description: "Ensuring adherence to policies and regulations" }
      ]
    },
    {
      id: 3,
      category: "Virtual Assistance",
      skills: [
        { name: "Calendar Management", level: 95, description: "Scheduling and coordinating meetings efficiently" },
        { name: "Email Management", level: 93, description: "Organizing and prioritizing communications" },
        { name: "Research & Analysis", level: 88, description: "Gathering and synthesizing information" },
        { name: "Travel Coordination", level: 85, description: "Planning and managing business travel" },
        { name: "Digital Tools Proficiency", level: 90, description: "Expert in productivity and collaboration tools" },
        { name: "Task Prioritization", level: 92, description: "Managing multiple priorities effectively" }
      ]
    },
    {
      id: 4,
      category: "Management",
      skills: [
        { name: "Team Leadership", level: 85, description: "Motivating and guiding teams to success" },
        { name: "Conflict Resolution", level: 82, description: "Addressing and resolving team challenges" },
        { name: "Performance Management", level: 80, description: "Setting goals and providing feedback" },
        { name: "Delegation", level: 88, description: "Assigning tasks effectively based on strengths" },
        { name: "Training & Development", level: 83, description: "Coaching team members for growth" },
        { name: "Cross-functional Collaboration", level: 90, description: "Working across departments and teams" }
      ]
    }
  ]

  return (
    <div className="skills-page">
      <section className="header">
        <h1>Skills & Expertise</h1>
        <p className="subtitle">
          A comprehensive toolkit for operational excellence
        </p>
      </section>

      <section className="skills-content">
        {skillCategories.map((category) => (
          <div key={category.id} className="skill-category">
            <h2 className="category-title">{category.category}</h2>
            <div className="skills-grid">
              {category.skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <h3 className="skill-name">{skill.name}</h3>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="skill-description">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Skills
