import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiAward,
  FiChevronRight,
  FiDownload,
  FiEye,
  FiCheckCircle,
  FiX,
  FiCalendar,
  FiFileText,
  FiCpu,
  FiCode,
  FiLayers,
} from "react-icons/fi";
import "../styles/new-pages.css";
import "../styles/achievements.css";

const CERTIFICATES_DATA = [
  {
    id: "oracle-genai",
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle University",
    date: "September 17, 2025",
    category: "ai",
    type: "Industry Certification",
    credentialId: "102654027OCI25GAIOCP",
    pdfUrl: "/certificates/Oracle_Cloud_Generative_AI_Professional.pdf",
    description:
      "Recognized by Oracle Corporation as an Oracle Certified Professional in Generative AI on OCI, demonstrating deep expertise in LLM architectures, fine-tuning, retrieval-augmented generation (RAG), and cloud AI solution deployment.",
    skills: ["Generative AI", "OCI", "LLMs", "RAG", "Prompt Engineering"],
    icon: <FiCpu />,
    verified: true,
  },
  {
    id: "sih-2026",
    title: "Internal Smart India Hackathon 2026 (SIH 2026)",
    issuer: "AIC-GBU Incubation Centre & CRC, Gautam Buddha University",
    date: "September 12, 2026",
    category: "hackathons",
    type: "National Hackathon",
    credentialId: "AIC-GBU / CRC / SIH-2026 (Team SAMARTH)",
    pdfUrl: "/certificates/Smart_India_Hackathon_2026_Certificate.png",
    description:
      "Selected and participated in the Internal Smart India Hackathon 2026, organized by AIC-GBU Incubation Centre and Corporate Relations Cell at Gautam Buddha University. Represented Team SAMARTH to ideate and prototype high-impact technological solutions for national challenges.",
    skills: ["Smart India Hackathon", "Team SAMARTH", "Prototyping", "Problem Solving", "MoE / AICTE"],
    icon: <FiAward />,
    verified: true,
  },
  {
    id: "sih-2025",
    title: "Internal Smart India Hackathon 2025 (SIH 2025)",
    issuer: "Corporate Relations Cell, USICT, Gautam Buddha University",
    date: "September 19-20, 2025",
    category: "hackathons",
    type: "National Hackathon",
    credentialId: "GBU/CRC/SIH/2025/130 (Team CodeX)",
    pdfUrl: "/certificates/Smart_India_Hackathon_2025_Certificate.jpg",
    description:
      "Awarded Certificate of Participation in the Internal Smart India Hackathon 2025 organized by Corporate Relations Cell at University School of Information and Communication Technology (USICT), Gautam Buddha University. Competed as part of Team CodeX in an intense hackathon solving complex technological problem statements.",
    skills: ["Smart India Hackathon", "Team CodeX", "Full-Stack Dev", "Innovation", "USICT GBU"],
    icon: <FiAward />,
    verified: true,
  },
  {
    id: "krishan-enterprises",
    title: "Web Development & Management Summer Training Letter",
    issuer: "Krishan Enterprises",
    date: "July 01, 2026 – August 28, 2026",
    category: "experience",
    type: "Summer Training",
    credentialId: "KE/ST/2026 | Verified 30 Aug 2026",
    pdfUrl: "/certificates/Krishan_Enterprises_Summer_Training_Letter.png",
    description:
      "Successfully completed an extensive Summer Training program at Krishan Enterprises. Led the development and operational management of the live corporate web platform (krishanenterprises.in), integrated online payment processing workflows, and maintained Annual Maintenance Contract (AMC) operations.",
    skills: ["Website Management", "Payment Methods", "AMC Operations", "Live Web Deployment"],
    icon: <FiCode />,
    verified: true,
  },
  {
    id: "bcg-genai",
    title: "BCG X - GenAI Job Simulation Certificate",
    issuer: "BCG X & Forage",
    date: "August 22, 2025",
    category: "ai",
    type: "Job Simulation",
    credentialId: "Ej6nYrEFFvXmmt9qs",
    verificationCode: "74EMuzfkvvLGHAmv9",
    pdfUrl: "/certificates/BCG_GenAI_Job_Simulation.pdf",
    description:
      "Completed practical engineering tasks with BCG X: enterprise data extraction, exploratory financial data analysis, and building an AI-powered financial chatbot for business intelligence.",
    skills: ["AI Chatbot", "Data Extraction", "GenAI Analysis", "Python"],
    icon: <FiAward />,
    verified: true,
  },
  {
    id: "codveda-internship",
    title: "Full-Stack Development Internship Offer Letter",
    issuer: "Codveda Technologies",
    date: "September 12, 2025",
    category: "experience",
    type: "Internship Offer",
    credentialId: "CV/A1/41666",
    pdfUrl: "/certificates/Codveda_Internship_Offer_Letter.pdf",
    description:
      "Selected as Full-Stack Development Intern at Codveda Technologies to architect front-end and back-end modules, integrate scalable APIs, optimize database queries, and deliver robust web products.",
    skills: ["Full-Stack Dev", "API Integration", "Database Optimization", "Web Apps"],
    icon: <FiCode />,
    verified: true,
  },
  {
    id: "codsoft-internship",
    title: "Web Development Internship Certificate of Completion",
    issuer: "CodSoft",
    date: "October 08, 2025",
    category: "experience",
    type: "Internship Certificate",
    credentialId: "4c3f877",
    pdfUrl: "/certificates/CodSoft_Web_Development_Internship.pdf",
    description:
      "Successfully completed a 4-week virtual internship program in Web Development (05/09/2025 to 05/10/2025) with wonderful remarks at CodSoft, contributing to live development tasks and web projects.",
    skills: ["Web Development", "HTML/CSS", "JavaScript", "Frontend Engineering"],
    icon: <FiAward />,
    verified: true,
  },
  {
    id: "infosys-traffic-light",
    title: "Traffic Light System Course Completion Certificate",
    issuer: "Infosys Springboard",
    date: "September 03, 2025",
    category: "web",
    type: "Course Certificate",
    credentialId: "verify.onwingspan.com",
    pdfUrl: "/certificates/Infosys_Springboard_Traffic_Light_System.pdf",
    description:
      "Successfully completed the Traffic Light System course on Infosys Springboard platform, demonstrating logic design, state machines, automated signal simulation, and algorithmic implementation.",
    skills: ["Traffic Light System", "State Control", "Logic & Simulation", "Infosys Springboard"],
    icon: <FiLayers />,
    verified: true,
  },
  {
    id: "simplilearn-js",
    title: "JavaScript for Beginners Certificate",
    issuer: "Simplilearn SkillUp",
    date: "February 07, 2026",
    category: "web",
    type: "Course Certificate",
    credentialId: "9814356",
    pdfUrl: "/certificates/Simplilearn_JavaScript_for_Beginners.pdf",
    description:
      "Demonstrated proficiency in core JavaScript fundamentals, modern ES6+ concepts, DOM manipulation, asynchronous programming, event handling, and dynamic clientside logic.",
    skills: ["JavaScript", "ES6+", "DOM Manipulation", "Frontend Logic"],
    icon: <FiCode />,
    verified: true,
  },
  {
    id: "simplilearn-php",
    title: "Introduction to PHP Course Completion",
    issuer: "Simplilearn SkillUp",
    date: "January 25, 2026",
    category: "web",
    type: "Course Certificate",
    credentialId: "9758416",
    pdfUrl: "/certificates/Simplilearn_Introduction_to_PHP.pdf",
    description:
      "Demonstrated strong backend programming fundamentals, server-side scripting, syntax, form processing, and web integration with PHP.",
    skills: ["PHP", "Backend Scripting", "Web Development", "Server-Side Logic"],
    icon: <FiFileText />,
    verified: true,
  },
  {
    id: "simplilearn-css",
    title: "Introduction to CSS Certificate",
    issuer: "Simplilearn SkillUp",
    date: "February 03, 2026",
    category: "web",
    type: "Course Certificate",
    credentialId: "9793914",
    pdfUrl: "/certificates/Simplilearn_Introduction_to_CSS.pdf",
    description:
      "Certified in modern CSS styling, responsive layout principles, Flexbox, CSS Grid, media queries, animations, and aesthetic UI interface styling.",
    skills: ["CSS3", "Responsive Design", "Flexbox", "Grid", "Animations"],
    icon: <FiLayers />,
    verified: true,
  },
  {
    id: "simplilearn-html",
    title: "Introduction to HTML Certificate",
    issuer: "Simplilearn SkillUp",
    date: "February 02, 2026",
    category: "web",
    type: "Course Certificate",
    credentialId: "9788704",
    pdfUrl: "/certificates/Simplilearn_Introduction_to_HTML.pdf",
    description:
      "Certified in semantic HTML5 markup, document structure, accessible web elements, forms, multimedia integration, and SEO-friendly web formatting.",
    skills: ["HTML5", "Semantic Web", "Forms & Media", "SEO Basics"],
    icon: <FiFileText />,
    verified: true,
  },
];

const CATEGORIES = [
  { id: "all", label: "All Credentials" },
  { id: "hackathons", label: "Hackathons & Competitions" },
  { id: "experience", label: "Internships & Experience" },
  { id: "ai", label: "AI & GenAI" },
  { id: "web", label: "Web & Programming" },
];

function AchievementsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeModalPdf, setActiveModalPdf] = useState(null);
  const [activeModalTitle, setActiveModalTitle] = useState("");

  const filteredCertificates =
    selectedCategory === "all"
      ? CERTIFICATES_DATA
      : CERTIFICATES_DATA.filter((c) => c.category === selectedCategory);

  const openPreview = (pdfUrl, title) => {
    setActiveModalPdf(pdfUrl);
    setActiveModalTitle(title);
  };

  const closeModal = () => {
    setActiveModalPdf(null);
    setActiveModalTitle("");
  };

  return (
    <div className="dedicated-page">
      {/* Page Hero Header */}
      <section className="page-hero-banner">
        <div className="page-hero-container">
          <div className="page-breadcrumbs">
            <Link to="/">Home</Link>
            <FiChevronRight size={12} />
            <span className="active">Achievements & Certificates</span>
          </div>

          <div className="page-badge-pill">
            <span className="pulse-dot"></span>
            Honors & Credentials
          </div>

          <h1 className="page-hero-title">
            Certificates & <span>Milestones</span>
          </h1>

          <p className="page-hero-desc">
            A comprehensive record of my verified industry certifications, job simulations,
            corporate internships, and professional technical qualifications.
          </p>

          <div className="page-highlight-chips">
            <span className="page-chip">
              <FiCheckCircle /> {CERTIFICATES_DATA.length} Verified Credentials
            </span>
            <span className="page-chip">
              <FiAward /> 2x Smart India Hackathon
            </span>
            <span className="page-chip">
              <FiCpu /> Oracle Certified GenAI
            </span>
            <span className="page-chip">
              <FiCode /> Summer Training & Internships
            </span>
          </div>

          {/* Quick Stats Grid */}
          <div className="achievements-stats-grid">
            <div className="achievement-stat-card">
              <div className="stat-icon-wrapper">
                <FiCheckCircle />
              </div>
              <div className="stat-info">
                <span className="stat-value">{CERTIFICATES_DATA.length}</span>
                <span className="stat-label">Total Credentials</span>
              </div>
            </div>

            <div className="achievement-stat-card">
              <div className="stat-icon-wrapper">
                <FiAward />
              </div>
              <div className="stat-info">
                <span className="stat-value">2</span>
                <span className="stat-label">Hackathons & SIH</span>
              </div>
            </div>

            <div className="achievement-stat-card">
              <div className="stat-icon-wrapper">
                <FiCode />
              </div>
              <div className="stat-info">
                <span className="stat-value">3</span>
                <span className="stat-label">Internships & Training</span>
              </div>
            </div>

            <div className="achievement-stat-card">
              <div className="stat-icon-wrapper">
                <FiCpu />
              </div>
              <div className="stat-info">
                <span className="stat-value">2</span>
                <span className="stat-label">AI & GenAI Certifications</span>
              </div>
            </div>

            <div className="achievement-stat-card">
              <div className="stat-icon-wrapper">
                <FiLayers />
              </div>
              <div className="stat-info">
                <span className="stat-value">5</span>
                <span className="stat-label">Web Dev & Tech Courses</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Certificates Content Section */}
      <section className="extra-section">
        <div className="extra-container">
          <div className="extra-header">
            <h2 className="extra-title">
              Verified <span>Credentials</span> & Documents
            </h2>
            <p className="extra-subtitle">
              Explore individual credentials below with direct document previews and certificate downloads.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="achievements-filter-wrapper">
            <div className="achievements-filter-bar">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  className={`filter-btn ${selectedCategory === cat.id ? "active" : ""}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Certificates Grid */}
          <div className="certificates-grid">
            {filteredCertificates.map((cert) => (
              <div key={cert.id} className="cert-card">
                {/* Card Top Preview / Issuer Area */}
                <div className="cert-card-preview">
                  <div className="cert-issuer-badge">
                    <FiCheckCircle size={14} />
                    {cert.issuer}
                  </div>

                  <span className="cert-type-pill">{cert.type}</span>

                  <div className="cert-preview-icon">{cert.icon}</div>

                  <div className="cert-preview-headline">
                    <span className="cert-date">
                      <FiCalendar size={13} />
                      {cert.date}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="cert-card-body">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-description">{cert.description}</p>

                  {/* Skills Covered */}
                  <div className="cert-skills-tags">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="cert-tag">
                        #{skill}
                      </span>
                    ))}
                  </div>

                  {/* Verification / Credential ID */}
                  {cert.credentialId && (
                    <div className="cert-verification-row">
                      <span className="cert-code-label">Credential ID:</span>
                      <span className="cert-code-value">{cert.credentialId}</span>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="cert-card-actions">
                    <button
                      className="cert-btn cert-btn-primary"
                      onClick={() => openPreview(cert.pdfUrl, cert.title)}
                    >
                      <FiEye size={15} />
                      Preview Document
                    </button>

                    <a
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-btn cert-btn-secondary"
                      download
                    >
                      <FiDownload size={15} />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Preview Modal */}
      {activeModalPdf && (
        <div className="cert-modal-backdrop" onClick={closeModal}>
          <div className="cert-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="cert-modal-header">
              <div className="cert-modal-title">
                <FiFileText color="#38bdf8" />
                <span>{activeModalTitle}</span>
              </div>
              <button
                className="cert-modal-close-btn"
                onClick={closeModal}
                aria-label="Close Preview"
              >
                <FiX />
              </button>
            </div>
            <div className="cert-modal-body">
              {activeModalPdf && /\.(png|jpe?g|webp)$/i.test(activeModalPdf) ? (
                <div className="cert-modal-img-container">
                  <img
                    src={activeModalPdf}
                    alt={activeModalTitle}
                    className="cert-modal-img"
                  />
                </div>
              ) : (
                <iframe
                  src={`${activeModalPdf}#toolbar=1`}
                  title={activeModalTitle}
                  className="cert-modal-iframe"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AchievementsPage;
