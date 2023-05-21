// components/Navbar.jsx

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo nav-container-link">
        <Link href="/">
          Felix Waweru
        </Link>
      </div>

      <div className="nav-container-buttons">
        <a href="#about" className="cta-btn">About Me</a>
        <a href="#projects" className="cta-btn">Projects</a>
        <a href="#blog" className="cta-btn">Blog</a>
        <a href="https://drive.google.com/file/d/12ZHd3pUhWK4GhqErcU0E0Kq1eqdGm3IC/view?usp=share_link" target="_blank" className="cta-btn">Resume</a>
      </div>
    </div>
  )
}

export default Navbar;