import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import Header from './Header'

describe('Header Navigation', () => {
  const renderWithRouter = (initialRoute = '/') => {
    return render(
      <MemoryRouter initialEntries={[initialRoute]}>
        <Header />
      </MemoryRouter>
    )
  }

  it('renders all navigation links', () => {
    renderWithRouter()
    
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /experience/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /skills/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })

  it('renders logo link to home', () => {
    renderWithRouter()
    
    const logoLink = screen.getByRole('link', { name: /anabel/i })
    expect(logoLink).toHaveAttribute('href', '/')
  })

  it('highlights active navigation link', () => {
    renderWithRouter('/about')
    
    const aboutLink = screen.getByRole('link', { name: /about/i })
    expect(aboutLink).toHaveClass('active')
  })

  it('only highlights one active link at a time', () => {
    renderWithRouter('/projects')
    
    const projectsLink = screen.getByRole('link', { name: /projects/i })
    const homeLink = screen.getByRole('link', { name: /home/i })
    
    expect(projectsLink).toHaveClass('active')
    expect(homeLink).not.toHaveClass('active')
  })

  it('renders hamburger menu button', () => {
    renderWithRouter()
    
    const hamburgerButton = screen.getByRole('button', { name: /toggle navigation menu/i })
    expect(hamburgerButton).toBeInTheDocument()
  })

  it('opens mobile menu when hamburger is clicked', async () => {
    const user = userEvent.setup()
    renderWithRouter()
    
    const hamburgerButton = screen.getByRole('button', { name: /toggle navigation menu/i })
    const nav = screen.getByRole('navigation')
    
    // Menu should be closed initially
    expect(nav).not.toHaveClass('open')
    expect(hamburgerButton).not.toHaveClass('active')
    
    // Click hamburger
    await user.click(hamburgerButton)
    
    // Menu should be open
    expect(nav).toHaveClass('open')
    expect(hamburgerButton).toHaveClass('active')
  })

  it('closes mobile menu when hamburger is clicked again', async () => {
    const user = userEvent.setup()
    renderWithRouter()
    
    const hamburgerButton = screen.getByRole('button', { name: /toggle navigation menu/i })
    const nav = screen.getByRole('navigation')
    
    // Open menu
    await user.click(hamburgerButton)
    expect(nav).toHaveClass('open')
    
    // Close menu
    await user.click(hamburgerButton)
    expect(nav).not.toHaveClass('open')
    expect(hamburgerButton).not.toHaveClass('active')
  })

  it('closes mobile menu when navigation link is clicked', async () => {
    const user = userEvent.setup()
    renderWithRouter()
    
    const hamburgerButton = screen.getByRole('button', { name: /toggle navigation menu/i })
    const nav = screen.getByRole('navigation')
    
    // Open menu
    await user.click(hamburgerButton)
    expect(nav).toHaveClass('open')
    
    // Click a navigation link
    const aboutLink = screen.getByRole('link', { name: /about/i })
    await user.click(aboutLink)
    
    // Menu should close
    await waitFor(() => {
      expect(nav).not.toHaveClass('open')
    })
  })

  it('closes mobile menu when overlay is clicked', async () => {
    const user = userEvent.setup()
    renderWithRouter()
    
    const hamburgerButton = screen.getByRole('button', { name: /toggle navigation menu/i })
    const nav = screen.getByRole('navigation')
    
    // Open menu
    await user.click(hamburgerButton)
    expect(nav).toHaveClass('open')
    
    // Click overlay
    const overlay = document.querySelector('.mobile-overlay')
    await user.click(overlay)
    
    // Menu should close
    expect(nav).not.toHaveClass('open')
  })

  it('prevents body scroll when mobile menu is open', async () => {
    const user = userEvent.setup()
    renderWithRouter()
    
    const hamburgerButton = screen.getByRole('button', { name: /toggle navigation menu/i })
    
    // Initially body should be scrollable (or unset from previous tests)
    const initialOverflow = document.body.style.overflow
    expect(['', 'unset']).toContain(initialOverflow)
    
    // Open menu
    await user.click(hamburgerButton)
    
    // Body scroll should be prevented
    expect(document.body.style.overflow).toBe('hidden')
    
    // Close menu
    await user.click(hamburgerButton)
    
    // Body scroll should be restored
    expect(document.body.style.overflow).toBe('unset')
  })

  it('adds scrolled class to header when page is scrolled', async () => {
    renderWithRouter()
    
    const header = screen.getByRole('banner')
    
    // Initially no scrolled class
    expect(header).not.toHaveClass('scrolled')
    
    // Simulate scroll
    window.scrollY = 20
    window.dispatchEvent(new Event('scroll'))
    
    // Wait for state update
    await waitFor(() => {
      expect(header).toHaveClass('scrolled')
    })
  })

  it('hamburger button has correct aria attributes', () => {
    renderWithRouter()
    
    const hamburgerButton = screen.getByRole('button', { name: /toggle navigation menu/i })
    
    expect(hamburgerButton).toHaveAttribute('aria-label', 'Toggle navigation menu')
    expect(hamburgerButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('updates aria-expanded when menu is opened', async () => {
    const user = userEvent.setup()
    renderWithRouter()
    
    const hamburgerButton = screen.getByRole('button', { name: /toggle navigation menu/i })
    
    expect(hamburgerButton).toHaveAttribute('aria-expanded', 'false')
    
    await user.click(hamburgerButton)
    
    expect(hamburgerButton).toHaveAttribute('aria-expanded', 'true')
  })

  it('all navigation links have correct href attributes', () => {
    renderWithRouter()
    
    expect(screen.getByRole('link', { name: /^home$/i })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: /^about$/i })).toHaveAttribute('href', '/about')
    expect(screen.getByRole('link', { name: /^experience$/i })).toHaveAttribute('href', '/experience')
    expect(screen.getByRole('link', { name: /^projects$/i })).toHaveAttribute('href', '/projects')
    expect(screen.getByRole('link', { name: /^skills$/i })).toHaveAttribute('href', '/skills')
    expect(screen.getByRole('link', { name: /^contact$/i })).toHaveAttribute('href', '/contact')
  })
})
