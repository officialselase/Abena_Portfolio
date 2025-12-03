import { describe, it, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

// Test component that mimics App structure without BrowserRouter
const TestApp = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
)

describe('Navigation and Routing', () => {
  describe('Route rendering', () => {
    it('renders Home page at root path', () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <TestApp />
        </MemoryRouter>
      )
      
      // Home page should have hero section
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    })

    it('renders About page at /about', () => {
      render(
        <MemoryRouter initialEntries={['/about']}>
          <TestApp />
        </MemoryRouter>
      )
      
      expect(screen.getByRole('heading', { name: /About Me/i })).toBeInTheDocument()
    })

    it('renders Experience page at /experience', () => {
      render(
        <MemoryRouter initialEntries={['/experience']}>
          <TestApp />
        </MemoryRouter>
      )
      
      expect(screen.getByRole('heading', { name: /Professional Experience/i })).toBeInTheDocument()
    })

    it('renders Projects page at /projects', () => {
      render(
        <MemoryRouter initialEntries={['/projects']}>
          <TestApp />
        </MemoryRouter>
      )
      
      expect(screen.getByRole('heading', { name: /Projects & Case Studies/i })).toBeInTheDocument()
    })

    it('renders Skills page at /skills', () => {
      render(
        <MemoryRouter initialEntries={['/skills']}>
          <TestApp />
        </MemoryRouter>
      )
      
      expect(screen.getByRole('heading', { name: /Skills & Expertise/i })).toBeInTheDocument()
    })

    it('renders Contact page at /contact', () => {
      render(
        <MemoryRouter initialEntries={['/contact']}>
          <TestApp />
        </MemoryRouter>
      )
      
      expect(screen.getByRole('heading', { name: /Let's Work Together/i })).toBeInTheDocument()
    })

    it('renders NotFound page for invalid routes', () => {
      render(
        <MemoryRouter initialEntries={['/invalid-route']}>
          <TestApp />
        </MemoryRouter>
      )
      
      expect(screen.getByText(/404/i)).toBeInTheDocument()
    })
  })

  describe('Navigation links', () => {
    it('navigates to About page when About link is clicked', async () => {
      const user = userEvent.setup()
      
      render(
        <MemoryRouter initialEntries={['/']}>
          <TestApp />
        </MemoryRouter>
      )
      
      const aboutLinks = screen.getAllByRole('link', { name: /About/i })
      await user.click(aboutLinks[0])
      
      await waitFor(() => {
        expect(screen.getByRole('heading', { name: /About Me/i })).toBeInTheDocument()
      })
    })

    it('navigates to Experience page when Experience link is clicked', async () => {
      const user = userEvent.setup()
      
      render(
        <MemoryRouter initialEntries={['/']}>
          <TestApp />
        </MemoryRouter>
      )
      
      const experienceLinks = screen.getAllByRole('link', { name: /Experience/i })
      await user.click(experienceLinks[0])
      
      await waitFor(() => {
        expect(screen.getByRole('heading', { name: /Professional Experience/i })).toBeInTheDocument()
      })
    })

    it('navigates to Projects page when Projects link is clicked', async () => {
      const user = userEvent.setup()
      
      render(
        <MemoryRouter initialEntries={['/']}>
          <TestApp />
        </MemoryRouter>
      )
      
      const projectsLinks = screen.getAllByRole('link', { name: /Projects/i })
      await user.click(projectsLinks[0])
      
      await waitFor(() => {
        expect(screen.getByRole('heading', { name: /Projects & Case Studies/i })).toBeInTheDocument()
      })
    })

    it('navigates to Skills page when Skills link is clicked', async () => {
      const user = userEvent.setup()
      
      render(
        <MemoryRouter initialEntries={['/']}>
          <TestApp />
        </MemoryRouter>
      )
      
      const skillsLinks = screen.getAllByRole('link', { name: /Skills/i })
      await user.click(skillsLinks[0])
      
      await waitFor(() => {
        expect(screen.getByRole('heading', { name: /Skills & Expertise/i })).toBeInTheDocument()
      })
    })

    it('navigates to Contact page when Contact link is clicked', async () => {
      const user = userEvent.setup()
      
      render(
        <MemoryRouter initialEntries={['/']}>
          <TestApp />
        </MemoryRouter>
      )
      
      const contactLinks = screen.getAllByRole('link', { name: /Contact/i })
      await user.click(contactLinks[0])
      
      await waitFor(() => {
        expect(screen.getByRole('heading', { name: /Let's Work Together/i })).toBeInTheDocument()
      })
    })

    it('navigates back to Home when logo is clicked', async () => {
      const user = userEvent.setup()
      
      render(
        <MemoryRouter initialEntries={['/about']}>
          <TestApp />
        </MemoryRouter>
      )
      
      const logoLink = screen.getByRole('link', { name: /Anabel/i })
      await user.click(logoLink)
      
      await waitFor(() => {
        expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
      })
    })
  })

  describe('Active navigation state', () => {
    it('highlights Home link when on home page', () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <TestApp />
        </MemoryRouter>
      )
      
      const navLinks = screen.getAllByRole('link', { name: /^Home$/i })
      const headerLink = navLinks.find(link => link.classList.contains('nav-link'))
      expect(headerLink).toHaveClass('active')
    })

    it('highlights About link when on about page', () => {
      render(
        <MemoryRouter initialEntries={['/about']}>
          <TestApp />
        </MemoryRouter>
      )
      
      const navLinks = screen.getAllByRole('link', { name: /^About$/i })
      const headerLink = navLinks.find(link => link.classList.contains('nav-link'))
      expect(headerLink).toHaveClass('active')
    })

    it('highlights Experience link when on experience page', () => {
      render(
        <MemoryRouter initialEntries={['/experience']}>
          <TestApp />
        </MemoryRouter>
      )
      
      const navLinks = screen.getAllByRole('link', { name: /^Experience$/i })
      const headerLink = navLinks.find(link => link.classList.contains('nav-link'))
      expect(headerLink).toHaveClass('active')
    })
  })

  describe('Layout consistency', () => {
    it('renders Header on all pages', () => {
      const routes = ['/', '/about', '/experience', '/projects', '/skills', '/contact']
      
      routes.forEach(route => {
        const { unmount } = render(
          <MemoryRouter initialEntries={[route]}>
            <TestApp />
          </MemoryRouter>
        )
        
        expect(screen.getByRole('banner')).toBeInTheDocument()
        unmount()
      })
    })

    it('renders Footer on all pages', () => {
      const routes = ['/', '/about', '/experience', '/projects', '/skills', '/contact']
      
      routes.forEach(route => {
        const { unmount } = render(
          <MemoryRouter initialEntries={[route]}>
            <TestApp />
          </MemoryRouter>
        )
        
        expect(screen.getByRole('contentinfo')).toBeInTheDocument()
        unmount()
      })
    })
  })
})
