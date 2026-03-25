import { useEffect } from 'react'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import useReveal from './hooks/useReveal'

function App() {
  useReveal()
  useEffect(() => {
    // Custom cursor
    const cursor = document.querySelector('.cursor')
    const cursorOutline = document.querySelector('.cursor-outline')

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
      cursorOutline.style.left = e.clientX + 'px'
      cursorOutline.style.top = e.clientY + 'px'
    }

    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  return (
    <>
      {/* Custom Cursor */}
      <div className="cursor"></div>
      <div className="cursor-outline"></div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
        <Footer />

        {/* Placeholders for upcoming phases */}
        <section id="services" style={{ height: '100vh' }}></section>
        <section id="contact" style={{ height: '100vh' }}></section>
      </main>
    </>
  )
}

export default App