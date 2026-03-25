import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Wire up to EmailJS or Formspree later
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">// let's work together</p>
        <div className="section-divider"></div>

        <div className="contact-wrapper">

          {/* LEFT — info */}
          <div className="contact-info">
            <p className="contact-intro">
              I'm open to ML engineering roles, research collaborations, and
              interesting freelance projects. Drop a message and I'll get back
              within 24 hours.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <i className="bx bx-envelope"></i>
                <div>
                  <span className="contact-label">Email</span>
                  <a href="mailto:deveshkumawat2304@gmail.com" className="contact-value">
                    deveshkumawat2304@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <i className="bx bxl-github"></i>
                <div>
                  <span className="contact-label">GitHub</span>
                  <a href="https://github.com/devesh2304" target="_blank" rel="noreferrer" className="contact-value">
                    github.com/devesh2304
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <i className="bx bxl-linkedin"></i>
                <div>
                  <span className="contact-label">LinkedIn</span>
                  <a href="https://linkedin.com/in/devesh2304" target="_blank" rel="noreferrer" className="contact-value">
                    linkedin.com/in/devesh2304
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <i className="bx bx-map"></i>
                <div>
                  <span className="contact-label">Location</span>
                  <span className="contact-value">India</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="contact-form-wrap">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                />
              </div>

              <button type="submit" className={`form-btn ${sent ? 'sent' : ''}`}>
                {sent ? (
                  <><i className="bx bx-check"></i> Message Sent</>
                ) : (
                  <><i className="bx bx-send"></i> Send Message</>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact