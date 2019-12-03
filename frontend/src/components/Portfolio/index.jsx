import React from 'react'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="align-portfolio">
        <a href='/#' id='about'><span id='hide'>hideThis</span></a>
        <About />

        <a href='/#' id='projects'><span id='hide'>hideThis</span></a>
        <Projects />

        <a href='/#' id='contact'><span id='hide'>hideThis</span></a>
        <Contact />
      </div>
    </div>
  )
}

export default Portfolio