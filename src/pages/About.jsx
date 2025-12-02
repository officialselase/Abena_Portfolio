import './About.css'

function About() {
  return (
    <div className="about-page">
      <section className="intro">
        <h1>About Me</h1>
        <p className="lead">
          Passionate about transforming operational challenges into strategic opportunities
        </p>
      </section>

      <section className="story">
        <h2>My Professional Journey</h2>
        <div className="story-content">
          <div className="story-paragraph">
            <h3>The Challenge</h3>
            <p>
              Early in my career, I witnessed firsthand how even well-intentioned organizations 
              struggle with operational inefficiencies—disconnected processes, unclear workflows, 
              and missed opportunities for optimization. I realized that the gap between strategic 
              vision and operational execution was where many businesses lost momentum and resources.
            </p>
          </div>
          
          <div className="story-paragraph">
            <h3>The Growth</h3>
            <p>
              This realization sparked my passion for operational strategy. Through my Business 
              Administration education and hands-on management experience at university, I developed 
              a systematic approach to identifying bottlenecks, streamlining processes, and aligning 
              operations with strategic goals. I learned that effective operations aren't just about 
              efficiency—they're about creating systems that empower teams and drive measurable results.
            </p>
            <p>
              My management roles taught me the critical importance of clear communication, 
              stakeholder alignment, and data-driven decision-making. I discovered that the best 
              solutions often come from deeply understanding the people and processes involved, 
              then designing systems that work with—not against—how teams naturally operate.
            </p>
          </div>
          
          <div className="story-paragraph">
            <h3>Current Focus</h3>
            <p>
              Today, I bring this comprehensive operational mindset to every project I undertake. 
              Whether I'm optimizing workflows, coordinating complex projects, or providing strategic 
              virtual assistance, my goal is the same: transform operational challenges into competitive 
              advantages. I combine analytical rigor with practical execution, ensuring that strategies 
              don't just look good on paper—they deliver real, measurable impact.
            </p>
            <p>
              I'm particularly excited about opportunities where I can leverage my unique blend of 
              strategic thinking and hands-on execution to help organizations scale efficiently, 
              improve their operations, and achieve their most ambitious goals.
            </p>
          </div>
        </div>
      </section>

      <section className="education">
        <h2>Education</h2>
        <div className="education-item">
          <div className="degree-header">
            <h3>Bachelor of Business Administration</h3>
            <p className="graduation-year">2020 - 2024</p>
          </div>
          <p className="institution">University of Excellence</p>
          
          <div className="education-details">
            <div className="focus-area">
              <h4>Concentration</h4>
              <p>Operational Management & Strategic Planning</p>
            </div>
            
            <div className="coursework">
              <h4>Relevant Coursework</h4>
              <ul>
                <li>Operations Management & Process Optimization</li>
                <li>Strategic Business Planning & Analysis</li>
                <li>Organizational Behavior & Leadership</li>
                <li>Project Management & Execution</li>
                <li>Business Analytics & Data-Driven Decision Making</li>
                <li>Supply Chain & Logistics Management</li>
              </ul>
            </div>
            
            <div className="achievements">
              <h4>Academic Achievements</h4>
              <ul>
                <li>Dean's List for Academic Excellence (3 consecutive semesters)</li>
                <li>Led capstone project on operational efficiency improvement, achieving 25% cost reduction in simulated business scenario</li>
                <li>Completed advanced certification in Business Process Management</li>
                <li>Active member of Business Strategy Club and Operations Management Society</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="management-background">
        <h2>Management Experience</h2>
        <div className="management-content">
          <p className="management-intro">
            During my time at university, I gained valuable hands-on management experience through 
            leadership roles in student organizations and collaborative projects. These experiences 
            taught me the importance of clear communication, team coordination, and strategic 
            decision-making in real-world contexts.
          </p>
          
          <div className="management-roles">
            <div className="management-role">
              <h3>Student Organization Leadership</h3>
              <p className="role-title">Vice President, Business Strategy Club</p>
              <p className="role-period">2022 - 2024</p>
              <ul className="role-achievements">
                <li>Led a team of 15+ members in organizing monthly workshops and networking events</li>
                <li>Coordinated with faculty and industry professionals to deliver 12+ educational sessions</li>
                <li>Managed annual budget of $5,000, ensuring efficient resource allocation</li>
                <li>Increased club membership by 40% through strategic outreach initiatives</li>
                <li>Developed and implemented new onboarding process that improved member retention by 30%</li>
              </ul>
            </div>
            
            <div className="management-role">
              <h3>Academic Project Management</h3>
              <p className="role-title">Team Lead, Capstone Project</p>
              <p className="role-period">2023 - 2024</p>
              <ul className="role-achievements">
                <li>Managed cross-functional team of 6 students through 8-month strategic consulting project</li>
                <li>Coordinated project timeline, deliverables, and stakeholder communications</li>
                <li>Facilitated weekly team meetings and maintained project documentation</li>
                <li>Delivered comprehensive operational efficiency analysis that identified 25% cost reduction opportunities</li>
                <li>Presented findings to faculty panel and received highest project grade in cohort</li>
              </ul>
            </div>
            
            <div className="management-role">
              <h3>Peer Mentorship & Training</h3>
              <p className="role-title">Peer Mentor, Business Administration Program</p>
              <p className="role-period">2021 - 2023</p>
              <ul className="role-achievements">
                <li>Mentored 20+ incoming students on academic planning and career development</li>
                <li>Organized and facilitated orientation sessions for new students each semester</li>
                <li>Developed resource guides and study materials to support student success</li>
                <li>Collaborated with faculty to identify and address common student challenges</li>
                <li>Maintained 95% mentee satisfaction rating across two academic years</li>
              </ul>
            </div>
          </div>
          
          <div className="management-skills">
            <h3>Key Management Skills Developed</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <span className="skill-icon">👥</span>
                <span className="skill-name">Team Leadership</span>
              </div>
              <div className="skill-item">
                <span className="skill-icon">📊</span>
                <span className="skill-name">Project Coordination</span>
              </div>
              <div className="skill-item">
                <span className="skill-icon">💬</span>
                <span className="skill-name">Stakeholder Communication</span>
              </div>
              <div className="skill-item">
                <span className="skill-icon">📅</span>
                <span className="skill-name">Resource Planning</span>
              </div>
              <div className="skill-item">
                <span className="skill-icon">🎯</span>
                <span className="skill-name">Goal Setting & Execution</span>
              </div>
              <div className="skill-item">
                <span className="skill-icon">🔄</span>
                <span className="skill-name">Process Improvement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="virtual-assistance">
        <h2>Virtual Assistanship Capabilities</h2>
        <p className="va-intro">
          I bring a unique combination of strategic thinking and practical execution to virtual 
          assistance roles. My operational strategy background enables me to not just complete tasks, 
          but to optimize workflows and add strategic value to every engagement.
        </p>
        
        <div className="va-capabilities">
          <div className="va-category">
            <h3>
              <span className="va-icon">📋</span>
              Executive & Administrative Support
            </h3>
            <ul>
              <li>Calendar management and meeting coordination across multiple time zones</li>
              <li>Email management, inbox organization, and priority filtering</li>
              <li>Travel planning and itinerary management</li>
              <li>Document preparation, formatting, and presentation creation</li>
              <li>Expense tracking and report generation</li>
            </ul>
          </div>
          
          <div className="va-category">
            <h3>
              <span className="va-icon">🎯</span>
              Project & Operations Management
            </h3>
            <ul>
              <li>Project coordination and timeline management</li>
              <li>Task delegation and progress tracking</li>
              <li>Process documentation and standard operating procedures (SOPs)</li>
              <li>Workflow optimization and efficiency improvements</li>
              <li>Team coordination and stakeholder communication</li>
            </ul>
          </div>
          
          <div className="va-category">
            <h3>
              <span className="va-icon">🔍</span>
              Research & Analysis
            </h3>
            <ul>
              <li>Market research and competitive analysis</li>
              <li>Data collection, organization, and reporting</li>
              <li>Vendor research and comparison</li>
              <li>Industry trends and best practices research</li>
              <li>Information synthesis and executive summaries</li>
            </ul>
          </div>
          
          <div className="va-category">
            <h3>
              <span className="va-icon">💻</span>
              Digital Tools & Technology
            </h3>
            <ul>
              <li>Microsoft Office Suite (Word, Excel, PowerPoint, Outlook)</li>
              <li>Google Workspace (Docs, Sheets, Slides, Calendar, Drive)</li>
              <li>Project management tools (Asana, Trello, Monday.com, ClickUp)</li>
              <li>Communication platforms (Slack, Microsoft Teams, Zoom)</li>
              <li>CRM systems and database management</li>
              <li>Basic automation and workflow tools (Zapier, IFTTT)</li>
            </ul>
          </div>
          
          <div className="va-category">
            <h3>
              <span className="va-icon">✉️</span>
              Communication & Coordination
            </h3>
            <ul>
              <li>Professional correspondence and email drafting</li>
              <li>Meeting scheduling and agenda preparation</li>
              <li>Client and vendor communication management</li>
              <li>Internal team coordination and updates</li>
              <li>Follow-up management and relationship maintenance</li>
            </ul>
          </div>
        </div>
        
        <div className="va-value-proposition">
          <h3>What Sets Me Apart</h3>
          <p>
            Unlike traditional virtual assistants who focus solely on task completion, I bring an 
            operational strategist's mindset to every engagement. I don't just execute—I identify 
            opportunities for improvement, suggest process optimizations, and proactively solve 
            problems before they escalate. My goal is to become a trusted partner who not only 
            lightens your workload but also enhances your operational efficiency.
          </p>
        </div>
      </section>

      <section className="skills-overview">
        <h2>Core Competencies</h2>
        <p className="skills-intro">
          My diverse skill set combines strategic thinking with hands-on execution, enabling me to 
          drive operational excellence and deliver measurable business results.
        </p>
        
        <div className="skills-categories">
          <div className="skill-category">
            <h3>
              <span className="category-icon">🎯</span>
              Operational Strategy
            </h3>
            <ul className="skills-list">
              <li>Process optimization and workflow design</li>
              <li>Strategic planning and execution</li>
              <li>Performance metrics and KPI development</li>
              <li>Resource allocation and capacity planning</li>
              <li>Change management and implementation</li>
              <li>Continuous improvement methodologies</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>
              <span className="category-icon">💼</span>
              Business Administration
            </h3>
            <ul className="skills-list">
              <li>Business analysis and requirements gathering</li>
              <li>Financial planning and budget management</li>
              <li>Stakeholder management and communication</li>
              <li>Risk assessment and mitigation</li>
              <li>Policy development and compliance</li>
              <li>Organizational development</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>
              <span className="category-icon">🤝</span>
              Management & Leadership
            </h3>
            <ul className="skills-list">
              <li>Team leadership and development</li>
              <li>Project coordination and delivery</li>
              <li>Cross-functional collaboration</li>
              <li>Conflict resolution and negotiation</li>
              <li>Performance management and coaching</li>
              <li>Meeting facilitation and decision-making</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>
              <span className="category-icon">⚡</span>
              Virtual Assistance & Tools
            </h3>
            <ul className="skills-list">
              <li>Executive administrative support</li>
              <li>Calendar and email management</li>
              <li>Document creation and management</li>
              <li>Research and data organization</li>
              <li>CRM and project management software</li>
              <li>Process automation and efficiency tools</li>
            </ul>
          </div>
        </div>
        
        <div className="key-strengths">
          <h3>Key Strengths</h3>
          <div className="strengths-grid">
            <div className="strength-item">
              <span className="strength-icon">📊</span>
              <div className="strength-content">
                <h4>Data-Driven Decision Making</h4>
                <p>Leveraging analytics and metrics to inform strategic choices and measure impact</p>
              </div>
            </div>
            <div className="strength-item">
              <span className="strength-icon">🔄</span>
              <div className="strength-content">
                <h4>Process Excellence</h4>
                <p>Identifying inefficiencies and implementing streamlined workflows that save time and resources</p>
              </div>
            </div>
            <div className="strength-item">
              <span className="strength-icon">💡</span>
              <div className="strength-content">
                <h4>Strategic Problem Solving</h4>
                <p>Combining analytical thinking with creative solutions to overcome complex operational challenges</p>
              </div>
            </div>
            <div className="strength-item">
              <span className="strength-icon">🎓</span>
              <div className="strength-content">
                <h4>Continuous Learning</h4>
                <p>Staying current with industry best practices and emerging tools to deliver cutting-edge solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="personality">
        <h2>Values, Approach & Interests</h2>
        <p className="personality-intro">
          Beyond my professional skills, I believe that who you are shapes how you work. Here's what 
          drives me and how I approach challenges both in and outside of work.
        </p>
        
        <div className="personality-content">
          <div className="personality-category">
            <div className="personality-header">
              <span className="personality-icon">💎</span>
              <h3>Core Values</h3>
            </div>
            <div className="values-grid">
              <div className="value-item">
                <h4>Excellence Through Iteration</h4>
                <p>
                  I believe that great results come from continuous improvement, not perfection on 
                  the first try. I embrace feedback, learn from mistakes, and constantly refine my 
                  approach to deliver better outcomes.
                </p>
              </div>
              <div className="value-item">
                <h4>Integrity & Transparency</h4>
                <p>
                  Honest communication builds trust. I believe in being upfront about challenges, 
                  setting realistic expectations, and following through on commitments. When I don't 
                  know something, I say so—and then I figure it out.
                </p>
              </div>
              <div className="value-item">
                <h4>Impact Over Activity</h4>
                <p>
                  Being busy isn't the same as being effective. I focus on work that creates real 
                  value and measurable results. I'd rather complete three high-impact tasks than 
                  ten low-value ones.
                </p>
              </div>
              <div className="value-item">
                <h4>Collaborative Success</h4>
                <p>
                  The best solutions emerge from diverse perspectives. I value collaboration, 
                  actively seek input from others, and believe that lifting others up creates 
                  stronger teams and better outcomes for everyone.
                </p>
              </div>
            </div>
          </div>
          
          <div className="personality-category">
            <div className="personality-header">
              <span className="personality-icon">🎯</span>
              <h3>My Approach to Work</h3>
            </div>
            <div className="approach-content">
              <div className="approach-item">
                <div className="approach-number">1</div>
                <div className="approach-text">
                  <h4>Understand Before Acting</h4>
                  <p>
                    I start every project by asking questions and listening carefully. Understanding 
                    the context, constraints, and desired outcomes ensures I'm solving the right 
                    problem, not just the obvious one.
                  </p>
                </div>
              </div>
              <div className="approach-item">
                <div className="approach-number">2</div>
                <div className="approach-text">
                  <h4>Data Informs, Judgment Decides</h4>
                  <p>
                    I rely on data and metrics to guide decisions, but I recognize that numbers don't 
                    tell the whole story. I combine analytical insights with practical judgment and 
                    human factors to make well-rounded decisions.
                  </p>
                </div>
              </div>
              <div className="approach-item">
                <div className="approach-number">3</div>
                <div className="approach-text">
                  <h4>Proactive Problem-Solving</h4>
                  <p>
                    I don't wait for problems to escalate. I anticipate potential issues, flag them 
                    early, and come prepared with solutions or alternatives. I take ownership and 
                    follow through until resolution.
                  </p>
                </div>
              </div>
              <div className="approach-item">
                <div className="approach-number">4</div>
                <div className="approach-text">
                  <h4>Simplify, Then Optimize</h4>
                  <p>
                    Complex solutions often create more problems than they solve. I look for the 
                    simplest approach that meets the need, then refine and optimize based on real 
                    feedback and results.
                  </p>
                </div>
              </div>
              <div className="approach-item">
                <div className="approach-number">5</div>
                <div className="approach-text">
                  <h4>Communicate Clearly & Often</h4>
                  <p>
                    I believe in over-communication rather than under-communication. I provide regular 
                    updates, ask clarifying questions, and ensure everyone has the information they 
                    need to succeed.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="personality-category">
            <div className="personality-header">
              <span className="personality-icon">✨</span>
              <h3>Beyond Work</h3>
            </div>
            <div className="interests-content">
              <p className="interests-intro">
                I believe that diverse interests make us better professionals. Here's what I'm 
                passionate about outside of work:
              </p>
              <div className="interests-grid">
                <div className="interest-item">
                  <span className="interest-icon">📚</span>
                  <div className="interest-text">
                    <h4>Continuous Learning</h4>
                    <p>
                      I'm always exploring new topics—from business strategy books to online courses 
                      on emerging technologies. Recently, I've been diving into automation tools and 
                      AI applications for business operations.
                    </p>
                  </div>
                </div>
                <div className="interest-item">
                  <span className="interest-icon">🌱</span>
                  <div className="interest-text">
                    <h4>Personal Productivity</h4>
                    <p>
                      I'm fascinated by productivity systems and workflow optimization—not just for 
                      work, but for life. I experiment with different methods and tools to find what 
                      actually works (and what's just hype).
                    </p>
                  </div>
                </div>
                <div className="interest-item">
                  <span className="interest-icon">🤝</span>
                  <div className="interest-text">
                    <h4>Mentorship & Community</h4>
                    <p>
                      I enjoy helping others navigate their career paths and sharing what I've learned. 
                      Whether it's mentoring students or participating in professional communities, 
                      I find fulfillment in contributing to others' growth.
                    </p>
                  </div>
                </div>
                <div className="interest-item">
                  <span className="interest-icon">🎨</span>
                  <div className="interest-text">
                    <h4>Design & User Experience</h4>
                    <p>
                      I appreciate good design—from intuitive software interfaces to well-organized 
                      spaces. I believe that thoughtful design makes everything work better, and I 
                      apply this thinking to processes and workflows.
                    </p>
                  </div>
                </div>
                <div className="interest-item">
                  <span className="interest-icon">🌍</span>
                  <div className="interest-text">
                    <h4>Global Business Trends</h4>
                    <p>
                      I follow how businesses operate across different cultures and markets. 
                      Understanding diverse business practices and global trends helps me think more 
                      broadly about operational challenges and solutions.
                    </p>
                  </div>
                </div>
                <div className="interest-item">
                  <span className="interest-icon">⚖️</span>
                  <div className="interest-text">
                    <h4>Work-Life Integration</h4>
                    <p>
                      I'm intentional about maintaining balance and setting boundaries. I believe that 
                      sustainable high performance comes from taking care of yourself, not burning out. 
                      I practice what I preach about healthy work habits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="personality-closing">
            <p>
              <strong>What this means for you:</strong> When you work with me, you get someone who 
              brings both professional expertise and genuine care for the work. I'm not just checking 
              boxes—I'm invested in understanding your challenges, delivering real value, and building 
              a collaborative partnership that drives results. I bring curiosity, reliability, and a 
              commitment to excellence in everything I do.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
