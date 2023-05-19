import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="grid-skills">
        <div className="skill-card">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
          />
          <p>Python</p>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
          />
          <p>JavaScript, TypeScript</p>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
          />
          <p>Java</p>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
          />
          <p>Next.JS, React</p>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
          />
          <p>Django, Flask</p>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
          />
          <p>API Development</p>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
          />
          <p>AWS, GCP, Vercel</p>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
          />
          <p>DynamoDB, MongoDB, MySQL, SQLite</p>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
          />
          <p>GraphQL</p>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
          />
          <p>Markdown, MDX</p>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
          />
          <p>Node</p>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
          />
          <p>Svelte</p>
        </div>
      </div>
    </div>
  )
}

export default Skills;