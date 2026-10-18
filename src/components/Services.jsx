import {
  FiMonitor,
  FiServer,
  FiDatabase,
  FiSmartphone,
  FiTool,
  FiLayers,
} from "react-icons/fi";
import "../styles/services.css";

const services = [
  {
    icon: <FiMonitor />,
    number: "01",
    title: "Frontend Development",
    description:
      "Responsive and modern user interfaces using React, JavaScript, HTML and CSS.",
  },
  {
    icon: <FiServer />,
    number: "02",
    title: "Backend Development",
    description:
      "REST APIs and server-side applications using Node.js and Express.",
  },
  {
    icon: <FiDatabase />,
    number: "03",
    title: "Database Development",
    description:
      "Structured and reliable database solutions using MongoDB and MySQL.",
  },
  {
    icon: <FiSmartphone />,
    number: "04",
    title: "Responsive Design",
    description:
      "Websites that provide a consistent experience across desktop, tablet and mobile.",
  },
  {
    icon: <FiTool />,
    number: "05",
    title: "Problem Solving",
    description:
      "Logical problem solving and algorithmic thinking using C++ and DSA.",
  },
  {
    icon: <FiLayers />,
    number: "06",
    title: "Full Stack Applications",
    description:
      "Complete web applications connecting frontend, backend, APIs and databases.",
  },
];

function Services() {
  return (
    <section className="section services-section" id="services">

      <div className="section-container">

        <div className="section-heading centered">
          <span className="section-label">WHAT I DO</span>

          <h2>
            Turning ideas into <span>digital products.</span>
          </h2>

          <p>
            From a simple interface to a complete full-stack
            application, I enjoy working across the development stack.
          </p>
        </div>

        <div className="services-grid">

          {services.map((service) => (
            <div className="service-card" key={service.number}>

              <div className="service-top">
                <div className="service-icon">
                  {service.icon}
                </div>

                <span>{service.number}</span>
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <div className="service-line"></div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;