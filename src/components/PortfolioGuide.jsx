import React, { useState, useEffect } from 'react'
import './PortfolioGuide.css'

// Correct static imports from src/assets (these files exist in your project)
import p1Image from '../assets/p1-lead-enrichment.png'
import p2Image from '../assets/p2-content-repurposing.png'
import p3Image from '../assets/p3-social-media-ai.png'
import p4Image from '../assets/p4-facebook-messenger.png'
import p5Image from '../assets/p5-xero-asana.png'
import p6Image from '../assets/p6-gmail-attachments.png'
import porffImage from '../assets/PORFF.png'

// Static image map - always available, never missing
const staticProjectImages = {
  p1: p1Image,
  p2: p2Image,
  p3: p3Image,
  p4: p4Image,
  p5: p5Image,
  p6: p6Image,
}

// Simple inline SVG fallback (only used if no static image exists)
const fallbackImage = `data:image/svg+xml;utf8,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600"><rect width="100%" height="100%" fill="#0b0b0d"/><text x="50%" y="50%" fill="#66efff" font-size="36" font-family="Arial" text-anchor="middle" dominant-baseline="middle">No Image</text></svg>'
)}`

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
    }
  ]

  const [selectedProject, setSelectedProject] = useState(null)
  const [projectImages, setProjectImages] = useState({})
  const [sidebarImage, setSidebarImage] = useState(porffImage)

  // Initialize images from static imports (no localStorage / uploads)
  useEffect(() => {
    const initial = {}
    featuredProjects.forEach((proj) => {
      initial[proj.id] = staticProjectImages[proj.id] || fallbackImage
    })
    setProjectImages(initial)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // inject small styles scoped to hero two-column layout and sidebar box
  useEffect(() => {
    if (document.getElementById('pg-sidebar-styles')) return
    const style = document.createElement('style')
    style.id = 'pg-sidebar-styles'
    style.innerHTML = `
		/* Hero: two-column Description | Profile */
		#hero-section .hero-inner { display:flex; gap:1rem; align-items:flex-start; }
		#hero-section .hero-left { flex:1 1 auto; }
		#hero-section .hero-right { width:220px; flex:0 0 220px; }
		/* Sidebar/Box styling */
		.pg-sidebar-box { background:linear-gradient(180deg,#071021,#0b1220); border-radius:10px; padding:12px; border:1px solid rgba(255,255,255,0.04); box-shadow:0 6px 18px rgba(2,6,23,0.6); color:#fff; }
		.pg-sidebar-title { font-weight:700; font-size:0.95rem; margin-bottom:8px; color:#9ad9ff; }
		.pg-sidebar-image { width:100%; height:160px; object-fit:cover; border-radius:8px; display:block; background:#0f172a; }
		.pg-sidebar-input { margin-top:10px; display:flex; gap:8px; align-items:center; }
		.pg-sidebar-file { display:block; }
		.pg-sidebar-hint { font-size:0.78rem; opacity:0.8; margin-top:8px; color:#9fbdd8; }
		@media (max-width:900px) { #hero-section .hero-right { display:none; } }
	  `
    document.head.appendChild(style)
  }, [])

  // inject updated hero styles (description left, hexagon image right)
  useEffect(() => {
    if (document.getElementById('pg-hero-styles')) return
    const style = document.createElement('style')
    style.id = 'pg-hero-styles'
    style.innerHTML = `
      /* Hero two-column: left description, right hexagon image */
      #hero-section { padding: 28px; background: linear-gradient(180deg,#0b1014,#071018); color: #e6f6f8; border-radius: 12px; }
      #hero-section .hero-inner { display:flex; gap:2rem; align-items:center; justify-content:space-between; }
      #hero-section .hero-left { flex:1 1 60%; }
      #hero-section .greeting { color:#9fbdd8; font-size:0.95rem; margin-bottom:8px; }
      #hero-section .hero-name { font-size:2.2rem; margin:0; color:#00d4a6; font-weight:800; line-height:1; }
      #hero-section .hero-role { color:#bfeee0; margin:6px 0 0; font-weight:600; }
      #hero-section .hero-location { color:#9fbdd8; margin-top:6px; }
      #hero-section .hero-tagline { color:#cfeff0; margin:14px 0 18px; max-width:620px; font-size:1rem; line-height:1.4; }
      #hero-section .hero-ctas { display:flex; gap:10px; align-items:center; }
      #hero-section .btn-primary { background:#00d389; color:#052018; border-radius:10px; padding:10px 16px; box-shadow:0 8px 20px rgba(0,211,137,0.12); text-decoration:none; }
      #hero-section .btn-ghost { background:transparent; color:#aeeaf0; border:1px solid rgba(174,234,240,0.14); padding:9px 14px; border-radius:10px; }

      /* Hexagon container */
      #hero-section .hero-right { width:260px; flex: 0 0 260px; display:flex; align-items:center; justify-content:center; }
      .hexagon {
        width: 240px;
        height: 276px;
        display:block;
        clip-path: polygon(25% 6.7%,75% 6.7%,100% 50%,75% 93.3%,25% 93.3%,0% 50%);
        background: radial-gradient(circle at 35% 25%, rgba(0,212,137,0.12), transparent 30%), linear-gradient(135deg,#06b6d4,#00d4a6);
        box-shadow: 0 14px 40px rgba(2,6,23,0.5);
        border-radius:8px;
        position:relative;
        overflow:hidden;
        display:flex;
        align-items:center;
        justify-content:center;
      }
      .hexagon img { width: 220px; height:220px; object-fit:cover; border-radius:8px; transform: translateY(-8px); }

      @media (max-width:900px) {
        #hero-section .hero-inner { flex-direction:column; gap:12px; }
        #hero-section .hero-right { width:100%; display:flex; justify-content:center; }
        .hexagon { width: 200px; height:230px; }
      }
    `
    document.head.appendChild(style)
  }, [])

  // handler to preview selected image in sidebar (no persistence)
  const handleSidebarImageChange = (e) => {
    const file = e.target.files && e.target.files[0]
    if (!file) return
    if (!file.type.startsWith('image/')) return
    const reader = new FileReader()
    reader.onload = (ev) => setSidebarImage(ev.target.result)
    reader.readAsDataURL(file)
  }

  // new: open hidden file input (hexagon click) for profile preview
  const openSidebarFileDialog = () => {
    const input = document.getElementById('pg-sidebar-file')
    input?.click()
  }

  // new: keyboard handler for project cards to open modal on Enter / Space
  const handleProjectKeyDown = (e, proj) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setSelectedProject(proj)
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

  // Ensure any previously injected enhanced project styles are removed so we revert to the original simple design
  useEffect(() => {
    const injected = document.getElementById('pg-project-styles')
    if (injected && injected.parentNode) injected.parentNode.removeChild(injected)
  }, [])

  // Inject small style to improve contact link wrapping & visibility
  useEffect(() => {
    if (document.getElementById('pg-contact-link-styles')) return
    const s = document.createElement('style')
    s.id = 'pg-contact-link-styles'
    s.innerHTML = `
			/* Prevent awkward mid-word breaks for contact links */
			.pg-contact-link {
				display: inline-block;
				white-space: normal;
				overflow-wrap: anywhere;
				word-break: normal;
				max-width: 100%;
				color: inherit;
			}
			/* Ensure link visuals remain consistent */
			.pg-contact-link:hover { text-decoration: underline; }
		`
    document.head.appendChild(s)
  }, [])

  // Insert unified UI styles (colors, hover, focus, transitions)
  useEffect(() => {
    if (document.getElementById('pg-unified-styles')) return
    const style = document.createElement('style')
    style.id = 'pg-unified-styles'
    style.innerHTML = `
    :root{
      --pg-accent: #00d389;
      --pg-accent-2: #06b6d4;
      --pg-muted: #9fbdd8;
      --pg-bg-card: #071018;
      --pg-text: #e6f6f8;
      --pg-radius: 12px;
      --pg-glass: rgba(255,255,255,0.04);
      --pg-shadow: 0 12px 30px rgba(2,6,23,0.45);
      --pg-soft-shadow: 0 6px 18px rgba(2,6,23,0.28);
      --pg-transition: 180ms cubic-bezier(.2,.9,.3,1);
    }

    /* Buttons */
    .btn, .btn-primary, .btn-ghost {
      transition: transform var(--pg-transition), box-shadow var(--pg-transition), background-color var(--pg-transition), color var(--pg-transition);
      border-radius: 10px;
      cursor: pointer;
      font-weight: 600;
      -webkit-tap-highlight-color: transparent;
    }
    .btn-primary {
      background: linear-gradient(90deg,var(--pg-accent), var(--pg-accent-2));
      color: #052018;
      box-shadow: 0 10px 26px rgba(0,211,137,0.08);
      border: none;
    }
    .btn-primary:hover, .btn-primary:focus {
      transform: translateY(-4px) scale(1.01);
      box-shadow: 0 18px 42px rgba(0,211,137,0.14);
      outline: none;
    }
    .btn-ghost {
      background: transparent;
      border: 1px solid var(--pg-glass);
      color: var(--pg-text);
    }
    .btn-ghost:hover, .btn-ghost:focus {
      transform: translateY(-3px);
      box-shadow: var(--pg-soft-shadow);
      outline: none;
    }

    /* Project cards */
    .pg-project-item {
      transition: transform var(--pg-transition), box-shadow var(--pg-transition), border-color var(--pg-transition);
      border-radius: 10px;
      border: 1px solid rgba(15,23,42,0.04);
      background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
      box-shadow: 0 6px 18px rgba(2,6,23,0.04);
    }
    .pg-project-item:hover, .pg-project-item:focus {
      transform: translateY(-8px);
      box-shadow: var(--pg-shadow);
      border-color: rgba(0,211,137,0.08);
      outline: none;
    }

    /* Tech badges */
    .pg-tech-badge {
      transition: background-color var(--pg-transition), color var(--pg-transition), transform var(--pg-transition);
      background: linear-gradient(90deg, rgba(238,242,255,0.7), rgba(232,240,255,0.6));
      color: #2e2e8b;
      padding: 5px 10px;
      border-radius: 999px;
      font-size: 0.8rem;
      display:inline-flex;
      align-items:center;
    }
    .pg-tech-badge:hover, .pg-tech-badge:focus {
      background: linear-gradient(90deg,var(--pg-accent-2),var(--pg-accent));
      color: white;
      transform: translateY(-3px) scale(1.02);
      outline: none;
    }

    /* Hexagon profile hover */
    .hexagon {
      transition: transform var(--pg-transition), box-shadow var(--pg-transition), filter var(--pg-transition);
      will-change: transform;
    }
    .hexagon:hover, .hexagon:focus {
      transform: translateY(-6px) scale(1.02);
      box-shadow: 0 22px 48px rgba(2,6,23,0.5);
      filter: saturate(1.06);
      outline: none;
    }

    /* Modal improvements */
    .pg-modal-content {
      transition: transform var(--pg-transition), box-shadow var(--pg-transition);
      border-radius: var(--pg-radius);
      box-shadow: 0 24px 60px rgba(2,6,23,0.6);
    }
    .pg-modal-close {
      transition: transform var(--pg-transition), color var(--pg-transition);
    }
    .pg-modal-close:hover, .pg-modal-close:focus {
      transform: rotate(90deg) scale(1.05);
      color: var(--pg-accent);
      outline: none;
    }

    /* Links */
    a[rel~="noopener"], .pg-contact-link {
      transition: color var(--pg-transition), text-decoration var(--pg-transition);
    }
    a[rel~="noopener"]:hover, .pg-contact-link:hover {
      color: var(--pg-accent-2);
      text-decoration: underline;
    }

    /* Focus styles for accessibility */
    .pg-project-item:focus, .hexagon:focus, .btn:focus, .pg-tech-badge:focus, .pg-contact-link:focus {
      box-shadow: 0 0 0 4px rgba(0,211,137,0.09);
    }

    /* Small screens tweak */
    @media (max-width:640px) {
      .pg-project-item:hover { transform: none; box-shadow: 0 8px 20px rgba(2,6,23,0.08); }
      .hexagon:hover { transform: none; box-shadow: 0 8px 20px rgba(2,6,23,0.08); }
    }
  `
    document.head.appendChild(style)
  }, [])

  // new: explicit open handlers for contact links (mailto / external)
  const openEmail = (e) => {
    if (e && e.preventDefault) e.preventDefault()
    window.location.href = 'mailto:ralphgeneroso0815@gmail.com'
  }

  const openLinkedIn = (e) => {
    if (e && e.preventDefault) e.preventDefault()
    window.open('https://www.linkedin.com/in/ralph-g-522613392', '_blank', 'noopener')
  }

  const openUpwork = (e) => {
    if (e && e.preventDefault) e.preventDefault()
    window.open('https://www.upwork.com/freelancers/~01216084bdbcb9cf83', '_blank', 'noopener')
  }

  return (
    <main id="portfolio-guide" className="pg-root">
      <div className="pg-layout">
        <section className="pg-left">

          {/* 1. Hero Section */}
          <section id="hero-section" className="pg-card hero">
            <div className="hero-inner">
              <div className="hero-left">
                <div className="greeting">Hello, I'm</div>
                <h1 className="hero-name">RALPH</h1>
                <div className="hero-role">Workflow Automation Specialist</div>
                <div className="hero-location">Bulacan, Philippines</div>

                <p className="hero-tagline">
                  “I build scalable, no-code & low-code automations that save hundreds of hours using Zapier, Make, GoHighLevel & custom scripts.”
                </p>

                <div className="hero-ctas">
                  <button className="btn btn-ghost" onClick={() => scrollTo('work-section')}>View Projects ↓</button>
                  <a className="btn btn-primary" href="https://www.upwork.com/freelancers/~01216084bdbcb9cf83" target="_blank" rel="noopener noreferrer" aria-label="Let's Talk on Upwork">Let's Talk</a>
                </div>
              </div>

              <div className="hero-right" aria-label="Profile image">
                <div
                  className="hexagon"
                  role="button"
                  tabIndex={0}
                  aria-label="Change profile image"
                  onClick={openSidebarFileDialog}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openSidebarFileDialog() } }}
                >
                  <img src={sidebarImage} alt="Profile" />
                </div>
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
                <a href="https://www.upwork.com/freelancers/~01216084bdbcb9cf83" target="_blank" rel="noopener noreferrer" className="pg-about-btn" aria-label="Start a project on Upwork">
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
                <div
                  key={proj.id}
                  className="pg-project-item"
                  tabIndex={0}
                  onClick={() => setSelectedProject(proj)}
                  onKeyDown={(e) => handleProjectKeyDown(e, proj)}
                  role="button"
                  aria-label={`Open details for ${proj.title}`}
                >
                  <div className="pg-project-header">
                    <div className="pg-project-icon">{proj.icon}</div>
                    <h5 className="pg-project-title">{proj.title}</h5>
                    <span className="pg-view-details-badge">View Details →</span>
                  </div>
                  <p className="pg-project_desc">{proj.description}</p>
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
                  <a href="tel:+63926546465" className="pg-contact-link" aria-label="Call primary number">+63 926 546 4465</a>
                  <a href="tel:+639086589636" className="pg-contact-link" aria-label="Call secondary number">+63 908 658 9636</a>
                </div>
              </div>

              {/* Email */}
              <div className="pg-contact-item">
                <div className="pg-contact-icon">💌</div>
                <div className="pg-contact-content">
                  <h4 className="pg-contact-label">Email</h4>
                  <a
                    href="mailto:ralphgeneroso0815@gmail.com"
                    className="pg-contact-link"
                    aria-label="Send email to ralphgeneroso0815 at gmail"
                    onClick={openEmail}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openEmail() } }}
                  >
                    ralphgeneroso0815@gmail.com
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="pg-contact-item">
                <div className="pg-contact-icon">💼</div>
                <div className="pg-contact-content">
                  <h4 className="pg-contact-label">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/ralph-g-522613392"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pg-contact-link"
                    aria-label="Open LinkedIn profile in a new tab"
                    onClick={openLinkedIn}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLinkedIn() } }}
                  >
                    www.linkedin.com/in/ralph-g-522613392
                  </a>
                </div>
              </div>

              {/* Upwork */}
              <div className="pg-contact-item">
                <div className="pg-contact-icon">🎯</div>
                <div className="pg-contact-content">
                  <h4 className="pg-contact-label">Upwork</h4>
                  <a
                    href="https://www.upwork.com/freelancers/~01216084bdbcb9cf83"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pg-contact-link"
                    aria-label="Open Upwork profile in a new tab"
                    onClick={openUpwork}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openUpwork() } }}
                  >
                    https://www.upwork.com/freelancers/~01216084bdbcb9cf83
                  </a>
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
              <a
                href="https://www.upwork.com/freelancers/~01216084bdbcb9cf83"
                target="_blank"
                rel="noopener noreferrer"
                className="pg-contact-btn"
                aria-label="Hire me on Upwork"
              >
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

            {/* simplified modal image section - static only (removed upload UI & file input) */}
            <div className="pg-modal-image-section">
              <div className="pg-modal-image-wrapper">
                <img
                  src={projectImages[selectedProject.id]}
                  alt={selectedProject.title}
                  className="pg-modal-image"
                />
              </div>
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
                <a href="https://www.upwork.com/freelancers/~01216084bdbcb9cf83" target="_blank" rel="noopener noreferrer" className="pg-modal-btn" aria-label="Hire me on Upwork">
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
