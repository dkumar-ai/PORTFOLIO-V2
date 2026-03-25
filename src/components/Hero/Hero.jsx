import { useRef } from 'react'
import './Hero.css'
import avatarNormal from '../../assets/images/profile.png'
import avatarHover from '../../assets/images/profile-hover.png'
const Hero = () => {
  const wrapperRef = useRef(null)
  const timerRef = useRef(null)

  const handleMouseEnter = () => {
    const wrapper = wrapperRef.current
    const hover = wrapper.querySelector('.avatar-hover')
    const normal = wrapper.querySelector('.avatar-normal')

    // Show hover image
    hover.style.opacity = '1'
    normal.style.opacity = '0'

    // Clear any existing timer
    clearTimeout(timerRef.current)

    // Revert after 0.5s
    timerRef.current = setTimeout(() => {
      hover.style.opacity = '0'
      normal.style.opacity = '1'
    }, 500)
  }

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
          <div
            className="hero-img-wrapper"
            ref={wrapperRef}
            onMouseEnter={handleMouseEnter}
          >
            <img src={avatarNormal} alt="Devesh Kumar" className="avatar-normal" />
            <img src={avatarHover} alt="Devesh Kumar" className="avatar-hover" />
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