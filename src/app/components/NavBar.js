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
        <a href="" className="cta-btn">About Me</a>
        <a href="" className="cta-btn">Projects</a>
        <a href="" className="cta-btn">Blog</a>
        <a href="" className="cta-btn">Resume</a>
      </div>
    </div>
  )
}

export default Navbar;