import {
  FiGithub,
  FiExternalLink,
  FiArrowUpRight,
} from "react-icons/fi";

import "../styles/projects.css";

import projectManagement1 from "../assets/projectmanagement-1.png";
import projectManagement2 from "../assets/projectmanagement-2.png";
import projectManagement3 from "../assets/projectmanagement-3.png";

import employeeManagement1 from "../assets/employeemanagement-1.png";
import employeeManagement2 from "../assets/employeemanagement-2.png";
import employeeManagement3 from "../assets/employeemanagement-3.png";
import employeeManagement4 from "../assets/employeemanagement-4.png";

import eCommerce1 from "../assets/ecommerce-1.png";
import eCommerce2 from "../assets/ecommerce-2.png";
import eCommerce3 from "../assets/ecommerce-3.png";
import eCommerce4 from "../assets/ecommerce-4.png";

const projects = [
  {
    number: "01",
    title: "Project Management System",
    description:
      "A full-stack project and task management platform with authentication, role-based dashboards, project management, team assignment and work submission.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    category: "Full Stack",

    github: "https://github.com/RohanBoddh",

    live: "https://project-management-frontend-cyan.vercel.app/",

    images: [
      projectManagement1,
      projectManagement2,
      projectManagement3,
    ],
  },

  {
    number: "02",
    title: "Employee Management System",
    description:
      "A modern enterprise workforce management platform featuring role-based dashboards, personnel records, staff directory with search & department filters, and daily attendance tracking.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "REST API",
    ],
    category: "Full Stack",

    github: "https://github.com/RohanBoddh",
    live: "https://employee-management-system-frontend-peach.vercel.app/",

    images: [
      employeeManagement1,
      employeeManagement2,
      employeeManagement3,
      employeeManagement4,
    ],
  },

  {
    number: "03",
    title: "Campus E-Commerce Platform",
    description:
      "A full-stack Flipkart & Amazon-inspired campus shopping portal featuring student authentication, product catalogs with category filters, wishlist & cart management, and UPI QR scan & pay checkout.",
    technologies: [
      "PHP",
      "MySQL",
      "JavaScript",
      "Bootstrap",
      "CSS3",
      "UPI Gateway",
    ],
    category: "Full Stack",

    github: "https://github.com/RohanBoddh",
    live: "https://college-e-commerce-five.vercel.app/checkout.php",

    images: [
      eCommerce1,
      eCommerce2,
      eCommerce3,
      eCommerce4,
    ],
  },
];

function Projects() {
  return (
    <section className="section projects-section" id="projects">

      <div className="section-container">

        <div className="projects-heading-row">

          <div className="section-heading">

            <span className="section-label">
              MY WORK
            </span>

            <h2>
              Selected <span>projects.</span>
            </h2>

          </div>

          <p>
            Some of the applications I've built while learning,
            experimenting and solving practical problems.
          </p>

        </div>


        <div className="projects-grid">

          {projects.map((project) => (

            <article
              className="project-card"
              key={project.number}
            >

              <div className="project-top">

                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-category">
                  {project.category}
                </span>

              </div>


              {/* PROJECT IMAGE / PREVIEW */}

              <div className="project-preview">

                {project.images ? (

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className={`project-slideshow slides-${project.images.length}`}
                  >

                    {project.images.map((image, index) => (

                      <img
                        key={image}
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className={`project-slide project-slide-${index + 1}`}
                      />

                    ))}

                    <div className="slideshow-badge">
                      <span>{project.images.length} Photos</span>
                    </div>

                  </a>

                ) : (

                  <div className="preview-window">

                    <div className="preview-header">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="preview-content">

                      <div className="preview-line large"></div>

                      <div className="preview-line"></div>

                      <div className="preview-boxes">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>

                    </div>

                  </div>

                )}

              </div>


              {/* PROJECT CONTENT */}

              <div className="project-content">

                <h3>

                  {project.live !== "#" ? (

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-title-link"
                    >
                      {project.title}
                    </a>

                  ) : (

                    project.title

                  )}

                </h3>


                <p>
                  {project.description}
                </p>


                <div className="technology-list">

                  {project.technologies.map(
                    (technology) => (

                      <span key={technology}>
                        {technology}
                      </span>

                    )
                  )}

                </div>


                <div className="project-links">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiGithub />
                    GitHub
                  </a>


                  <a
                    href={project.live}
                    target={
                      project.live !== "#"
                        ? "_blank"
                        : undefined
                    }
                    rel="noreferrer"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>

                </div>

              </div>

            </article>

          ))}

        </div>


        <a
          href="https://github.com/RohanBoddh"
          target="_blank"
          rel="noreferrer"
          className="all-projects-link"
        >
          View all projects
          <FiArrowUpRight />
        </a>

      </div>

    </section>
  );
}

export default Projects;
