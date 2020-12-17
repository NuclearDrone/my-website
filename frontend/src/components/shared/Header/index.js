import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderItems from './HeaderItems'
// const logo = require('../../../images/NDlogo.svg')
const menu = require('../../../images/menuIcon.svg')

const Header = () => {
  const [showMobileHeader, toggleMobileHeader] = useState(false)

  const showMobileItems = { height: showMobileHeader ? 'auto' : 0 }
  const showHeaderBorder = { borderBottom: showMobileHeader ? '0.2em solid #04C2C9' : 0 }

  const toggle = () => toggleMobileHeader(!showMobileHeader)
  return (
    <div className='header'>
      <div className='top-header-items' style={showHeaderBorder}>
        {/* <div className='headerLogo'>
          <img src={logo} alt='logo' className='logo' />
        </div> */}
        <Link to='#' className='top-header-name'>
          Micke Enberg
        </Link>
        <div className='header-items-desktop'>
          <HeaderItems />
        </div>
        <div className='header-mobile'>
          <img onClick={toggle} src={menu} alt='menu' className='menu' />
        </div>
      </div>
      <div className='header-items-mobile' style={showMobileItems}>
        <HeaderItems />
      </div>
    </div>
  )
}

export default Header
