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
        <Link href="#about" className="cta-btn">About Me</Link>
        <Link href="#projects" className="cta-btn">Projects</Link>
        <Link href="#blog" className="cta-btn">Blog</Link>
        <Link href="https://drive.google.com/file/d/12ZHd3pUhWK4GhqErcU0E0Kq1eqdGm3IC/view?usp=share_link" target="_blank" className="cta-btn">Resume</Link>
      </div>
    </div>
  )
}

export default Navbar;