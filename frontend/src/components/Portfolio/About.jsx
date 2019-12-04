import React from 'react'

const About = () => {
  return (
    <div className='portfolio-item'>
      <h1 className='title'>ABOUT</h1>
      <p className='portfolio-text'>
      I'm an aspiring software engineer currently studying Computer Science at Aalto
      University. I have created full-stack web applications, like this website,
      games and quality of life projects for my friends and I. I am eager to learn
      new technologies and frameworks in the future, most interested in full-stack
      web development and cloud applications.
      </p>
      <div className="languages-frameworks">
        <div>
          <h6>Languages</h6>
          <div>
            <span className='about-span'>JavaScript</span>
            <span className='about-span'>Scala</span>
            <span className='about-span'>HTML</span>
            <span className='about-span'>CSS</span>
            <span className='about-span'>SQL</span>
            <span className='about-span'>C#</span>
            <span className='about-span'>C</span>
          </div>
        </div>
        <div>
          <h6>Frameworks and libraries</h6>
          <div>
            <span className='about-span'>Node.js</span>
            <span className='about-span'>React.js</span>
            <span className='about-span'>Redux</span>
            <span className='about-span'>PostgreSQL</span>
            <span className='about-span'>MongoDB</span>
            <span className='about-span'>Socket.io</span>
            <span className='about-span'>Discord.js</span>
            <span className='about-span'>Unity</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
