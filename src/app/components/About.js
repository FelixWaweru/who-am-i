import Image from "next/image";

const About = () => {
  return (
    <div className="about-container" id="about">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            I am a highly skilled Software Developer and Engineer with four years of experience in building large-scale web services, caching layers, performance tuning, debugging, and development. I have a strong background in Java and Python and a proven track record in software architecture. I understand web technologies at the protocol level up through the stack.
          </p>
          <p>
            I have experience using PostgreSQL, Spring Boot, and Drools, which gives me an advantage. In addition to my technical skills, I am adept at client consultation, writing effective and clean code, and collaborating effectively with other developers.
          </p>
          <p>
            I am a passionate software developer and consider myself a valuable asset with a demonstrated 'big picture' perspective. I also have the capacity to work at a detailed level across a wide range of technologies and methodologies.
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