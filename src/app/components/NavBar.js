const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo nav-container-link">
        <a href="/">
          Felix Waweru
        </a>
      </div>

      <div className="nav-container-buttons">
        <a href="#about" className="mx-1 cta-btn responsive-nav">About Me</a>
        <a href="#projects" className="mx-1 cta-btn responsive-nav">Projects</a>
        <a href="#blog" className="mx-1 cta-btn responsive-nav">Blog</a>
        <a href="https://drive.google.com/file/d/12ZHd3pUhWK4GhqErcU0E0Kq1eqdGm3IC/view?usp=share_link" target="_blank" className="mx-1 cta-btn">Resume</a>
      </div>
    </div>
  )
}

export default Navbar;