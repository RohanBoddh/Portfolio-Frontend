import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiCode,
  FiDatabase,
  FiLayers,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero-section" id="home">

      <div className="hero-background">
        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>
      </div>

      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-content">

          <div className="hero-badge">
            <span className="status-dot"></span>
            Available for opportunities
          </div>

          <p className="hero-small-title">
            HELLO, I'M
          </p>

          <h1>
            Rohan <span>Boddh</span>
          </h1>

          <h2>
            Full Stack <span>Developer</span>
          </h2>

          <p className="hero-description">
            I build modern, responsive and scalable web applications
            using React, JavaScript, Node.js, Express and MongoDB.
            I enjoy turning ideas into clean and functional digital
            experiences.
          </p>

          {/* HERO BUTTONS */}
          <div className="hero-buttons">

            <Link
              to="/projects"
              className="primary-button"
            >
              View My Work
              <FiArrowRight />
            </Link>

            <a
              href="/Rohan-Boddh-Resume.pdf"
              download="Rohan-Boddh-CV.pdf"
              className="secondary-button"
            >
              <FiDownload />
              Download CV
            </a>

          </div>

          {/* SOCIAL LINKS */}
          <div className="hero-socials">

            <span>
              Follow me
            </span>

            {/* GitHub */}
            <a
              href="https://github.com/RohanBoddh"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rohan-boddh-b87100307/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>

          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="hero-visual">

          {/* CODE CARD */}
          <div className="code-card">

            <div className="code-header">

              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span>
                developer.js
              </span>

            </div>

            <div className="code-content">

              <p>
                <span className="code-purple">
                  const
                </span>{" "}

                <span className="code-blue">
                  developer
                </span>{" "}

                <span className="code-white">
                  =
                </span>{" "}

                <span className="code-yellow">
                  {"{"}
                </span>
              </p>

              <p className="code-indent">
                <span className="code-blue">
                  name:
                </span>{" "}

                <span className="code-green">
                  'Rohan Boddh'
                </span>,
              </p>

              <p className="code-indent">
                <span className="code-blue">
                  role:
                </span>{" "}

                <span className="code-green">
                  'Full Stack Developer'
                </span>,
              </p>

              <p className="code-indent">
                <span className="code-blue">
                  skills:
                </span>{" "}

                <span className="code-yellow">
                  [
                </span>
              </p>

              <p className="code-indent-2">
                <span className="code-green">
                  'React'
                </span>,

                {" "}

                <span className="code-green">
                  'Node.js'
                </span>,
              </p>

              <p className="code-indent-2">
                <span className="code-green">
                  'MongoDB'
                </span>,

                {" "}

                <span className="code-green">
                  'JavaScript'
                </span>
              </p>

              <p className="code-indent">
                <span className="code-yellow">
                  ]
                </span>,
              </p>

              <p className="code-indent">
                <span className="code-blue">
                  passion:
                </span>{" "}

                <span className="code-green">
                  'Building'
                </span>
              </p>

              <p>
                <span className="code-yellow">
                  {"}"}
                </span>
              </p>

            </div>

          </div>


          {/* FLOATING CARD 1 */}
          <div className="floating-card floating-card-one">

            <FiCode />

            <div>
              <strong>
                Frontend
              </strong>

              <small>
                React + JavaScript
              </small>
            </div>

          </div>


          {/* FLOATING CARD 2 */}
          <div className="floating-card floating-card-two">

            <FiDatabase />

            <div>
              <strong>
                Backend
              </strong>

              <small>
                Node + MongoDB
              </small>
            </div>

          </div>


          {/* FLOATING CARD 3 */}
          <div className="floating-card floating-card-three">

            <FiLayers />

            <div>
              <strong>
                Projects
              </strong>

              <small>
                Full Stack Apps
              </small>
            </div>

          </div>

        </div>

      </div>


      {/* SCROLL INDICATOR */}
      <Link
        to="/about"
        className="scroll-indicator"
      >
        <span></span>
        Scroll to explore
      </Link>

    </section>
  );
}

export default Hero;
