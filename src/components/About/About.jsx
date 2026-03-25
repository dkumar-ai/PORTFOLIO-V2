import './About.css'

const About = () => {
  const skills = [
    { icon: 'bx bxl-python', label: 'Python' },
    { icon: 'bx bxl-tensorflow', label: 'TensorFlow' },
    { icon: 'bx bxl-pytorch', label: 'PyTorch' },
    { icon: 'bx bxl-docker', label: 'Docker' },
    { icon: 'bx bxl-git', label: 'Git' },
    { icon: 'bx bxl-github', label: 'GitHub' },
    { icon: 'bx bxl-aws', label: 'AWS' },
    { icon: 'bx bxl-google-cloud', label: 'GCP' },
    { icon: 'bx bxs-data', label: 'Pandas' },
    { icon: 'bx bx-brain', label: 'Scikit-learn' },
    { icon: 'bx bxs-microchip', label: 'OpenCV' },
    { icon: 'bx bxl-javascript', label: 'SQL' },
  ]

  const stats = [
    { number: '7+', label: 'Projects Built' },
    { number: '92%', label: 'Best Model Accuracy' },
    { number: '5', label: 'Certifications' },
    { number: '2+', label: 'Years Experience' },
  ]

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="section-divider"></div>

        <div className="about-grid">

          {/* Left — Bio */}
          <div className="about-bio">
            <p className="about-tag">// who I am</p>
            <h3 className="about-heading">
              Turning data into<br />
              <span>intelligent systems</span>
            </h3>
            <p className="about-text">
              I'm a final-year Computer Science student at Chandigarh University,
              specializing in AI & ML. I build end-to-end deep learning pipelines,
               computer vision systems, and predictive models that solve real problems
              — from detecting plant diseases with 92% accuracy to predicting
              heart failure risk in clinical settings.
            </p>
            <p className="about-text">
              My work spans healthcare AI, IoT automation, and multi-agent systems.
              I'm driven by the challenge of making models that don't just perform
              well on paper — but work reliably in the real world.
            </p>
            <div className="about-stats">
              {stats.map((stat) => (
                <div className="stat-item" key={stat.label}>
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Skills */}
          <div className="about-skills">
            <p className="about-tag">// what I work with</p>
            <h3 className="about-heading">Tech <span>Stack</span></h3>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div className="skill-card" key={skill.label}>
                  <i className={skill.icon}></i>
                  <span>{skill.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About