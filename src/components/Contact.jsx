import { useState } from 'react'
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Since there's no backend, we'll open the user's email client
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )
    window.open(`mailto:your.email@example.com?subject=${subject}&body=${body}`)
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          Have a question or want to work together? Drop me a message!
        </p>

        <div className="contact__grid">
          <div className="contact__info">
            <div className="contact__info-card">
              <FiMail className="contact__info-icon" />
              <div>
                <h4>Email</h4>
                <p>sipaganjansenn@gmail.com</p>
              </div>
            </div>
            <div className="contact__info-card">
              <FiMapPin className="contact__info-icon" />
              <div>
                <h4>Location</h4>
                <p>Bulacan, Philippines</p>
              </div>
            </div>

            <div className="contact__decoration">
              <div className="contact__dot-grid">
                {Array.from({ length: 25 }).map((_, i) => (
                  <span key={i} className="contact__dot"></span>
                ))}
              </div>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
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
                value={form.email}
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
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn--primary contact__btn">
              <FiSend /> {sent ? 'Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
