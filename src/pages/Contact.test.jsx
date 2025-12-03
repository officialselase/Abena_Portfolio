import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Contact from './Contact'

describe('Contact Form', () => {
  it('renders contact form with all required fields', () => {
    render(<Contact />)
    
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('shows validation error when name is empty', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    
    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)
    
    expect(await screen.findByText(/name is required/i)).toBeInTheDocument()
  })

  it('shows validation error when email is empty', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    
    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)
    
    expect(await screen.findByText(/email is required/i)).toBeInTheDocument()
  })

  it('shows validation error when message is empty', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    
    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)
    
    expect(await screen.findByText(/message is required/i)).toBeInTheDocument()
  })

  it('shows validation error when message is less than 10 characters', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    
    const messageInput = screen.getByLabelText(/message/i)
    await user.type(messageInput, 'Short')
    
    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)
    
    expect(await screen.findByText(/message must be at least 10 characters/i)).toBeInTheDocument()
  })

  it('clears error message when user starts typing in field', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    
    // Trigger validation error
    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)
    
    expect(await screen.findByText(/name is required/i)).toBeInTheDocument()
    
    // Start typing in name field
    const nameInput = screen.getByLabelText(/name/i)
    await user.type(nameInput, 'John')
    
    // Error should be cleared
    expect(screen.queryByText(/name is required/i)).not.toBeInTheDocument()
  })

  it('submits form successfully with valid data', async () => {
    const user = userEvent.setup()
    const consoleSpy = vi.spyOn(console, 'log')
    render(<Contact />)
    
    // Fill in valid form data
    await user.type(screen.getByLabelText(/name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/message/i), 'This is a test message with more than 10 characters')
    
    // Submit form
    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)
    
    // Check that form was submitted
    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith('Form submitted:', expect.objectContaining({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'This is a test message with more than 10 characters'
      }))
    })
    
    // Check success message appears
    expect(await screen.findByText(/message sent successfully/i)).toBeInTheDocument()
    
    consoleSpy.mockRestore()
  })

  it('resets form fields after successful submission', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    
    // Fill in form
    const nameInput = screen.getByLabelText(/name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const messageInput = screen.getByLabelText(/message/i)
    
    await user.type(nameInput, 'John Doe')
    await user.type(emailInput, 'john@example.com')
    await user.type(messageInput, 'This is a test message')
    
    // Submit form
    await user.click(screen.getByRole('button', { name: /send message/i }))
    
    // Wait for success message
    await screen.findByText(/message sent successfully/i)
    
    // Check fields are cleared
    expect(nameInput).toHaveValue('')
    expect(emailInput).toHaveValue('')
    expect(messageInput).toHaveValue('')
  })

  it('prevents spam submission when honeypot field is filled', async () => {
    const user = userEvent.setup()
    const consoleSpy = vi.spyOn(console, 'log')
    render(<Contact />)
    
    // Fill in valid form data
    await user.type(screen.getByLabelText(/name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/message/i), 'This is a test message')
    
    // Fill honeypot field (simulating spam bot)
    const honeypotInput = screen.getByLabelText(/leave this field empty/i)
    await user.type(honeypotInput, 'spam')
    
    // Submit form
    await user.click(screen.getByRole('button', { name: /send message/i }))
    
    // Form should not be submitted
    await waitFor(() => {
      expect(consoleSpy).not.toHaveBeenCalled()
    })
    
    consoleSpy.mockRestore()
  })

  it('renders contact information links correctly', () => {
    render(<Contact />)
    
    // Check email link
    const emailLink = screen.getByRole('link', { name: /anabel@example.com/i })
    expect(emailLink).toHaveAttribute('href', 'mailto:anabel@example.com')
    
    // Check LinkedIn links (there are multiple on the page)
    const linkedInLinks = screen.getAllByRole('link', { name: /connect on linkedin/i })
    expect(linkedInLinks.length).toBeGreaterThan(0)
    linkedInLinks.forEach(link => {
      expect(link).toHaveAttribute('href', 'https://linkedin.com/in/anabel')
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  it('displays all contact methods', () => {
    render(<Contact />)
    
    expect(screen.getByText(/📧 email/i)).toBeInTheDocument()
    expect(screen.getByText(/💼 linkedin/i)).toBeInTheDocument()
    expect(screen.getByText(/📱 phone/i)).toBeInTheDocument()
    expect(screen.getByText(/\(555\) 123-4567/i)).toBeInTheDocument()
  })
})
