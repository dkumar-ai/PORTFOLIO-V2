import './Services.css'

const Services = () => {
  const services = [
    {
      id: 1,
      icon: 'bx bx-brain',
      title: 'Machine Learning',
      desc: 'Building and deploying ML models for classification, regression, and anomaly detection using TensorFlow, Keras, and Scikit-learn.',
    },
    {
      id: 2,
      icon: 'bx bx-network-chart',
      title: 'Deep Learning',
      desc: 'Designing CNN, ANN, and transfer learning architectures for computer vision and medical imaging tasks.',
    },
    {
      id: 3,
      icon: 'bx bx-bot',
      title: 'AI Agents & LLMs',
      desc: 'Developing multi-agent systems, RAG pipelines, and LLM-powered tools using Groq, smolagents, and LiteLLM.',
    },
    {
      id: 4,
      icon: 'bx bx-chip',
      title: 'IoT Systems',
      desc: 'Engineering embedded solutions on ESP32 with sensor integration, automation logic, and real-time data pipelines.',
    },
    {
      id: 5,
      icon: 'bx bx-data',
      title: 'Data Engineering',
      desc: 'Building data pipelines, vector databases, and feature extraction systems for scalable AI applications.',
    },
    {
      id: 6,
      icon: 'bx bx-code-alt',
      title: 'Backend Development',
      desc: 'Creating robust Python backends with REST APIs, CLI tools, and cloud integrations like Firestore.',
    },
  ]

  return (
    <section id="services" className="services section">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <p className="section-subtitle">// what I bring to the table</p>
        <div className="section-divider"></div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon-wrap">
                <i className={service.icon}></i>
              </div>
              <div className="service-number">0{service.id}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <div className="service-line"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services