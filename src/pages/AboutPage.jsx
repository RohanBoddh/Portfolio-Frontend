import { Link } from "react-router-dom";
import {
  FiChevronRight,
  FiCode,
  FiCpu,
  FiLayers,
  FiCheckCircle,
  FiAward,
} from "react-icons/fi";
import About from "../components/About";
import "../styles/new-pages.css";

function AboutPage() {
  return (
    <div className="dedicated-page">
      {/* Page Hero Header */}
      <section className="page-hero-banner">
        <div className="page-hero-container">
          <div className="page-breadcrumbs">
            <Link to="/">Home</Link>
            <FiChevronRight size={12} />
            <span className="active">About</span>
          </div>

          <div className="page-badge-pill">
            <span className="pulse-dot"></span>
            About Me & Journey
          </div>

          <h1 className="page-hero-title">
            Crafting Digital Solutions with <span>Passion & Purpose</span>
          </h1>

          <p className="page-hero-desc">
            Get to know more about my background, how I approach engineering challenges,
            and the development philosophy that drives every project I build.
          </p>

          <div className="page-highlight-chips">
            <span className="page-chip">
              <FiCode /> Full-Stack Engineering
            </span>
            <span className="page-chip">
              <FiLayers /> MERN Stack Specialist
            </span>
            <span className="page-chip">
              <FiCheckCircle /> Production-Ready Clean Code
            </span>
            <span className="page-chip">
              <FiAward /> Problem Solver
            </span>
          </div>
        </div>
      </section>

      {/* Main About Component */}
      <About />

      {/* Complimentary Core Values & Philosophy */}
      <section className="extra-section">
        <div className="extra-container">
          <div className="extra-title-bar">
            <h3>My Core Principles</h3>
            <p>How I ensure reliable, maintainable, and high-performance software</p>
          </div>

          <div className="extra-cards-grid">
            <div className="extra-card">
              <div className="extra-card-icon">
                <FiCode />
              </div>
              <h4>Clean Architecture</h4>
              <p>
                Writing modular, self-documenting code with clear separation of
                concerns, making systems effortless to scale and maintain.
              </p>
            </div>

            <div className="extra-card">
              <div className="extra-card-icon">
                <FiCpu />
              </div>
              <h4>Performance Focused</h4>
              <p>
                Optimizing assets, bundle sizes, query execution, and rendering cycles
                to guarantee lightning-fast load times.
              </p>
            </div>

            <div className="extra-card">
              <div className="extra-card-icon">
                <FiLayers />
              </div>
              <h4>User-Centric Design</h4>
              <p>
                Crafting intuitive, responsive interfaces that deliver delightful,
                accessible experiences across every device viewport.
              </p>
            </div>

            <div className="extra-card">
              <div className="extra-card-icon">
                <FiCheckCircle />
              </div>
              <h4>Continuous Growth</h4>
              <p>
                Always learning new industry paradigms, modern libraries, and
                architectural patterns to stay at the cutting edge.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
