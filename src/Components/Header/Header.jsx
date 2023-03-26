import React, { useState,useEffect } from 'react';
import {Link} from 'react-scroll'
import {FaTimes,FaPause,FaPlay,FaEquals} from 'react-icons/fa';
import './Header.css';

function Header({playing,pause,play}) {
    const[menu,setMenu] = useState(false);
    
   
    const handleClick = () => {
        setMenu(prev => !prev)
    }
    
    
      
    return (
        <header className='header-content'>
          <nav>
            <div className='header-logo'>
            <h1 className='nav-logo'>
                Yeesha<span >Dev</span></h1>
                <button 
          onClick={playing ? pause : play} 
          className='music-btn'>
          { playing ? <FaPause /> : <FaPlay /> }
          </button>
                </div>
                
                <div className={menu ? 'menu active' : 'menu'} >
            <ul>
                <li className='active-btn'><Link to='home' spy={true} smooth={true} offset={-70} duration={500}  onClick={handleClick}>Home</Link></li>
                <li><Link to='about' spy={true} smooth={true} offset={-70} duration={500}  onClick={handleClick}>About</Link>
                </li>
                <li><Link to='project' spy={true} smooth={true} offset={-130} duration={500}  onClick={handleClick}>Projects</Link></li>
                <li><Link to='contact' spy={true} smooth={true} offset={-70} duration={500}  onClick={handleClick}>Contact</Link></li>
                <a href='#' className='resume'>Resume</a>
            </ul>
            </div>
            <button className='resume-btn'>Resume</button>
           <button className={menu ? 'menu-btn active' : 'menu-btn'} onClick={handleClick}>
                    {menu ? <FaTimes/> : <FaEquals/>}
                </button>
                  
         
                
            </nav> 

            <hr/> 
        </header>
    )
}

export default Header
