import {
  FiBookOpen,
  FiCalendar,
  FiMapPin,
} from "react-icons/fi";
import "../styles/education.css";

function Education() {
  return (
    <section className="section education-section" id="education">

      <div className="section-container">

        <div className="section-heading">
          <span className="section-label">EDUCATION</span>

          <h2>
            My academic <span>journey.</span>
          </h2>
        </div>

        <div className="timeline">

          <div className="timeline-item">

            <div className="timeline-dot">
              <FiBookOpen />
            </div>

            <div className="timeline-card">

              <div className="timeline-top">
                <span className="timeline-badge">
                  Bachelor's Degree
                </span>

                <span className="timeline-date">
                  <FiCalendar />
                  2023 — Present
                </span>
              </div>

              <h3>B.Tech — Computer Science & Engineering</h3>

              <p className="institution">
                Gautam Buddha University
              </p>

              <div className="timeline-location">
                <FiMapPin />
                Uttar Pradesh, India
              </div>

              <p className="timeline-description">
                Currently pursuing B.Tech in Computer Science and
                Engineering with a focus on software development,
                web technologies, databases and problem solving. Active
                participant in Internal Smart India Hackathons (SIH 2025 & 2026).
              </p>

            </div>

          </div>

          <div className="timeline-item">

            <div className="timeline-dot">
              <FiBookOpen />
            </div>

            <div className="timeline-card">

              <div className="timeline-top">
                <span className="timeline-badge">
                  Senior Secondary
                </span>

                <span className="timeline-date">
                  <FiCalendar />
                  Completed
                </span>
              </div>

              <h3>12th — Science</h3>

              <p className="institution">
                GBB Inter College
              </p>

              <div className="timeline-location">
                <FiMapPin />
                Uttar Pradesh, India
              </div>

            </div>

          </div>

          <div className="timeline-item">

            <div className="timeline-dot">
              <FiBookOpen />
            </div>

            <div className="timeline-card">

              <div className="timeline-top">
                <span className="timeline-badge">
                  High School
                </span>

                <span className="timeline-date">
                  <FiCalendar />
                  Completed
                </span>
              </div>

              <h3>10th — High School</h3>

              <p className="institution">
                UP Board
              </p>

              <div className="timeline-location">
                <FiMapPin />
                Uttar Pradesh, India
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;