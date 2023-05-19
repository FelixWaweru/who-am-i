import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolder
} from "@fortawesome/free-solid-svg-icons";

const getProjects = async () => {
    // Fetch data from local API route
    const response = await fetch("http://localhost:3000/api/projects");
    const data = await response.json();
    
    return data;
};

const Projects = async () => {

    const projectData = await getProjects();

    return (
        <div className="projects-container">
        <h2>Projects</h2>
        <div className="projects-grid">
            {projectData && projectData.map((project) => (
            <div className="project-card" key={project.id}>
                <div className="project-header">
                    <FontAwesomeIcon
                        icon={faFolder}
                        fontSize={35}
                        color="#0070F3"
                    />
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>
            ))
            }
        </div>
        </div>
    )
}

export default Projects;