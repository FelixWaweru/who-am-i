import Image from "next/image";

const About = () => {
  return (
    <div className="about-container" id="about">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            I am a Software Engineer with a keen passion for computing technologies. I have over 4 years professional experience
            using OOP programming(Python, JavaScript, C++, Java) along with their frameworks.
          </p>
          <p>
            Over the years, the industry has given me a rewarding career and exposure in understanding technical systems. I have
            also worked on setting up and launching production systems on established frameworks as well as sorting and manipulating
            big data sources.
          </p>
          <p>
            I have also worked closely with managing Linux servers for large scale production environments. Alongside the technical
            skills, I have also been able to learn project management skills firsthand by working and planning Agile project plans.
          </p>
        </div>
        <div className="about-img">
          <Image 
            src='./images/headshot.jpg'
            alt="Profile"
            className="profile-img"
            width={300} 
            height={500}
          />
        </div>
      </div>
    </div>
  )
}

export default About;