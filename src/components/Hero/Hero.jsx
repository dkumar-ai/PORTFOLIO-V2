import './Hero.css'
import profileImg from '../../assets/images/profile.jpg'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">

        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Devesh<br /><span>Kumar</span></h1>
          <h2 className="hero-role">AI / ML Engineer</h2>
          <p className="hero-desc">
            Building intelligent systems through deep learning, computer vision,
            and IoT — turning data into decisions that matter.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-secondary">Get In Touch</a>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-img-wrapper">
            <img src={profileImg} alt="Devesh Kumar" />
            <div className="hero-img-border"></div>
            <div className="hero-img-dot top-left"></div>
            <div className="hero-img-dot bottom-right"></div>
          </div>
        </div>

      </div>

      <div className="hero-scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}

export default Hero