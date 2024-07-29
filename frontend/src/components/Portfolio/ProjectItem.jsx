import React from 'react'

const github = require('../../images/github.svg')
const towerDefense = require('../../images/TD.gif')
const stickmanBattle = require('../../images/SB.gif')
const fiskars = require('../../images/fiskars.jpg')
const myWebsite = require('../../images/myWebsite.PNG')
const espoo = require('../../images/espoo.jpg')

const ProjectItem = (props) => {
  const image = (name) => {
    switch (name) {
      case 'Tower Defense':
        return towerDefense
      case 'Fiskars Co-Create Platform':
        return fiskars
      case 'Stickman Battle':
        return stickmanBattle
      case 'My Website':
        return myWebsite
      case 'Espoo HobbyPath':
        return espoo
      default:
    }
  }
  return (
    <div key={props.project.id}>
      {props.project
        ? <>
          <div className='project-item-text'>
            <h2 align='center'>{props.project.name}</h2>
            <p className='portfolio-text'>
              {props.project.paragraphs.map(paragraph => (
                <>
                  <br />
                  {paragraph}
                  <br />
                </>
              ))}
            </p>
            <a href={props.project.links[0]}>
              <img src={github}.default alt='Github' className='logo' />
            </a>
          </div>
          <div className='project-item-media'>
            <a href={props.project.links[1]}><img id='gif' src={image(props.project.name)} alt={props.project.links[1]} /></a>
            <div>
              {props.project.techs.map(tech => (
                <>
                  <span className='about-span'>{tech}</span>
                </>
              ))}
            </div>
          </div>
          </>
        : <p>empty</p>}

    </div>
  )
}

export default ProjectItem
