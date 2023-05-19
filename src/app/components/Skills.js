import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="grid-skills">
        <div className="skill-card html gradient">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
          />
          <p>HTML</p>
        </div>
        <div className="skill-card css">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
          />
          <p>CSS</p>
        </div>
        <div className="skill-card js">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
          />
          <p>JavaScript</p>
        </div>
        <div className="skill-card react">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
          />
          <p>React</p>
        </div>
        <div className="skill-card node">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
          />
          <p>Node</p>
        </div>
        <div className="skill-card python">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
          />
          <p>Python</p>
        </div>
      </div>
    </div>
  )
}

export default Skills;