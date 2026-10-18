import { Link } from "react-router-dom";
import {
  FiChevronRight,
  FiCode,
  FiServer,
  FiDatabase,
  FiTool,
} from "react-icons/fi";
import Skills from "../components/Skills";
import "../styles/new-pages.css";

function SkillsPage() {
  return (
    <div className="dedicated-page">
      {/* Page Hero Header */}
      <section className="page-hero-banner">
        <div className="page-hero-container">
          <div className="page-breadcrumbs">
            <Link to="/">Home</Link>
            <FiChevronRight size={12} />
            <span className="active">Skills</span>
          </div>

          <div className="page-badge-pill">
            <span className="pulse-dot"></span>
            Technical Expertise
          </div>

          <h1 className="page-hero-title">
            My Technical <span>Arsenal & Stack</span>
          </h1>

          <p className="page-hero-desc">
            A comprehensive overview of the modern languages, frameworks, databases,
            and tooling I utilize to engineer scalable full-stack web applications.
          </p>

          <div className="page-highlight-chips">
            <span className="page-chip">
              <FiCode /> React 19 & JavaScript
            </span>
            <span className="page-chip">
              <FiServer /> Node.js & Express
            </span>
            <span className="page-chip">
              <FiDatabase /> MongoDB & Atlas
            </span>
            <span className="page-chip">
              <FiTool /> Git, Vite & REST APIs
            </span>
          </div>
        </div>
      </section>

      {/* Main Skills Component */}
      <Skills />

      {/* Skills Domain Overview */}
      <section className="extra-section">
        <div className="extra-container">
          <div className="extra-title-bar">
            <h3>Proficiency Domains</h3>
            <p>Categorized strengths across the full software lifecycle</p>
          </div>

          <div className="extra-cards-grid">
            <div className="extra-card">
              <div className="extra-card-icon">
                <FiCode />
              </div>
              <h4>Frontend Development</h4>
              <p>
                Component-driven development with React, JSX, modern state hooks,
                responsive vanilla CSS, animations, and clean DOM manipulation.
              </p>
            </div>

            <div className="extra-card">
              <div className="extra-card-icon">
                <FiServer />
              </div>
              <h4>Backend & APIs</h4>
              <p>
                RESTful API architectures, Express middleware, routing, input
                validation, JWT security, and asynchronous pipeline handling.
              </p>
            </div>

            <div className="extra-card">
              <div className="extra-card-icon">
                <FiDatabase />
              </div>
              <h4>Database Management</h4>
              <p>
                MongoDB NoSQL schema modeling with Mongoose, indexing, CRUD
                operations, Atlas cloud integration, and relational SQL fundamentals.
              </p>
            </div>

            <div className="extra-card">
              <div className="extra-card-icon">
                <FiTool />
              </div>
              <h4>Dev Tools & Workflow</h4>
              <p>
                Git version control, GitHub workflows, Postman API testing, Vite
                bundling, NPM ecosystem, and agile development practices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SkillsPage;
