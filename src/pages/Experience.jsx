import './Experience.css';
import { Building2, Briefcase, GraduationCap } from 'lucide-react';
import { useEffect, useRef } from 'react';

// Data structure for work history
const experienceData = [
  {
    id: 1,
    company: "Strategic Operations Firm",
    title: "Operational Strategist",
    dates: "2023 - Present",
    startDate: "2023-03",
    endDate: null, // null indicates current position
    achievements: [
      "Optimized cross-departmental workflows, reducing operational costs by 28% and saving $120K annually",
      "Led strategic planning initiatives for 5 concurrent projects, delivering all on-time with 95% stakeholder satisfaction",
      "Implemented data-driven decision framework that improved forecasting accuracy by 35%",
      "Designed and executed process improvement roadmap adopted across 4 business units serving 200+ employees",
      "Managed vendor relationships and contract negotiations, achieving 18% cost reduction while maintaining quality standards"
    ],
    logo: null, // Optional: company logo path
    icon: Building2 // Icon component for visual representation
  },
  {
    id: 2,
    company: "Business Solutions Group",
    title: "Operations Coordinator",
    dates: "2021 - 2023",
    startDate: "2021-08",
    endDate: "2023-03",
    achievements: [
      "Coordinated operations for 3 regional teams totaling 45+ members, ensuring seamless communication and alignment",
      "Reduced project delivery time by 32% through implementation of agile methodologies and automation tools",
      "Managed operational budget of $250K with 100% compliance and zero budget overruns",
      "Developed comprehensive SOPs and training materials that decreased onboarding time by 40%",
      "Spearheaded digital transformation initiative, migrating 12 manual processes to automated systems with 99.5% accuracy"
    ],
    logo: null,
    icon: Briefcase
  },
  {
    id: 3,
    company: "Tech Startup",
    title: "Executive Virtual Assistant",
    dates: "2020 - 2021",
    startDate: "2020-06",
    endDate: "2021-08",
    achievements: [
      "Provided comprehensive administrative support to C-suite executives managing 50+ meetings weekly",
      "Improved executive productivity by 45% through proactive calendar optimization and priority management",
      "Coordinated 20+ high-stakes client presentations and board meetings with zero scheduling conflicts",
      "Managed complex travel arrangements across 8 time zones with 100% accuracy and cost efficiency",
      "Implemented CRM system for client relationship tracking, increasing follow-up rate by 60%"
    ],
    logo: null,
    icon: Briefcase
  },
  {
    id: 4,
    company: "University Business Program",
    title: "Student Organization President & Operations Manager",
    dates: "2019 - 2020",
    startDate: "2019-09",
    endDate: "2020-05",
    achievements: [
      "Led organization of 50+ members, increasing active participation by 65% through strategic engagement initiatives",
      "Managed annual operating budget of $35K with full accountability and transparent reporting",
      "Organized 12 professional development events attracting 800+ attendees and securing 15 corporate sponsors",
      "Built partnerships with 8 local businesses, creating internship opportunities for 25 students",
      "Mentored team of 10 committee leaders, developing leadership pipeline and succession planning framework"
    ],
    logo: null,
    icon: GraduationCap
  }
];

function Experience() {
  const experiences = experienceData;
  const cardsRef = useRef([]);
  const headerRef = useRef(null);

  useEffect(() => {
    // Intersection Observer options
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% of the element is visible
    };

    // Callback for when elements intersect
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    };

    // Create observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe header
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    // Observe all experience cards
    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    // Cleanup
    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
      cardsRef.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <div className="experience-page">
      <section className="header" ref={headerRef}>
        <h1>Professional Experience</h1>
        <p className="subtitle">
          A track record of driving operational excellence and delivering measurable results
        </p>
      </section>

      <section className="timeline">
        {experiences.map((exp, index) => {
          const IconComponent = exp.icon;
          return (
            <div 
              key={exp.id} 
              className="experience-card"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="company-logo-container">
                {exp.logo ? (
                  <img src={exp.logo} alt={`${exp.company} logo`} className="company-logo" />
                ) : IconComponent ? (
                  <div className="company-icon">
                    <IconComponent size={32} strokeWidth={1.5} />
                  </div>
                ) : null}
              </div>
              <div className="experience-header">
                <div className="company-info">
                  <h2 className="job-title">{exp.title}</h2>
                  <h3 className="company-name">{exp.company}</h3>
                </div>
                <div className="date-range">{exp.dates}</div>
              </div>
              <ul className="achievements">
                {exp.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </section>
    </div>
  )
}

export default Experience
