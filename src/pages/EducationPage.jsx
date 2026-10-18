import { Link } from "react-router-dom";
import {
  FiChevronRight,
  FiBookOpen,
  FiAward,
  FiCode,
  FiDatabase,
} from "react-icons/fi";
import Education from "../components/Education";
import "../styles/new-pages.css";

function EducationPage() {
  return (
    <div className="dedicated-page">
      {/* Page Hero Header */}
      <section className="page-hero-banner">
        <div className="page-hero-container">
          <div className="page-breadcrumbs">
            <Link to="/">Home</Link>
            <FiChevronRight size={12} />
            <span className="active">Education</span>
          </div>

          <div className="page-badge-pill">
            <span className="pulse-dot"></span>
            Academic Background
          </div>

          <h1 className="page-hero-title">
            Academic Journey & <span>Foundation</span>
          </h1>

          <p className="page-hero-desc">
            A solid grounding in Computer Science principles, algorithmic thinking,
            and software engineering practices that power my development work.
          </p>

          <div className="page-highlight-chips">
            <span className="page-chip">
              <FiBookOpen /> Computer Science & Engineering
            </span>
            <span className="page-chip">
              <FiCode /> Data Structures & Algorithms
            </span>
            <span className="page-chip">
              <FiDatabase /> Database Management Systems
            </span>
            <span className="page-chip">
              <FiAward /> Practical Project Work
            </span>
          </div>
        </div>
      </section>

      {/* Main Education Component */}
      <Education />

      {/* Key Computer Science Focus Areas */}
      <section className="extra-section">
        <div className="extra-container">
          <div className="extra-title-bar">
            <h3>Key Study Areas</h3>
            <p>Theoretical and applied disciplines that inform my software engineering</p>
          </div>

          <div className="extra-cards-grid">
            <div className="extra-card">
              <div className="extra-card-icon">
                <FiCode />
              </div>
              <h4>Data Structures & Algorithms</h4>
              <p>
                Foundational understanding of problem-solving techniques, time/space
                complexity analysis, arrays, trees, hashing, and sorting algorithms.
              </p>
            </div>

            <div className="extra-card">
              <div className="extra-card-icon">
                <FiDatabase />
              </div>
              <h4>Database Management</h4>
              <p>
                Relational schema design, normalization, ACID properties, indexing,
                transactions, and transition to distributed NoSQL architectures.
              </p>
            </div>

            <div className="extra-card">
              <div className="extra-card-icon">
                <FiBookOpen />
              </div>
              <h4>Operating Systems & Networks</h4>
              <p>
                Process management, concurrency, memory allocation, TCP/IP stack, HTTP/HTTPS
                protocols, and client-server request lifecycles.
              </p>
            </div>

            <div className="extra-card">
              <div className="extra-card-icon">
                <FiAward />
              </div>
              <h4>Software Engineering</h4>
              <p>
                Agile development methods, modular component design, testing strategies,
                code refactoring, and version management practices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EducationPage;
