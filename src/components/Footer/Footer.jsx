import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">DK.</div>

          <nav className="footer-nav">
            {['home', 'about', 'projects', 'services', 'contact'].map((link) => (
              <a key={link} href={`#${link}`} className="footer-link">
                {link}
              </a>
            ))}
          </nav>

          <div className="footer-socials">
            <a href="https://github.com/devesh2304" target="_blank" rel="noreferrer">
              <i className="bx bxl-github"></i>
            </a>
            <a href="https://linkedin.com/in/devesh2304" target="_blank" rel="noreferrer">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="mailto:deveshkumawat2304@gmail.com">
              <i className="bx bx-envelope"></i>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {currentYear} Devesh Kumawat. All rights reserved.</span>
          <span className="footer-credit">Built with React + Vite</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer