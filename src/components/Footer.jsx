import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (e, candidates) => {
    if (e && e.preventDefault) e.preventDefault()
    const ids = Array.isArray(candidates) ? candidates : [candidates]
    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    if (ids[0]) window.location.hash = `#${ids[0]}`
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-brand">Ralph Generoso</h3>
            <p className="footer-description">
              Workflow Automation Specialist crafting scalable automation solutions and streamlining business processes.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#hero-section" onClick={(e) => scrollToSection(e, ['hero-section','hero'])}>Home</a></li>
              <li><a href="#tech-section" onClick={(e) => scrollToSection(e, ['tech-section','tech-stack'])}>Tech Stack</a></li>
              <li><a href="#work-section" onClick={(e) => scrollToSection(e, ['work-section','services'])}>Services</a></li>
              <li><a href="#about-section" onClick={(e) => scrollToSection(e, ['about-section','about'])}>About</a></li>
              <li><a href="#contact-section" onClick={(e) => scrollToSection(e, ['contact-section','contact'])}>Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#work-section" onClick={(e) => scrollToSection(e, ['work-section','services'])}>Workflow Automation</a></li>
              <li><a href="#work-section" onClick={(e) => scrollToSection(e, ['work-section','services'])}>API Integration</a></li>
              <li><a href="#work-section" onClick={(e) => scrollToSection(e, ['work-section','services'])}>AI-Powered Automation</a></li>
              <li><a href="#work-section" onClick={(e) => scrollToSection(e, ['work-section','services'])}>CRM Solutions</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Connect</h4>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/in/ralph-g-522613392" target="_blank" rel="noreferrer" className="footer-social">LinkedIn</a>
              <a href="https://www.upwork.com/freelancers/~01216084bdbcb9cf83" target="_blank" rel="noreferrer" className="footer-social">Upwork</a>
              <a href="mailto:ralphgeneroso0815@gmail.com" className="footer-social">Email</a>
              <a href="tel:+63926546465" className="footer-social">Phone</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Ralph Generoso. All rights reserved.
          </p>
          <p className="footer-credit">
            Designed & Built with ❤️ by Ralph | Workflow and AI Automation Specialist
          </p>
        </div>
      </div>
    </footer>
  )
}
