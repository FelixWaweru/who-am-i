import Image from 'next/image'


const Footer = () => {
  return (
    <>
      <hr/>
      <div className="footer-container">
        <p>
          © {new Date().getFullYear()} Felix Waweru
        </p>
        <div className="social_icons">
          <a
            href="https://github.com/FelixWaweru"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Image
            src="./github.png"
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
            src="./linkedin.png"
            alt="LinkedIn"
            width={30}
            height={30}
            priority
          />
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer;