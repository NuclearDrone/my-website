import React from 'react'
const TDGif = require('../../images/TD.gif')
const UGGGif = require('../../images/UGG.gif')

const Projects = () => {
  return (
    <div className="portfolio-item">
      <h1 className="title">PROJECTS</h1>
      <div className='projects'>
        {/* Tower Defense */}
        <div>
          <div className="project-item-text">
            <h2 align='center'>Tower Defense</h2>
            <p className="portfolio-text">
              A simple tower defense game. There are endless amounts of waves and
              the enemies keep getting more difficult.
              <br/><br/>
              The game is created using Scala and object-oriented programming.
              It uses ScalaFX library for the 2D graphics UI and has functionality to save
              and load progress from a file.
              <br/><br/>
              This was my first programming project completely done from scratch.
              If I would start the project all over again, I would make sure the game
              can be packaged to a usable form outside of the IDE.
            </p>
          </div>
          <div className="project-item-media">
            <a href="https://i.imgur.com/r7446N5.gifv"><img id="gif" src={ TDGif } alt="https://i.imgur.com/r7446N5.gifv"/></a>
            <span className='about-span'>Scala</span>
          </div>
        </div>
        {/* Discord bot */}
        <div>
          <div className="project-item-text">
            <h2 align='center'>Discord U.GG Bot</h2>
            <p className="portfolio-text">
              A bot account in Discord, which runs on Node.js. It uses Discord.js and Discord API to
              connect the bot to a users Discord server and listen for commands in all chat
              channels. When called, the bot links the user a website according to their
              given parameters.
              <br/><br/>
              The bot was a quick and easy project I did to help my friends and I
              when playing League of Legends. Learning JavaScript during the project
              helped me out a lot when I started programming web applications.
              <br/><br/>
              The bot is very simple and can only be used with correct syntax. To expand
              the bot I would add spelling error checking and add the possibility to 
              do multiple different searches at once.
            </p>
          </div>
          <div className="project-item-media">
            <a href="https://i.imgur.com/z58roy9.gifv"><img id="gif" src={ UGGGif } alt="https://i.imgur.com/z58roy9.gifv"/></a>
            <div>
              <span className='about-span'>JavaScript</span>
              <span className='about-span'>Node.js</span>
              <span className='about-span'>Discord.js</span>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>    
  )
}

export default Projects