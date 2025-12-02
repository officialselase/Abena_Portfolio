import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Handle scroll detection for header shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      {/* Mobile overlay */}
      <div 
        className={`mobile-overlay ${isMenuOpen ? 'visible' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-text">Anabel</span>
        </Link>
        
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li>
              <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/experience" className={`nav-link ${isActive('/experience')}`} onClick={closeMenu}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="/projects" className={`nav-link ${isActive('/projects')}`} onClick={closeMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/skills" className={`nav-link ${isActive('/skills')}`} onClick={closeMenu}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    </>
  )
}

export default Header
