import { Link } from "react-router-dom";
import {
  FiChevronRight,
  FiMail,
  FiMessageSquare,
  FiClock,
  FiMapPin,
  FiCheckCircle,
} from "react-icons/fi";
import Contact from "../components/Contact";
import "../styles/new-pages.css";

function ContactPage() {
  return (
    <div className="dedicated-page">
      {/* Page Hero Header */}
      <section className="page-hero-banner">
        <div className="page-hero-container">
          <div className="page-breadcrumbs">
            <Link to="/">Home</Link>
            <FiChevronRight size={12} />
            <span className="active">Contact</span>
          </div>

          <div className="page-badge-pill">
            <span className="pulse-dot"></span>
            Communication & Inquiries
          </div>

          <h1 className="page-hero-title">
            Let's Talk About Your <span>Next Project</span>
          </h1>

          <p className="page-hero-desc">
            Have a project in mind, an opportunity, or just want to connect?
            Fill out the form below or reach out directly via email.
          </p>

          <div className="page-highlight-chips">
            <span className="page-chip">
              <FiClock /> Rapid Response within 24 Hours
            </span>
            <span className="page-chip">
              <FiCheckCircle /> Available for Full-Time & Freelance
            </span>
            <span className="page-chip">
              <FiMapPin /> Open to Remote Work
            </span>
            <span className="page-chip">
              <FiMail /> rohanboddh9@gmail.com
            </span>
          </div>
        </div>
      </section>

      {/* Main Working Contact Component */}
      <Contact />

      {/* Extra Useful FAQs / Direct Info */}
      <section className="extra-section">
        <div className="extra-container">
          {/* Direct One-Click Email Banner */}
          <div className="contact-fast-banner">
            <div className="contact-fast-content">
              <h4>Prefer writing via your own email client?</h4>
              <p>
                Click directly to launch your default mail app addressed to{" "}
                <strong>rohanboddh9@gmail.com</strong>.
              </p>
            </div>
            <a
              href="mailto:rohanboddh9@gmail.com?subject=Portfolio%20Inquiry"
              className="contact-fast-btn"
            >
              <FiMail /> Open Email App
            </a>
          </div>

          <div className="extra-title-bar">
            <h3>Good to Know</h3>
            <p>Details about availability, communication, and response turnaround</p>
          </div>

          <div className="extra-cards-grid">
            <div className="extra-card">
              <div className="extra-card-icon">
                <FiClock />
              </div>
              <h4>Response Time</h4>
              <p>
                I review all submitted messages daily and typically respond within
                a few hours, never exceeding 24 hours.
              </p>
            </div>

            <div className="extra-card">
              <div className="extra-card-icon">
                <FiMessageSquare />
              </div>
              <h4>Project Scoping</h4>
              <p>
                Whether you have a fully fleshed-out specification or just an early
                concept, I'm glad to discuss possibilities.
              </p>
            </div>

            <div className="extra-card">
              <div className="extra-card-icon">
                <FiCheckCircle />
              </div>
              <h4>Roles & Availability</h4>
              <p>
                Available for full-stack developer roles, internships, frontend
                specialization, and select freelance builds.
              </p>
            </div>

            <div className="extra-card">
              <div className="extra-card-icon">
                <FiMapPin />
              </div>
              <h4>Location & Remote</h4>
              <p>
                Based in India, available worldwide for remote collaboration and
                flexible cross-timezone meetings.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
