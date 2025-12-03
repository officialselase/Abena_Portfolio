import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '' // spam protection
  })
  
  const [errors, setErrors] = useState({})
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Check honeypot field (should be empty)
    if (formData.honeypot) {
      return // Likely spam
    }
    
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setSubmitStatus(null) // Clear any previous status
      return
    }
    
    try {
      // Simulate form submission (in a real app, this would be an API call)
      // For now, we'll simulate success/failure randomly for demonstration
      console.log('Form submitted:', formData)
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // In a real application, you would make an API call here:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })
      // if (!response.ok) throw new Error('Failed to send message')
      
      setSubmitStatus('success')
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        message: '',
        honeypot: ''
      })
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
      
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }
  }

  return (
    <div className="contact-page">
      <section className="header">
        <h1>Let's Work Together</h1>
        <p className="subtitle">
          Ready to optimize your operations and drive measurable results? I'm here to help your organization achieve strategic excellence.
        </p>
        <p className="value-prop">
          Whether you need operational strategy expertise, business administration support, or a skilled virtual assistant to streamline your workflows—let's connect and explore how I can add value to your team.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Reach Out Directly</h2>
          <p className="contact-intro">
            I'm actively seeking opportunities with forward-thinking organizations that value operational excellence and strategic innovation.
          </p>
          
          <div className="contact-method">
            <h3>📧 Email</h3>
            <a href="mailto:anabel@example.com" className="contact-link">
              anabel@example.com
            </a>
            <p className="method-description">Best for detailed inquiries and project discussions</p>
          </div>

          <div className="contact-method">
            <h3>💼 LinkedIn</h3>
            <a 
              href="https://linkedin.com/in/anabel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              Connect on LinkedIn
            </a>
            <p className="method-description">Let's expand our professional network</p>
          </div>

          <div className="contact-method">
            <h3>📱 Phone</h3>
            <p className="contact-link">(555) 123-4567</p>
            <p className="method-description">Available for calls Monday-Friday, 9 AM - 5 PM EST</p>
          </div>

          <div className="response-time">
            <h3>⏱️ Response Time</h3>
            <p>I typically respond within 24-48 hours during business days. For urgent matters, please mention "urgent" in your subject line.</p>
          </div>

          <div className="availability-note">
            <h3>🎯 Current Status</h3>
            <p><strong>Open to opportunities</strong> in operational strategy, business administration, and virtual assistanship roles. Available for full-time positions and select consulting projects.</p>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Start the Conversation</h2>
          <p className="form-intro">
            Have a specific project in mind? Looking to fill a role? Or just want to connect? Fill out the form below and I'll get back to you promptly.
          </p>
          
          {submitStatus === 'success' && (
            <div className="success-message">
              <strong>Message sent successfully!</strong> Thank you for reaching out. I'll review your message and respond within 24-48 hours. Looking forward to connecting with you!
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="error-message-banner">
              <strong>Oops! Something went wrong.</strong> Please try again or reach me directly at anabel@example.com. I apologize for the inconvenience.
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            {/* Honeypot field - hidden from users */}
            <div className="honeypot">
              <label htmlFor="honeypot">Leave this field empty</label>
              <input
                type="text"
                id="honeypot"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
              />
            </div>

            <button type="submit" className="btn btn-gradient">
              Send Message →
            </button>
          </form>

          <div className="form-footer">
            <p className="privacy-note">
              🔒 Your information is secure and will never be shared with third parties. I respect your privacy and will only use your contact details to respond to your inquiry.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Drive Results?</h2>
          <p>
            I bring a unique combination of strategic thinking, operational expertise, and hands-on execution. Let's discuss how I can help your organization achieve its goals.
          </p>
          <div className="cta-buttons">
            <a href="mailto:anabel@example.com?subject=Let's%20Connect" className="btn btn-primary">
              Email Me Directly
            </a>
            <a 
              href="https://linkedin.com/in/anabel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
