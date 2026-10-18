import { Link } from "react-router-dom";
import {
  FiChevronRight,
  FiLayout,
  FiServer,
  FiZap,
  FiArrowRight,
  FiShield,
} from "react-icons/fi";
import Services from "../components/Services";
import "../styles/new-pages.css";

function ServicesPage() {
  return (
    <div className="dedicated-page">
      {/* Page Hero Header */}
      <section className="page-hero-banner">
        <div className="page-hero-container">
          <div className="page-breadcrumbs">
            <Link to="/">Home</Link>
            <FiChevronRight size={12} />
            <span className="active">Services</span>
          </div>

          <div className="page-badge-pill">
            <span className="pulse-dot"></span>
            Professional Services
          </div>

          <h1 className="page-hero-title">
            What I Can Build & <span>Deliver For You</span>
          </h1>

          <p className="page-hero-desc">
            End-to-end full stack web development tailored to modern performance,
            responsive user interfaces, and robust backend integrations.
          </p>

          <div className="page-highlight-chips">
            <span className="page-chip">
              <FiLayout /> Responsive Web Design
            </span>
            <span className="page-chip">
              <FiServer /> REST API Development
            </span>
            <span className="page-chip">
              <FiZap /> Fast Page Speed
            </span>
            <span className="page-chip">
              <FiShield /> Secure Architectures
            </span>
          </div>
        </div>
      </section>

      {/* Main Services Component */}
      <Services />

      {/* 4-Step Development Workflow */}
      <section className="extra-section">
        <div className="extra-container">
          <div className="extra-title-bar">
            <h3>How I Work</h3>
            <p>A transparent and structured development lifecycle from concept to delivery</p>
          </div>

          <div className="workflow-grid">
            <div className="workflow-card">
              <div className="workflow-step-num">01</div>
              <h4>Discovery & Planning</h4>
              <p>
                Understanding your goals, target audience, technical requirements, and
                establishing clear delivery milestones.
              </p>
            </div>

            <div className="workflow-card">
              <div className="workflow-step-num">02</div>
              <h4>Architecture & UI Design</h4>
              <p>
                Structuring component hierarchies, database schemas, and intuitive
                visual layouts before writing logic.
              </p>
            </div>

            <div className="workflow-card">
              <div className="workflow-step-num">03</div>
              <h4>Development & Integration</h4>
              <p>
                Writing clean, modular code connecting frontend interfaces to robust
                backend endpoints with real-time feedback.
              </p>
            </div>

            <div className="workflow-card">
              <div className="workflow-step-num">04</div>
              <h4>Testing & Deployment</h4>
              <p>
                Rigorous testing across screen resolutions, performance audit checks,
                and smooth launch on production hosting.
              </p>
            </div>
          </div>

          {/* Quick Contact CTA */}
          <div className="contact-fast-banner" style={{ marginTop: "40px" }}>
            <div className="contact-fast-content">
              <h4>Ready to bring your project idea to life?</h4>
              <p>Let's collaborate to build something fast, beautiful, and functional.</p>
            </div>
            <Link to="/contact" className="contact-fast-btn">
              Start a Conversation <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
