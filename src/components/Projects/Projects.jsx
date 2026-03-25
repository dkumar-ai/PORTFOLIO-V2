import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Smart Gardening Assistant',
      desc: 'End-to-end IoT system on ESP32 with CNN plant disease detection at 92% accuracy. Reduced water consumption by 35% via intelligent irrigation automation.',
      tags: ['IoT', 'ESP32', 'CNN', 'TensorFlow', 'OpenCV'],
      year: '2024',
      github: 'https://github.com/devesh2304/Smart-Gardening-Assistant',
      color: '#2d5a27',
    },
    {
      id: 2,
      title: 'Heart Failure Prediction',
      desc: 'Deep learning ANN achieving 87% accuracy and 0.91 ROC-AUC on clinical data. 5-layer architecture with BatchNorm and Dropout.',
      tags: ['Python', 'TensorFlow', 'Keras', 'Scikit-learn'],
      year: '2024',
      github: 'https://github.com/devesh2304',
      color: '#5a1a1a',
    },
    {
      id: 3,
      title: 'Medical Image Feature Extraction',
      desc: 'ResNet-18 transfer learning pipeline for multi-organ classification. 89% accuracy on 10,000+ PET, CT, and X-Ray images.',
      tags: ['ResNet-18', 'PyTorch', 'Transfer Learning'],
      year: '2023',
      github: 'https://github.com/devesh2304',
      color: '#1a3a5a',
    },
    {
      id: 4,
      title: 'diffprompt',
      desc: 'CLI tool to compare LLM outputs across prompt variations side-by-side with similarity scores and colored terminal diffs.',
      tags: ['Python', 'Groq API', 'difflib', 'Click', 'Rich'],
      year: '2024',
      github: 'https://github.com/devesh2304',
      color: '#3a2a5a',
    },
    {
      id: 5,
      title: 'Cascade AI',
      desc: 'Multi-agent backend routing queries to specialized agents via LLM intent classification. Stateful with Firestore persistent memory.',
      tags: ['Python', 'Groq API', 'Firestore', 'Multi-Agent'],
      year: '2024',
      github: 'https://github.com/devesh2304',
      color: '#1a4a3a',
    },
    {
      id: 6,
      title: 'GAIA Benchmark Agent',
      desc: 'Autonomous agent scoring 60% on GAIA benchmark via dynamic tool selection — web search, Python execution, and calculator.',
      tags: ['smolagents', 'LiteLLM', 'Groq', 'DuckDuckGo'],
      year: '2024',
      github: 'https://github.com/devesh2304',
      color: '#4a3a1a',
    },
    {
      id: 7,
      title: 'Research Paper Tutor',
      desc: 'Full RAG pipeline letting students query any research paper conversationally. Vector search via Qdrant + curriculum-aware learning tracking.',
      tags: ['Docling', 'Sentence Transformers', 'Qdrant', 'Groq'],
      year: '2024',
      github: 'https://github.com/devesh2304',
      color: '#2a1a4a',
    },
  ]

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">// things I've built</p>
        <div className="section-divider"></div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div
                className="project-thumbnail"
                style={{ background: `linear-gradient(135deg, ${project.color}, #0a0a0a)` }}
              >
                <span className="project-year">{project.year}</span>
                <div className="project-placeholder-icon">
                  <i className="bx bx-code-block"></i>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="project-tag" key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                    <i className="bx bxl-github"></i>
                    <span>Code</span>
                  </a>
                </div>
              </div>

              <div className="project-overlay"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects