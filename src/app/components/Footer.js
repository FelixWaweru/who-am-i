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
            href="https://twitter.com/whyweru"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Image
            src="/next.svg"
            alt="Twitter"
            className="dark:invert"
            width={50}
            height={50}
            priority
          />
          </a>
          <a
            href="https://github.com/FelixWaweru"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Image
            src="/next.svg"
            alt="Twitter"
            className="dark:invert"
            width={50}
            height={50}
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
            src="/next.svg"
            alt="Twitter"
            className="dark:invert"
            width={50}
            height={50}
            priority
          />
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer;