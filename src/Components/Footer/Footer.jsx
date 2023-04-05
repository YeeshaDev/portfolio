import React from 'react';
import {FaTwitter,FaGithub,FaLinkedin} from 'react-icons/fa'
import './Footer.css'
function Footer() {
    return (
        <footer>
            <section className='social-links'>
                <a href='https://twitter.com/Aisha_juwon' 
                className='socials'
                target='_blank'>
                <FaTwitter className='social-icon'/>  
                </a>
                <a href='https://github.com/YeeshaDev' 
                className='socials'
                target='_blank'>
                <FaGithub className='social-icon'/>  
                </a>
                <a href='https://www.linkedin.com/in/aisha-agunbiade-88646b1a6' 
                className='socials'
                target='_blank'
                >
                <FaLinkedin className='social-icon'/>  
                </a>
          
          </section>

          {/* This is the mobile social links */}
          <section className='mobile-links'>
                <a href='https://twitter.com/Aisha_juwon' 
                className='mobile-mobile-socials'
                target='_blank'
                >
                <FaTwitter className='social-icon'/>  
                </a>
                <a href='https://github.com/YeeshaDev' 
                className='mobile-socials'
                target='_blank'
                >
                <FaGithub className='social-icon'/>  
                </a>
                <a href='https://www.linkedin.com/in/aisha-agunbiade-88646b1a6' 
                className='mobile-socials'
                target='_blank'>
                <FaLinkedin className='social-icon'/>  
                </a>
          
          </section>
           <p>Designed and built by<br/> Agunbiade
            Aisha, 2023 </p> 
        </footer>
    )
}

export default Footer
