import React from 'react'

const github = require('../../../images/github.svg')
const linkedin = require('../../../images/linkedin.svg')

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-links'>
        <a className='footer-link-a' href='https://www.linkedin.com/in/micke-enberg/'>
          <div className='footer-link'>
            <img src={linkedin} alt='LinkedIn' className='logo' />
          </div>
        </a>
        <a className='footer-link-a' href='https://github.com/NuclearDrone'>
          <div className='footer-link'>
            <img src={github} alt='Github' className='logo' />
          </div>
        </a>
      </div>
      <div className='footer-by'>
        <p className='by-text'>MICKE ENBERG &copy;2019</p>
      </div>
    </div>
  )
}

export default Footer
