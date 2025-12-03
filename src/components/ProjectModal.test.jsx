import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProjectModal from './ProjectModal'

describe('ProjectModal', () => {
  const mockProject = {
    title: 'Test Project',
    category: 'Operational Strategy',
    visual: '📊',
    problem: 'The organization faced inefficient processes that led to delays.',
    solution: 'Implemented a streamlined workflow system with automated tracking.',
    impact: 'Reduced processing time by 40% and improved team productivity by 25%.'
  }

  const mockOnClose = vi.fn()

  beforeEach(() => {
    mockOnClose.mockClear()
  })

  it('renders project modal with all content', () => {
    render(<ProjectModal project={mockProject} onClose={mockOnClose} />)
    
    expect(screen.getByText(mockProject.title)).toBeInTheDocument()
    expect(screen.getByText(mockProject.category)).toBeInTheDocument()
    expect(screen.getByText(mockProject.visual)).toBeInTheDocument()
    expect(screen.getByText(mockProject.problem)).toBeInTheDocument()
    expect(screen.getByText(mockProject.solution)).toBeInTheDocument()
    expect(screen.getByText(mockProject.impact)).toBeInTheDocument()
  })

  it('renders close button', () => {
    render(<ProjectModal project={mockProject} onClose={mockOnClose} />)
    
    const closeButton = screen.getByRole('button', { name: /close modal/i })
    expect(closeButton).toBeInTheDocument()
  })

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup()
    render(<ProjectModal project={mockProject} onClose={mockOnClose} />)
    
    const closeButton = screen.getByRole('button', { name: /close modal/i })
    await user.click(closeButton)
    
    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when backdrop is clicked', async () => {
    const user = userEvent.setup()
    render(<ProjectModal project={mockProject} onClose={mockOnClose} />)
    
    const backdrop = document.querySelector('.modal-backdrop')
    await user.click(backdrop)
    
    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })

  it('does not close when modal content is clicked', async () => {
    const user = userEvent.setup()
    render(<ProjectModal project={mockProject} onClose={mockOnClose} />)
    
    const modalContent = document.querySelector('.modal-content')
    await user.click(modalContent)
    
    expect(mockOnClose).not.toHaveBeenCalled()
  })

  it('closes modal when Escape key is pressed', async () => {
    const user = userEvent.setup()
    render(<ProjectModal project={mockProject} onClose={mockOnClose} />)
    
    await user.keyboard('{Escape}')
    
    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })

  it('prevents body scroll when modal is open', () => {
    render(<ProjectModal project={mockProject} onClose={mockOnClose} />)
    
    expect(document.body.style.overflow).toBe('hidden')
  })

  it('restores body scroll when modal is unmounted', () => {
    const { unmount } = render(<ProjectModal project={mockProject} onClose={mockOnClose} />)
    
    expect(document.body.style.overflow).toBe('hidden')
    
    unmount()
    
    expect(document.body.style.overflow).toBe('unset')
  })

  it('has correct ARIA attributes', () => {
    render(<ProjectModal project={mockProject} onClose={mockOnClose} />)
    
    const modalContent = document.querySelector('.modal-content')
    expect(modalContent).toHaveAttribute('role', 'dialog')
    expect(modalContent).toHaveAttribute('aria-modal', 'true')
    expect(modalContent).toHaveAttribute('aria-labelledby', 'modal-title')
  })

  it('renders section headers correctly', () => {
    render(<ProjectModal project={mockProject} onClose={mockOnClose} />)
    
    expect(screen.getByText(/the challenge/i)).toBeInTheDocument()
    expect(screen.getByText(/the solution/i)).toBeInTheDocument()
    expect(screen.getByText(/impact & results/i)).toBeInTheDocument()
  })

  it('extracts and displays metrics from impact text', () => {
    render(<ProjectModal project={mockProject} onClose={mockOnClose} />)
    
    // Should extract 40% and 25% from the impact text (multiple instances)
    const fortyPercent = screen.getAllByText(/40%/)
    const twentyFivePercent = screen.getAllByText(/25%/)
    
    expect(fortyPercent.length).toBeGreaterThan(0)
    expect(twentyFivePercent.length).toBeGreaterThan(0)
  })

  it('displays key results section when metrics are present', () => {
    render(<ProjectModal project={mockProject} onClose={mockOnClose} />)
    
    expect(screen.getByText(/key results/i)).toBeInTheDocument()
  })

  it('renders metric visualization bars', () => {
    render(<ProjectModal project={mockProject} onClose={mockOnClose} />)
    
    const metricBars = document.querySelectorAll('.modal-metric-bar-fill')
    expect(metricBars.length).toBeGreaterThan(0)
  })

  it('handles project with no metrics gracefully', () => {
    const projectWithoutMetrics = {
      ...mockProject,
      impact: 'Improved overall efficiency and team satisfaction.'
    }
    
    render(<ProjectModal project={projectWithoutMetrics} onClose={mockOnClose} />)
    
    // Should still render the modal
    expect(screen.getByText(projectWithoutMetrics.title)).toBeInTheDocument()
    expect(screen.getByText(projectWithoutMetrics.impact)).toBeInTheDocument()
    
    // Key results section should not be present
    expect(screen.queryByText(/key results/i)).not.toBeInTheDocument()
  })

  it('renders section icons', () => {
    render(<ProjectModal project={mockProject} onClose={mockOnClose} />)
    
    expect(screen.getByText('⚠️')).toBeInTheDocument() // Challenge icon
    expect(screen.getByText('💡')).toBeInTheDocument() // Solution icon
    expect(screen.getByText('📈')).toBeInTheDocument() // Impact icon
  })

  it('sets correct width for metric bars based on percentage', () => {
    render(<ProjectModal project={mockProject} onClose={mockOnClose} />)
    
    const metricBars = document.querySelectorAll('.modal-metric-bar-fill')
    
    // Check that bars have width style set
    metricBars.forEach(bar => {
      expect(bar.style.width).toMatch(/\d+%/)
    })
  })

  it('caps metric bar width at 100%', () => {
    const projectWithHighMetric = {
      ...mockProject,
      impact: 'Increased efficiency by 150% through innovative solutions.'
    }
    
    render(<ProjectModal project={projectWithHighMetric} onClose={mockOnClose} />)
    
    const metricBars = document.querySelectorAll('.modal-metric-bar-fill')
    
    metricBars.forEach(bar => {
      const width = parseInt(bar.style.width)
      expect(width).toBeLessThanOrEqual(100)
    })
  })
})
