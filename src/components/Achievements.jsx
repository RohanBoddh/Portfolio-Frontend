import { Link } from "react-router-dom";
import {
  FiAward,
  FiCpu,
  FiFileText,
  FiCheckCircle,
  FiArrowUpRight,
  FiCalendar,
} from "react-icons/fi";
import "../styles/achievements.css";

const featuredCertificates = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle University",
    date: "September 17, 2025",
    type: "Industry Certification",
    skills: ["GenAI", "OCI", "LLMs", "RAG"],
    pdfUrl: "/certificates/Oracle_Cloud_Generative_AI_Professional.pdf",
    icon: <FiCpu />,
  },
  {
    title: "Internal Smart India Hackathon 2026 (SIH 2026)",
    issuer: "AIC-GBU Incubation Centre",
    date: "September 12, 2026",
    type: "National Hackathon",
    skills: ["Team SAMARTH", "Innovation", "Rapid Prototyping"],
    pdfUrl: "/certificates/Smart_India_Hackathon_2026_Certificate.png",
    icon: <FiAward />,
  },
  {
    title: "Web Development & Management Summer Training",
    issuer: "Krishan Enterprises",
    date: "July - August 2026",
    type: "Summer Training",
    skills: ["Web Management", "Payment Methods", "AMC Operations"],
    pdfUrl: "/certificates/Krishan_Enterprises_Summer_Training_Letter.png",
    icon: <FiFileText />,
  },
  {
    title: "BCG X - GenAI Job Simulation Certificate",
    issuer: "BCG X & Forage",
    date: "August 22, 2025",
    type: "Job Simulation",
    skills: ["AI Financial Chatbot", "Data Analysis", "Python"],
    pdfUrl: "/certificates/BCG_GenAI_Job_Simulation.pdf",
    icon: <FiAward />,
  },
];

function Achievements() {
  return (
    <section className="section achievements-section" id="achievements">
      <div className="section-container">
        <div className="projects-heading-row">
          <div className="section-heading">
            <span className="section-label">ACHIEVEMENTS</span>
            <h2>
              Verified <span>certifications.</span>
            </h2>
          </div>

          <p>
            Recognized industry credentials, AI simulations, and professional offers
            validating my engineering skill set.
          </p>
        </div>

        <div className="certificates-grid">
          {featuredCertificates.map((cert, index) => (
            <div key={index} className="cert-card">
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

              <div className="cert-card-body">
                <h3 className="cert-title">{cert.title}</h3>

                <div className="cert-skills-tags">
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} className="cert-tag">
                      #{skill}
                    </span>
                  ))}
                </div>

                <div className="cert-card-actions">
                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-btn cert-btn-primary"
                  >
                    View Document <FiArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <Link
            to="/achievements"
            className="cert-btn cert-btn-secondary"
            style={{ display: "inline-flex", padding: "12px 28px", fontSize: "14px" }}
          >
            Explore All Certificates & Labs <FiArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
