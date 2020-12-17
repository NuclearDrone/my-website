import React from 'react'

const projectItem = ({ name, paragraphs, links, techs }) => {
  return (
    <div>
      <div className='project-item-text'>
        <h2 align='center'>{name}</h2>
      </div>
    </div>
  )
}

export default projectItem
