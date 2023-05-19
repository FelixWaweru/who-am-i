import Image from "next/image";

const Main = () => {
  return (
    <div className="main-container">
      <div className="profile-bg">
        <Image src='/images/profile.jpeg' 
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
            href="https://twitter.com/olawanle_joel"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://github.com/olawanlejoel"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/olawanlejoel/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Main;