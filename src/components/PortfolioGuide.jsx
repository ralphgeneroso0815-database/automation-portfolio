import React, { useState, useEffect } from 'react'
import './PortfolioGuide.css'

export default function PortfolioGuide() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  // Tech stack full list (same as TechStack.jsx)
  const technologies = [
    { name: 'Zapier', icon: '⚡', category: 'Automation' },
    { name: 'Make (Integromat)', icon: '🔁', category: 'Automation' },
    { name: 'GoHighLevel', icon: '📈', category: 'Automation' },
    { name: 'Pabbly Connect', icon: '🔄', category: 'Automation' },
    { name: 'n8n', icon: '🤖', category: 'Automation' },
    { name: 'Google Apps Script', icon: '📝', category: 'Scripting' },
    { name: 'JavaScript', icon: '✨', category: 'Language' },
    { name: 'SQL', icon: '🗄️', category: 'Database' },
    { name: 'Postman', icon: '📮', category: 'API' },
    { name: 'Webhooks / REST APIs', icon: '📡', category: 'Integration' },
    { name: 'HubSpot', icon: '🎯', category: 'CRM' },
    { name: 'ActiveCampaign', icon: '💬', category: 'CRM' },
    { name: 'Google Sheets', icon: '📊', category: 'Data' },
    { name: 'Airtable', icon: '🗂️', category: 'Data' },
    { name: 'Notion', icon: '📋', category: 'Productivity' },
    { name: 'Xero', icon: '📑', category: 'Accounting' },
    { name: 'Asana', icon: '✅', category: 'Productivity' },
    { name: 'React', icon: '⚛️', category: 'Framework' },
    { name: 'TailwindCSS', icon: '🌬️', category: 'CSS' },
    { name: 'Gemini AI', icon: '🤖', category: 'AI' },
    { name: 'Figma', icon: '🎨', category: 'Design' },
    { name: 'Canva', icon: '🖼️', category: 'Design' },
  ]

  const workExperiences = [
    {
      id: 1,
      title: 'Front-End Developer',
      company: 'Web Development Agency',
      period: 'Mar 2025 – Jul 2025',
      icon: '💻',
      description: 'Built a digitized maintenance request system with full-stack capabilities.',
      highlights: [
        'API integration with real-time data sync',
        'Full CRUD functionality for maintenance tickets',
        'Role-based access control (Admin, Manager, User)',
        'Dynamic action buttons based on ticket status',
        'Responsive UI with TailwindCSS',
        'User registration for departments & business units'
      ],
      tech: ['React', 'JavaScript', 'TailwindCSS', 'API Integration', 'Figma']
    },
    {
      id: 2,
      title: 'IT Staff',
      company: 'Restaurant Chain',
      period: 'Aug 2025 – Oct 2025',
      icon: '🔧',
      description: 'Maintained critical IT systems and created digital marketing assets.',
      highlights: [
        'Managed OpenVPN infrastructure & remote access',
        'Loyverse POS system administration & troubleshooting',
        'IT auditing & security compliance',
        'Created promotional designs & advertisements',
        'System performance monitoring & optimization'
      ],
      tech: ['OpenVPN', 'Loyverse', 'Canva', 'IT Auditing', 'System Admin']
    }
  ]

  const featuredProjects = [
    {
      id: 'p1',
      title: 'Automated Lead Enrichment',
      icon: '🧲',
      description: 'Real-time lead processing with AI-powered email drafts.',
      fullDescription: 'This end-to-end automation receives lead data in real-time from web forms, enriches it using external verification APIs, scores and prioritizes leads by quality score, stores all processed information in a SQL database, sends instant Slack/email alerts when high-priority leads arrive, and automatically generates personalized outreach email drafts using an LLM based on lead profile.',
      highlights: [
        'Receives lead data in real-time from web forms',
        'Enriches data using external verification APIs',
        'Scores and prioritizes leads by quality',
        'Stores processed data in SQL database',
        'Sends Slack/email alerts for high-priority leads',
        'Generates personalized outreach email drafts with LLM'
      ],
      tech: ['Zapier', 'External APIs', 'SQL', 'LLM', 'Slack Integration'],
      imageKey: 'p1-image'
    },
    {
      id: 'p2',
      title: 'AI Content Repurposing Pipeline',
      icon: '🔁',
      description: 'Converts audio/video to multi-format content automatically.',
      fullDescription: 'A comprehensive content automation workflow that accepts uploaded audio/video files, automatically generates accurate transcripts, creates well-structured blog posts from transcripts, generates optimized social media content for Twitter, LinkedIn, and Instagram, logs every automation step to Google Sheets for audit trail and compliance, and includes conditional publishing logic based on content type and quality.',
      highlights: [
        'Accepts uploaded audio/video files',
        'Auto-generates accurate transcripts',
        'Creates blog posts from transcripts',
        'Generates social media content (Twitter, LinkedIn, Instagram)',
        'Logs every step to Google Sheets for audit trail',
        'Conditional publishing based on content type'
      ],
      tech: ['Zapier', 'Make', 'Transcription APIs', 'Google Sheets', 'AI Writing'],
      imageKey: 'p2-image'
    },
    {
      id: 'p3',
      title: 'AI Social Media Content Creator',
      icon: '🤖',
      description: 'Scheduled AI-driven workflow for daily social media posts.',
      fullDescription: 'An intelligent n8n workflow that runs on a daily schedule to automatically create and post social media content. It retrieves real-time weather data and local events, fetches inspirational quotes from public APIs, analyzes images for context-aware captions, generates engaging posts using Google Gemini AI, posts directly to Facebook using Graph API access tokens, and logs all activity in Google Sheets for analytics and tracking.',
      highlights: [
        'Scheduled triggers for automated daily execution',
        'Retrieves real-time weather data & local events',
        'Fetches inspirational quotes from APIs',
        'Analyzes images for context-aware captions',
        'Generates engaging posts using Google Gemini',
        'Posts directly to Facebook with access tokens',
        'Logs all activity in Google Sheets'
      ],
      tech: ['n8n', 'Google Gemini', 'Google Sheets', 'Facebook Graph API', 'Weather APIs'],
      imageKey: 'p3-image'
    },
    {
      id: 'p4',
      title: '24/7 AI Agent for Facebook Messenger',
      icon: '📱',
      description: 'Intelligent chatbot for 24/7 customer support.',
      fullDescription: 'A fully automated AI assistant integrated directly into a Facebook Page, designed to handle customer inquiries 24/7 without human intervention. It uses n8n workflows combined with Google Gemini models to pull accurate answers from a connected knowledge base stored in Google Docs, processes incoming messages instantly, retrieves relevant FAQ and support data, and sends personalized replies through Facebook Messenger ensuring fast, consistent, and reliable customer support.',
      highlights: [
        'Integrated directly into Facebook Page',
        'Responds to customer inquiries instantly',
        'Pulls accurate answers from knowledge base',
        'Uses Google Gemini for intelligent responses',
        'Retrieves FAQ data from Google Docs',
        'Sends personalized replies via Messenger',
        'Escalates complex queries to human support'
      ],
      tech: ['n8n', 'Google Gemini', 'Google Docs', 'Facebook Messenger API', 'Custom AI Agent'],
      imageKey: 'p4-image'
    },
    {
      id: 'p5',
      title: 'Automated Xero → Asana Financial Reports',
      icon: '📤',
      description: 'Seamless export of financial data to task management.',
      fullDescription: 'An automated workflow built in Make.com that retrieves account transactions from Xero\'s accounting platform via API, formats the data into professional CSV reports, automatically uploads the files to completed Asana tasks for easy access by the finance team, runs on a customizable schedule (daily/weekly), completely eliminates the manual reporting process, and maintains detailed export history for audit purposes.',
      highlights: [
        'Retrieves account transactions from Xero API',
        'Formats data into professional CSV reports',
        'Auto-uploads to completed Asana tasks',
        'Runs on schedule (daily/weekly)',
        'Eliminates manual reporting process',
        'Tracks all export history'
      ],
      tech: ['Make.com', 'Xero API', 'Asana API', 'CSV Processing', 'Automation'],
      imageKey: 'p5-image'
    },
    {
      id: 'p6',
      title: 'Auto Sort Gmail Attachments on Drives',
      icon: '📎',
      description: 'Intelligent file organization with AI-generated filenames.',
      fullDescription: 'An end-to-end automation using Make.com and Gemini AI that monitors incoming Gmail attachments, automatically generates descriptive and organized filenames using AI analysis of file content, stores files in properly organized Google Drive folders based on type and content, records detailed metadata in Google Sheets for easy searching and retrieval, supports multiple file types and formats, and auto-tags files based on intelligent content analysis.',
      highlights: [
        'Monitors incoming Gmail attachments',
        'Generates descriptive filenames with Gemini AI',
        'Stores files in organized Google Drive folders',
        'Records metadata in Google Sheets',
        'Supports multiple file types',
        'Auto-tags files based on content analysis'
      ],
      tech: ['Make.com', 'Gemini AI', 'Gmail API', 'Google Drive API', 'Google Sheets'],
      imageKey: 'p6-image'
    }
  ]

  const [selectedProject, setSelectedProject] = useState(null)
  const [projectImages, setProjectImages] = useState({})

  // Load project images from localStorage on mount
  useEffect(() => {
    const savedImages = {}
    featuredProjects.forEach(proj => {
      const saved = localStorage.getItem(`project-${proj.imageKey}`)
      if (saved) savedImages[proj.id] = saved
    })
    setProjectImages(savedImages)
  }, [])

  const handleProjectImageUpload = (e, projectId) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const imageData = event.target.result
        setProjectImages(prev => ({ ...prev, [projectId]: imageData }))
        // Find the project to get its imageKey
        const proj = featuredProjects.find(p => p.id === projectId)
        if (proj) {
          localStorage.setItem(`project-${proj.imageKey}`, imageData)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  // Close modal on Escape key
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape' && selectedProject) {
        closeModal()
      }
    }
    if (selectedProject) {
      document.addEventListener('keydown', handleEscapeKey)
    }
    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [selectedProject])

  return (
    <main id="portfolio-guide" className="pg-root">
      <div className="pg-layout">
        <section className="pg-left">

          {/* 1. Hero Section */}
          <section id="hero-section" className="pg-card hero">
            <div className="pg-icon">🏷️</div>
            <div className="hero-content">
              <div className="hero-meta">
                <h2 className="hero-name">RALPH T. GENEROSO</h2>
                <p className="hero-role">Workflow Automation Specialist</p>
                <p className="hero-location">Bulacan, Philippines</p>
              </div>
              <p className="hero-tagline">“I build scalable, no-code & low-code automations that save hundreds of hours using Zapier, Make, GoHighLevel & custom scripts.”</p>

              <div className="hero-ctas">
                <button className="btn btn-ghost" onClick={() => scrollTo('work-section')}>View Projects ↓</button>
                <a className="btn btn-primary" href="https://www.upwork.com/freelancers/~01216084bdbcb9cf83" target="_blank" rel="noreferrer">Hire Me on Upwork</a>
              </div>
            </div>
          </section>

          {/* 2. About Myself */}
          <section id="about-section" className="pg-card">
            <div className="pg-card-header">
              <div className="pg-icon">👤</div>
              <h3>About Myself</h3>
            </div>

            <div className="pg-about-content">
              <div className="pg-about-intro">
                <p className="pg-about-tagline">Results-Driven Workflow Automation Consultant</p>
                <p className="pg-about-main-text">
                  Specializing in end-to-end business process optimization. Expert-level proficiency with leading automation platforms like Zapier, Make, and GoHighLevel, complemented by strong technical skills in Google Apps Script and custom API development.
                </p>
              </div>

              <div className="pg-about-highlights">
                <div className="pg-about-highlight-item">
                  <div className="pg-highlight-icon">🎯</div>
                  <div className="pg-highlight-content">
                    <h4>My Goal</h4>
                    <p>Build robust, scalable workflows that maximize efficiency and free up time for both corporate clients and independent freelancers.</p>
                  </div>
                </div>

                <div className="pg-about-highlight-item">
                  <div className="pg-highlight-icon">⚡</div>
                  <div className="pg-highlight-content">
                    <h4>My Approach</h4>
                    <p>I combine technical expertise with business acumen to create automation solutions that deliver measurable results and lasting impact.</p>
                  </div>
                </div>

                <div className="pg-about-highlight-item">
                  <div className="pg-highlight-icon">🚀</div>
                  <div className="pg-highlight-content">
                    <h4>My Expertise</h4>
                    <p>From lead enrichment to AI-powered customer support, financial report automation, and intelligent file organization systems.</p>
                  </div>
                </div>
              </div>

              <div className="pg-about-cta">
                <p>Let's build something amazing together!</p>
                <a href="https://www.upwork.com/freelancers/~01216084bdbcb9cf83" target="_blank" rel="noreferrer" className="pg-about-btn">
                  Start a Project
                </a>
              </div>
            </div>
          </section>

          {/* 3. Tech Stack & Tools */}
          <section id="tech-section" className="pg-card">
            <div className="pg-card-header">
              <div className="pg-icon">{'< />'}</div>
              <h3>Tech Stack & Tools</h3>
            </div>

            <div className="pg-tech-grid">
              {technologies.map((tech, index) => (
                <div key={index} className="pg-tech-item" tabIndex={0} title={tech.name}>
                  <div className="pg-tech-icon">{tech.icon}</div>
                  <div className="pg-tech-info">
                    <h4 className="pg-tech-name">{tech.name}</h4>
                    <p className="pg-tech-category">{tech.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Work Experience & Featured Projects */}
          <section id="work-section" className="pg-card">
            <div className="pg-card-header">
              <div className="pg-icon">💼</div>
              <h3>Work Experience & Featured Projects</h3>
            </div>

            {/* Work Experiences */}
            <div className="pg-work-experiences">
              <h4 className="pg-subsection-title">Professional Experience</h4>
              {workExperiences.map((exp) => (
                <div key={exp.id} className="pg-work-item" tabIndex={0}>
                  <div className="pg-work-header">
                    <div className="pg-work-icon">{exp.icon}</div>
                    <div className="pg-work-meta">
                      <h5 className="pg-work-title">{exp.title}</h5>
                      <p className="pg-work-company">{exp.company}</p>
                      <span className="pg-work-period">{exp.period}</span>
                    </div>
                  </div>
                  <p className="pg-work-desc">{exp.description}</p>
                  <ul className="pg-highlights">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                  <div className="pg-tech-badges">
                    {exp.tech.map((t, i) => (
                      <span key={i} className="pg-tech-badge">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Featured Projects */}
            <div className="pg-featured-projects">
              <h4 className="pg-subsection-title">Self-Paced Learning Automation Projects</h4>
              {featuredProjects.map((proj) => (
                <div key={proj.id} className="pg-project-item" tabIndex={0} onClick={() => setSelectedProject(proj)}>
                  <div className="pg-project-header">
                    <div className="pg-project-icon">{proj.icon}</div>
                    <h5 className="pg-project-title">{proj.title}</h5>
                    <span className="pg-view-details-badge">View Details →</span>
                  </div>
                  <p className="pg-project-desc">{proj.description}</p>
                  <ul className="pg-highlights">
                    {proj.highlights.slice(0, 3).map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                    {proj.highlights.length > 3 && <li className="pg-more-items">+{proj.highlights.length - 3} more</li>}
                  </ul>
                  <div className="pg-tech-badges">
                    {proj.tech.map((t, i) => (
                      <span key={i} className="pg-tech-badge">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Educational Background */}
          <section id="edu-section" className="pg-card">
            <div className="pg-card-header">
              <div className="pg-icon">🎓</div>
              <h3>Educational Background</h3>
            </div>

            <div className="pg-edu-content">
              <div className="pg-edu-main">
                <h4 className="pg-edu-degree">Bachelor of Science in Computer Engineering</h4>
                <p className="pg-edu-institution">STI College Balagtas</p>
                <div className="pg-edu-meta">
                  <span className="pg-edu-badge graduation">Graduated 2025</span>
                </div>

                <div className="pg-edu-highlights">
                  <h5 className="pg-edu-section-title">Key Competencies</h5>
                  <ul className="pg-edu-list">
                    <li>API design and integration</li>
                    <li>Database design and optimization</li>
                    <li>System architecture and deployment</li>
                    <li>Software project management</li>
                    <li>CRM Specialist</li>
                  </ul>
                </div>

                <div className="pg-edu-highlights">
                  <h5 className="pg-edu-section-title">Technical Skills Developed</h5>
                  <div className="pg-edu-skills">
                    <span className="pg-skill-tag">React</span>
                    <span className="pg-skill-tag">JavaScript</span>
                    <span className="pg-skill-tag">Node.js</span>
                    <span className="pg-skill-tag">Git & GitHub</span>
                  </div>
                </div>

                <div className="pg-edu-highlights">
                  <h5 className="pg-edu-section-title">Focus Areas</h5>
                  <ul className="pg-edu-list">
                    <li>✓ Workflow Automation & Process Optimization</li>
                    <li>✓ API Development & Integration</li>
                  </ul>
                </div>
              </div>

              <div className="pg-edu-sidebar">
                <div className="pg-edu-stat">
                  <div className="pg-stat-number">4</div>
                  <div className="pg-stat-label">Years of Study</div>
                </div>
                <div className="pg-edu-stat">
                  <div className="pg-stat-number">15+</div>
                  <div className="pg-stat-label">Completed Projects</div>
                </div>
                <div className="pg-edu-stat">
                  <div className="pg-stat-number">100%</div>
                  <div className="pg-stat-label">Hands-On Learning</div>
                </div>
              </div>
            </div>
          </section>

          {/* 6. Contact Info */}
          <section id="contact-section" className="pg-card">
            <div className="pg-card-header">
              <div className="pg-icon">✉️</div>
              <h3>Contact Info</h3>
            </div>

            <div className="pg-contact-intro">
              <p>Let's connect and build something amazing together! Reach out through any of the channels below.</p>
            </div>

            <div className="pg-contact-grid">
              {/* Phone */}
              <div className="pg-contact-item">
                <div className="pg-contact-icon">📱</div>
                <div className="pg-contact-content">
                  <h4 className="pg-contact-label">Phone</h4>
                  <a href="tel:+63926546465" className="pg-contact-link">+63 926 546 4465</a>
                  <a href="tel:+639086589636" className="pg-contact-link">+63 908 658 9636</a>
                </div>
              </div>

              {/* Email */}
              <div className="pg-contact-item">
                <div className="pg-contact-icon">💌</div>
                <div className="pg-contact-content">
                  <h4 className="pg-contact-label">Email</h4>
                  <a href="mailto:ralphgeneroso0815@gmail.com" className="pg-contact-link">ralphgeneroso0815@gmail.com</a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="pg-contact-item">
                <div className="pg-contact-icon">💼</div>
                <div className="pg-contact-content">
                  <h4 className="pg-contact-label">LinkedIn</h4>
                  <a href="https://linkedin.com/in/ralph-g-522613392" target="_blank" rel="noreferrer" className="pg-contact-link">linkedin.com/in/ralph-g-522613392</a>
                </div>
              </div>

              {/* Upwork */}
              <div className="pg-contact-item">
                <div className="pg-contact-icon">🎯</div>
                <div className="pg-contact-content">
                  <h4 className="pg-contact-label">Upwork</h4>
                  <a href="https://upwork.com/freelancers/~01216084bdbcb9cf83" target="_blank" rel="noreferrer" className="pg-contact-link">upwork.com/ralph</a>
                </div>
              </div>

              {/* Location */}
              <div className="pg-contact-item">
                <div className="pg-contact-icon">📍</div>
                <div className="pg-contact-content">
                  <h4 className="pg-contact-label">Location</h4>
                  <p className="pg-contact-text">Bulacan, Philippines</p>
                </div>
              </div>

              {/* Languages */}
              <div className="pg-contact-item">
                <div className="pg-contact-icon">🌐</div>
                <div className="pg-contact-content">
                  <h4 className="pg-contact-label">Languages</h4>
                  <p className="pg-contact-text">Filipino (Native)</p>
                  <p className="pg-contact-text">English (Conversational)</p>
                </div>
              </div>
            </div>

            <div className="pg-contact-cta">
              <p className="pg-contact-cta-text">Ready to start your automation project?</p>
              <a href="https://www.upwork.com/freelancers/~01216084bdbcb9cf83" target="_blank" rel="noreferrer" className="pg-contact-btn">
                Hire Me on Upwork
              </a>
            </div>
          </section>

          <footer className="pg-note">
            <small>Ready-to-build portfolio structure – clean, fast, conversion-focused</small>
          </footer>
        </section>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="pg-modal-overlay" onClick={closeModal}>
          <div className="pg-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="pg-modal-close" 
              onClick={closeModal}
              aria-label="Close modal"
              title="Close (Esc)"
            >
              ✕
            </button>

            <div className="pg-modal-image-section">
              {projectImages[selectedProject.id] ? (
                <div className="pg-modal-image-wrapper">
                  <img src={projectImages[selectedProject.id]} alt={selectedProject.title} className="pg-modal-image" />
                  <label htmlFor={`project-image-${selectedProject.id}`} className="pg-upload-overlay">
                    📸 Change Image
                  </label>
                </div>
              ) : (
                <div className="pg-modal-image-placeholder">
                  <label htmlFor={`project-image-${selectedProject.id}`} className="pg-upload-label">
                    📸 Click to upload workflow image
                  </label>
                </div>
              )}
              <input
                type="file"
                id={`project-image-${selectedProject.id}`}
                accept="image/*"
                onChange={(e) => handleProjectImageUpload(e, selectedProject.id)}
                style={{ display: 'none' }}
              />
            </div>

            <div className="pg-modal-body">
              <div className="pg-modal-header">
                <div className="pg-modal-icon">{selectedProject.icon}</div>
                <div>
                  <h2 className="pg-modal-title">{selectedProject.title}</h2>
                  <p className="pg-modal-category">Automation Project</p>
                </div>
              </div>

              <div className="pg-modal-description">
                <h3>Overview</h3>
                <p>{selectedProject.fullDescription}</p>
              </div>

              <div className="pg-modal-highlights">
                <h3>Key Features & Capabilities</h3>
                <ul>
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>

              <div className="pg-modal-tech">
                <h3>Tech Stack</h3>
                <div className="pg-tech-badges">
                  {selectedProject.tech.map((t, i) => (
                    <span key={i} className="pg-tech-badge">{t}</span>
                  ))}
                </div>
              </div>

              <div className="pg-modal-cta">
                <a href="https://www.upwork.com/freelancers/~01216084bdbcb9cf83" target="_blank" rel="noreferrer" className="pg-modal-btn">
                  Interested? Hire Me on Upwork
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
