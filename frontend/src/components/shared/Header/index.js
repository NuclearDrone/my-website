import React, { useState } from 'react'
const logo = require('../../../images/NDlogo.svg')

const Header = () => {
  const [showMobileHeader, toggleMobileHeader] = useState(false)

  const toggle = () => toggleMobileHeader(!showMobileHeader)
  return (
    <div className='header'>
      <div className='headerLogo'>
        <img src={logo} alt='logo' className='logo' />
      </div>
      <div className='header-items-desktop'>
        <p className='header-item'>TEST HEADER</p>
        <p className='header-item'>TEST HEADER</p>
        <p className='header-item'>TEST HEADER</p>
        <p className='header-item'>TEST HEADER</p>
      </div>
      <div className='header-mobile'>
        <p onClick={toggle}>Open</p>
        {showMobileHeader && (
          <div className='header-items-mobile'>
            <p className='header-item'>TEST HEADER</p>
            <p className='header-item'>TEST HEADER</p>
            <p className='header-item'>TEST HEADER</p>
            <p className='header-item'>TEST HEADER</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
