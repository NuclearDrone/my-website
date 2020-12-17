import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const HeaderItems = () => {
  return (
    <>
      <Link smooth to='#about' className='header-item'>ABOUT</Link>
      <Link smooth to='#projects' className='header-item'>PROJECTS</Link>
      <Link smooth to='#contact' className='header-item'>CONTACT</Link>
    </>
  )
}

export default HeaderItems
