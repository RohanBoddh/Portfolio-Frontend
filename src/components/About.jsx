import {
  FiArrowUpRight,
  FiCode,
  FiMonitor,
  FiDatabase,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import profileImage from "../assets/profile.png";
import "../styles/about.css";

function About() {
  return (
    <section className="section about-section" id="about">

      <div className="section-container">

        {/* Section Heading */}
        <div className="section-heading">
          <span className="section-label">ABOUT ME</span>

          <h2>
            Building the web, <span>one project at a time.</span>
          </h2>
        </div>


        {/* About Main Grid */}
        <div className="about-grid">

          {/* =========================
              LEFT - PROFILE IMAGE
          ========================== */}
          <div className="about-image-card">

            <div className="about-image-placeholder">

              <img
                src={profileImage}
                alt="Rohan Boddh"
                className="profile-image"
              />

              <div className="profile-ring"></div>

            </div>


            {/* Experience Card */}
            <div className="experience-card">

              <strong>01+</strong>

              <span>
                Years of
                <br />
                Learning & Building
              </span>

            </div>

          </div>


          {/* =========================
              RIGHT - ABOUT CONTENT
          ========================== */}
          <div className="about-content">

            <p className="about-intro">
              I'm a Computer Science student and aspiring full-stack
              developer who enjoys creating practical and user-friendly
              web applications.
            </p>


            <p>
              My development journey started with HTML, CSS and
              JavaScript. Since then, I've expanded my skills into
              React, Node.js, Express, MongoDB, SQL and C++ with
              Data Structures and Algorithms.
            </p>


            <p>
              I focus on writing clean code, understanding how systems
              work and continuously improving my development skills
              through real-world projects.
            </p>


            {/* Features */}
            <div className="about-features">

              {/* Frontend */}
              <div className="about-feature">

                <div className="feature-icon">
                  <FiMonitor />
                </div>

                <div>
                  <h4>Frontend Development</h4>
                  <p>Modern responsive interfaces</p>
                </div>

              </div>


              {/* Backend */}
              <div className="about-feature">

                <div className="feature-icon">
                  <FiDatabase />
                </div>

                <div>
                  <h4>Backend Development</h4>
                  <p>APIs, databases & authentication</p>
                </div>

              </div>


              {/* Problem Solving */}
              <div className="about-feature">

                <div className="feature-icon">
                  <FiCode />
                </div>

                <div>
                  <h4>Problem Solving</h4>
                  <p>DSA & logical thinking</p>
                </div>

              </div>

            </div>


            {/* Contact Link */}
            <Link to="/contact" className="text-link">
              Let's work together
              <FiArrowUpRight />
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;