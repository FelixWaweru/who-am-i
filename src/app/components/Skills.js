import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faJs,
  faReact,
  faAws
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faCode,
  faNetworkWired,
  faFlask
} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="grid-skills">
        <div className="skill-card">
          <FontAwesomeIcon
            icon={faPython}
          />
          <p>Python</p>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon
            icon={faJs}
          />
          <p>JavaScript, TypeScript</p>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon
            icon={faReact}
          />
          <p>React, Next.JS</p>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon
            icon={faFlask}
          />
          <p>Django, Flask</p>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon
            icon={faCode}
          />
          <p>API Development</p>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon
            icon={faAws}
          />
          <p>AWS, GCP, Vercel</p>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon
            icon={faDatabase}
          />
          <p>Databases: DynamoDB, MySQL</p>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon
            icon={faNetworkWired}
          />
          <p>Object Relational Mapping</p>
        </div>
      </div>
    </div>
  )
}

export default Skills;