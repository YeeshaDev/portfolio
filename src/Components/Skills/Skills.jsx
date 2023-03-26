import React from 'react';
import {FaPlay} from 'react-icons/fa'
import './Skills.css'


function Skills() {
    return (
        <div className='skills-content' data-aos='fade-in'>
            <div className='skills-info'>
                <div className='skills-text'>
          <h1 className='skills'>Skills</h1> 
          <span className='my-skills'>My coding Journey</span>
          <p className='skills-subtext'>My coding journey has been the one of best thing i have experienced.
            Started from coming across a tweet on twitter,fell in love
            with how you can create amazing things from pieces of codes.
            I can remember starting with my phone and always groaning because of how frustrating it can be to code with a phone.Fast forward, got a laptop,
            practiced immensely and i have never been happier.
          </p>
          </div>
          <div className='my-skillset'>
            <img src='./images/skillset.svg' 
            alt='skill set'
            />
          </div>
          </div>
          <div className='technologies'>
            <h4>Here are the few technologies i have used:</h4>
            <div className='techstack-content'>
            <span className='techstack'>
              <FaPlay className='stack-icon'/>
              <p>HTML</p>
            </span>
            <span className='techstack'>
              <FaPlay className='stack-icon'/>
              <p>CSS</p>
            </span>
            <span className='techstack'>
              <FaPlay className='stack-icon'/>
              <p>JavaScript</p>
            </span>
            <span className='techstack'>
              <FaPlay className='stack-icon'/>
              <p>React</p>
            </span>
            <span className='techstack'>
              <FaPlay className='stack-icon'/>
              <p>Tailwind</p>
            </span>
            <span className='techstack'>
              <FaPlay className='stack-icon'/>
              <p>Sass</p>
            </span>
            </div>
            
          </div>
          
          <hr/> 
        </div>
    )
}

export default Skills