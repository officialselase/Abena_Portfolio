import Hero from '../components/Hero'
import LazySection from '../components/LazySection'
import './Home.css'

function Home() {
  return (
    <div className="home-page">
      <Hero />

      <LazySection threshold={0.1} rootMargin="100px">
        <section className="introduction">
          <h2>Welcome</h2>
          <p>
            I'm Anabel, an Operational Strategist with a strong foundation in Business Administration 
            and a passion for optimizing processes and driving organizational success.
          </p>
        </section>
      </LazySection>

      <LazySection threshold={0.1} rootMargin="100px">
        <section className="highlights">
          <h2>Key Strengths</h2>
          <div className="highlights-grid">
            <div className="highlight-card">
              <h3>Strategic Operations</h3>
              <p>Expertise in developing and implementing operational strategies that drive efficiency</p>
            </div>
            <div className="highlight-card">
              <h3>Business Administration</h3>
              <p>Strong academic foundation with practical management experience</p>
            </div>
            <div className="highlight-card">
              <h3>Virtual Assistance</h3>
              <p>Skilled in remote collaboration and digital workflow optimization</p>
            </div>
          </div>
        </section>
      </LazySection>
    </div>
  )
}

export default Home
