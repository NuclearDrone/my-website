import React from 'react'
const logo = require('../../../images/NDlogo.svg')

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt='logo' className='logo' />
      <p className='header-item'>TEST HEADER</p>
      <p className='header-item'>TEST HEADER</p>
      <p className='header-item'>TEST HEADER</p>
      <p className='header-item'>TEST HEADER</p>
    </div>
  )
}

export default Header
