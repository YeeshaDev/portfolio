import React from 'react';
import {FaTwitter,FaGithub,FaLinkedin} from 'react-icons/fa'
import './Footer.css'
function Footer() {
    return (
        <footer>
            <div className='social-links'>
                <a href='https://twitter.com/Aisha_juwon' 
                className='socials'
                target='_blank'
                rel="noreferrer">
                <FaTwitter className='social-icon'/>  
                </a>
                <a href='https://github.com/YeeshaDev' 
                className='socials'
                target='_blank'
                rel="noreferrer">
                <FaGithub className='social-icon'/>  
                </a>
                <a href='https://www.linkedin.com/in/aisha-agunbiade-88646b1a6' 
                className='socials'
                target='_blank'
                rel="noreferrer">
                <FaLinkedin className='social-icon'/>  
                </a>
          
          </div>

          {/* This is the mobile social links */}
          <div className='mobile-links'>
                <a href='https://twitter.com/Aisha_juwon' 
                className='mobile-mobile-socials'
                target='_blank'
                rel="noreferrer">
                <FaTwitter className='social-icon'/>  
                </a>
                <a href='https://github.com/YeeshaDev' 
                className='mobile-socials'
                target='_blank'
                rel="noreferrer">
                <FaGithub className='social-icon'/>  
                </a>
                <a href='https://www.linkedin.com/in/aisha-agunbiade-88646b1a6' 
                className='mobile-socials'
                target='_blank'
                rel="noreferrer">
                <FaLinkedin className='social-icon'/>  
                </a>
          
          </div>
           <p>Designed and built by<br/> Agunbiade
            Aishat, 2022 </p> 
        </footer>
    )
}

export default Footer
