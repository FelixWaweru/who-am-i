import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolder
} from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import Link from "next/link";

const getProjects = async () => {
    // Fetch data from local API route
    const response = await fetch(`${process.env.LOCAL_API_URL}api/projects`);
    const data = await response.json();
    
    return data;
};

const Projects = async () => {

    // const projectData = await getProjects();
    const projectData = [
        {
            id: 1,
            title: 'Code Fundi',
            description:
            'Code Fundi is an AI coding assistant that helps developers write better code faster. With our service, you can cut down development time by eliminating the need to manually browse the web looking for solutions and instead, have the solutions generated directly in your code editor.',
            gitHubLink: 'https://github.com/code-Fundi',
        },
        {
            id: 2,
            title: 'Elevenlabs NPM Package',
            description:
            'A JavaScript based, open source NPM package that wraps around the Elevenlabs public API and is used to convert text to speech.',
            gitHubLink: 'https://www.npmjs.com/package/elevenlabs-node',
        },
        {
            id: 3,
            title: 'TiktokChatGPT',
            description:
            'This is a conversational bot for tiktok livestreams built on ChatGPT. It uses the OpenAI API to generate responses, turns the responses into a vocal audio response and then responds to live stream events using the generated audio.',
            gitHubLink: 'https://github.com/FelixWaweru/TiktokChatGPT',
        },
        {
            id: 4,
            title: 'M-Kono Prosthetic Hand',
            description:
            'A prosthetic hand controlled using an Android Application and an Arduino board. The project entailed receiving and interpreting vocal user commands using an Android application and converting it into hand motions using an Arduino board, servos and a 3D printed prosthetic hand. It was developed for my fourth year project.',
            gitHubLink: 'https://github.com/FelixWaweru/M-Kono',
        },
        {
            id: 5,
            title: 'MHENGA',
            description:
            'I developed a Twitter bot that shares Swahili proverbs and their translations as tweets. In the spirit of staying authentic to my roots, I chose to create the bot using a Swahili programming language called Swahili-lang and a little bit of JavaScript to help with the tweet posting.',
            gitHubLink: 'https://github.com/FelixWaweru/MHENGA',
        },
        {
            id: 6,
            title: 'Compliment Bot',
            description:
            'A Python based Twitter bot that posts motivational tweets and automatically responds to users live on Twitter. The bot also sends direct messages and personalised tweets to its followers. ',
            gitHubLink: 'https://github.com/FelixWaweru/ComplimentBot',
        }
    ];

    return (
        <div className="projects-container" id="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
            {projectData && projectData.map((project) => (
            <div className="project-card" key={project.id}>
                <Link href={project.gitHubLink} target="_blank">
                    <div className="project-header">
                    <Image
                        src="./icons/github.png"
                        alt="Github"
                        width={50}
                        height={50}
                        priority
                    />
                    </div>
                    <h3>{project.title}</h3>
                </Link>
                <p>{project.description}</p>
            </div>
            ))
            }
        </div>
        </div>
    )
}

export default Projects;