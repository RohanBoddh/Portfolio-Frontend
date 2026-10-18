import { Link } from "react-router-dom";
import {
  FiChevronRight,
  FiFolder,
  FiCode,
  FiExternalLink,
  FiCheckCircle,
} from "react-icons/fi";
import Projects from "../components/Projects";
import "../styles/new-pages.css";

function ProjectsPage() {
  return (
    <div className="dedicated-page">
      {/* Page Hero Header */}
      <section className="page-hero-banner">
        <div className="page-hero-container">
          <div className="page-breadcrumbs">
            <Link to="/">Home</Link>
            <FiChevronRight size={12} />
            <span className="active">Projects</span>
          </div>

          <div className="page-badge-pill">
            <span className="pulse-dot"></span>
            Portfolio Showcase
          </div>

          <h1 className="page-hero-title">
            Featured Projects & <span>Case Studies</span>
          </h1>

          <p className="page-hero-desc">
            Explore live applications, production dashboards, and full-stack solutions
            built with modern web technologies, scalable architectures, and clean code.
          </p>

          <div className="page-highlight-chips">
            <span className="page-chip">
              <FiFolder /> Full-Stack Applications
            </span>
            <span className="page-chip">
              <FiCode /> React + Node.js Architectures
            </span>
            <span className="page-chip">
              <FiExternalLink /> Live Deployments
            </span>
            <span className="page-chip">
              <FiCheckCircle /> Real-World Problem Solvers
            </span>
          </div>
        </div>
      </section>

      {/* Main Projects Component */}
      <Projects />

      {/* Project Standards Overview */}
      <section className="extra-section">
        <div className="extra-container">
          <div className="extra-title-bar">
            <h3>Development Highlights</h3>
            <p>Quality benchmarks applied to every application I build</p>
          </div>

          <div className="extra-cards-grid">
            <div className="extra-card">
              <div className="extra-card-icon">
                <FiCode />
              </div>
              <h4>End-to-End Type & Logic Safety</h4>
              <p>
                Strict error handling, input sanitation on client and server, and
                consistent validation prevent edge-case failures.
              </p>
            </div>

            <div className="extra-card">
              <div className="extra-card-icon">
                <FiFolder />
              </div>
              <h4>Secure Authentication & Roles</h4>
              <p>
                Industry-standard JWT authentication, bcrypt password hashing, and
                protected routes for role-based dashboard access.
              </p>
            </div>

            <div className="extra-card">
              <div className="extra-card-icon">
                <FiCheckCircle />
              </div>
              <h4>Responsive Mobile First</h4>
              <p>
                Meticulous testing across mobile, tablet, and desktop views ensures
                fluid layouts and intuitive navigation everywhere.
              </p>
            </div>

            <div className="extra-card">
              <div className="extra-card-icon">
                <FiExternalLink />
              </div>
              <h4>Continuous Deployment Ready</h4>
              <p>
                Configured with environment variable safety, optimized production builds,
                and seamless hosting on Vercel and cloud platforms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectsPage;
