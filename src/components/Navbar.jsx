import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="nav-container">

        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <span>R</span>
          Rohan<span>.</span>
        </Link>

        <nav className={`nav-menu ${menuOpen ? "nav-menu-open" : ""}`}>
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            About
          </NavLink>
          <NavLink
            to="/skills"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Skills
          </NavLink>
          <NavLink
            to="/education"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Education
          </NavLink>
          <NavLink
            to="/projects"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Projects
          </NavLink>
          <NavLink
            to="/services"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Services
          </NavLink>
          <NavLink
            to="/achievements"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Achievements
          </NavLink>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Contact
          </NavLink>

          <div className="mobile-socials">
            <a href="https://github.com/RohanBoddh" target="_blank" rel="noreferrer">
              <FiGithub />
            </a>

            <a href="https://www.linkedin.com/in/rohan-boddh-b87100307/" target="_blank" rel="noreferrer">
              <FiLinkedin />
            </a>
          </div>
        </nav>

        <div className="nav-right">
          <a
            href="https://github.com/RohanBoddh"
            target="_blank"
            rel="noreferrer"
            className="nav-social"
          >
            <FiGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/rohan-boddh-b87100307/"
            target="_blank"
            rel="noreferrer"
            className="nav-social"
          >
            <FiLinkedin />
          </a>

          <Link to="/contact" className="nav-contact" onClick={closeMenu}>
            Let's Talk
          </Link>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;