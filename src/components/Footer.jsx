import { Link } from "react-router-dom";
import {
  FiGithub,
  FiLinkedin,
  FiArrowUp,
} from "react-icons/fi";
import "../styles/footer.css";

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-top">

          <div>
            <Link to="/" className="footer-logo">
              Rohan<span>.</span>
            </Link>

            <p>
              Full Stack Developer focused on building
              useful and modern web applications.
            </p>
          </div>

          <div className="footer-links">

            <Link to="/about">About</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/education">Education</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/services">Services</Link>
            <Link to="/achievements">Achievements</Link>
            <Link to="/contact">Contact</Link>

          </div>

          <div className="footer-socials">

            <a
              href="https://github.com/RohanBoddh"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/rohan-boddh-b87100307/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin />
            </a>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Rohan Boddh. All rights reserved.
          </p>

          <button
            type="button"
            onClick={handleScrollToTop}
            className="back-top"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              font: "inherit",
              color: "inherit",
            }}
          >
            Back to top
            <FiArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;