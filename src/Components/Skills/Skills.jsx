import React from 'react';
import './Skills.css'


function Skills() {
  
    return (
        <div className='skills-content' data-aos='fade-in'>
            <div className='skills-info'>
                <div className='skills-text'>
          <h1 className='skills'>Skills</h1> 
          <span className='my-skills'>My coding Journey</span>
          <p className='skills-subtext'>My coding journey has been the one of best thing i have experienced.
            My journey started when i came across a tweet on twitter,fell in love
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
          <div className='techstack'>
            {Tstack.map((item) =>(
              <p key={item.id} data-aos='fade-up'>{item.stack}</p>
            ) )}
          </div>
          </div>
          
          <hr/> 
        </div>
    )
}

export default Skills

const Tstack=[
  {
    id:1,
    stack:'HTML',
  },
  {
    id:2,
    stack:'CSS',
  },
  {
    id:3,
    stack:'JavaScript',
  },
  {
    id:4,
    stack:'ReactJs',
  },
  {
    id:5,
    stack:'NextJs',
  },
  {
    id:6,
    stack:'Bootstrap',
  },
  {
    id:7,
    stack:'Tailwind',
  },
  {
    id:8,
    stack:'Scss',
  }
]