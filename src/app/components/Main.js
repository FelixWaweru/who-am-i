import Image from "next/image";

const Main = () => {
  return (
    <div className="main-container">
      <div className="profile-bg">
        <Image src='./images/profile.jpeg' 
          className="profile-img" 
          width={300} 
          height={300} 
          alt="Felix Waweru headshot" 
        />
      </div>
      <div className="main-text">
        <h2>Hi! My name is Felix 👋</h2>
        <p>
            I am a Software Engineer with a keen passion for computing technologies. I have over 4 years professional experience
            using OOP programming(Python, JavaScript, C++, Java) along with their frameworks.
        </p>
        <div className="social-icons">
          <a
            href="https://github.com/FelixWaweru"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Image
            src="./icons/github.png"
            alt="GitHub"
            width={30}
            height={30}
            priority
          />
          </a>
          <a
            href="https://www.linkedin.com/in/felix-waweru-07a314a5/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Image
            src="./icons/linkedin.png"
            alt="LinkedIn"
            width={30}
            height={30}
            priority
          />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Main;