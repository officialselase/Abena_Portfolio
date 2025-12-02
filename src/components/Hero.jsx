import LazyImage from './LazyImage'
import './Hero.css'

function Hero() {
  // Professional photo setup:
  // See /public/AVATAR_SETUP_INSTRUCTIONS.md for detailed instructions
  // 
  // To add your professional photo:
  // 1. Prepare photo: 400x400px, WebP + JPEG formats
  // 2. Place files in /public folder: avatar-400.webp, avatar-400.jpg, etc.
  // 3. Update the paths below to use your images
  // 4. Follow the complete guide in AVATAR_SETUP_INSTRUCTIONS.md
  
  // Current: Using local placeholder SVG
  // Replace with: '/avatar-400.webp', '/avatar-250.webp', '/avatar-350.webp'
  const avatarSrc = '/avatar-placeholder.svg'
  const avatarSrcSmall = '/avatar-placeholder.svg'
  const avatarSrcMedium = '/avatar-placeholder.svg'
  const avatarAlt = 'Anabel - Operational Strategist and Business Administrator'

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="headline">Transforming Operations Into Competitive Advantages</h1>
        <p className="subheadline">
          Operational Strategist with Business Administration expertise who turns complex processes into streamlined systems that scale. Ready to drive efficiency and growth at top-tier organizations.
        </p>
        <div className="cta-buttons">
          <a href="/projects" className="btn btn-primary">View My Work</a>
          <a href="/contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
      <div className="hero-image">
        <LazyImage 
          src={avatarSrc}
          srcSet={`${avatarSrcSmall} 250w, ${avatarSrcMedium} 350w, ${avatarSrc} 400w`}
          sizes="(max-width: 480px) 250px, (max-width: 768px) 350px, 400px"
          alt={avatarAlt}
          className="avatar-image"
          loading="eager"
          decoding="async"
          fetchpriority="high"
          width={400}
          height={400}
          placeholder={false}
        />
      </div>
    </section>
  )
}

export default Hero
