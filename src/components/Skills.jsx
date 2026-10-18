import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiMysql,
  SiCplusplus,
  SiPostman,
  SiGithub,
} from "react-icons/si";
import "../styles/skills.css";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    level: "Advanced",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    level: "Advanced",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    level: "Intermediate",
  },
  {
    name: "React",
    icon: <FaReact />,
    level: "Intermediate",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    level: "Intermediate",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    level: "Intermediate",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    level: "Intermediate",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    level: "Intermediate",
  },
  {
    name: "C++",
    icon: <SiCplusplus />,
    level: "Intermediate",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    level: "Intermediate",
  },
  {
    name: "GitHub",
    icon: <SiGithub />,
    level: "Intermediate",
  },
  {
    name: "Postman",
    icon: <SiPostman />,
    level: "Intermediate",
  },
];

function Skills() {
  return (
    <section className="section skills-section" id="skills">

      <div className="section-container">

        <div className="section-heading centered">
          <span className="section-label">MY SKILLS</span>

          <h2>
            Technologies I <span>work with.</span>
          </h2>

          <p>
            A growing toolkit of technologies I use to build,
            test and deploy modern web applications.
          </p>
        </div>

        <div className="skills-grid">

          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>

              <div className="skill-icon">
                {skill.icon}
              </div>

              <div className="skill-info">
                <h3>{skill.name}</h3>
                <span>{skill.level}</span>
              </div>

              <div className="skill-line">
                <span></span>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;