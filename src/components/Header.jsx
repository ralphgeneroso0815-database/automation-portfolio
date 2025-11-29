import { useState } from 'react'
import './Header.css'

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
  }

  // Robust scroll helper: accepts a single id or array of candidate ids and scrolls to the first found
  const scrollToSection = (candidates) => {
    const ids = Array.isArray(candidates) ? candidates : [candidates]
    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setIsMobileMenuOpen(false)
        return
      }
    }
    // fallback: try setting hash to first candidate (graceful degrade)
    if (ids[0]) {
      window.location.hash = `#${ids[0]}`
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <h1 className="logo-text">Ralph Generoso</h1>
          <p className="logo-subtitle">Workflow and AI Automation Specialist</p>
        </div>

        <nav className={`nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <button onClick={() => scrollToSection(['hero-section', 'hero'])} className="nav-link">Home</button>
          <button onClick={() => scrollToSection(['tech-section', 'tech-stack'])} className="nav-link">Tech Stack</button>
          <button onClick={() => scrollToSection(['work-section', 'services'])} className="nav-link">Work Experience</button>
          <button onClick={() => scrollToSection(['about-section', 'about'])} className="nav-link">About</button>
          <button onClick={() => scrollToSection(['contact-section', 'contact'])} className="nav-link">Contact</button>
        </nav>

        <button
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
