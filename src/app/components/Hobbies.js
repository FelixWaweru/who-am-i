import Image from "next/image";

const Main = () => {
  return (
    <div className="main-container">
      <h2>Hobbies & Interests</h2>
      <div className="profile-bg">
        <Image src='./images/me.jpg' 
          className="profile-img" 
          width={300} 
          height={300} 
          alt="Felix Waweru headshot" 
        />
      </div>
      <div className="main-text">
          <p>
            I enjoy making art 🎨, watching tv 📺, anime 🗾 and gaming 🎮.
          </p>
          <p>
            In my spare time you can either find me hanging out with my dog or writing cool coding projects.
          </p>
      </div>
    </div>
  )
}

export default Main;