import React from 'react';
import { FaMobileAlt } from 'react-icons/fa';
import './About.css';

function About() {
    return (
        <div className='about-content' id='about' data-aos="fade-left">
            <div className='about-wrapper' >
            <h1 className='about'>About</h1>
            <span className='my-self'>What I do</span>
            <p>I’m a Front-End Developer. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
                Well-organised person, problem solver,pay high attention to detail. Fan of Music, outdoor activities, TV series.Interested in 
                the entire frontend spectrum and looking foward to 
                working on ambitious projects with positive people.
                </p>
                <p>I create successful responsive websites 
                    that are fast, easy to use, and built with best practices.
                     The main area of my expertise is front-end development, 
                     building small and medium web apps, features,
                     animations, and coding interactive layouts.</p>
                <div className='tools' data-aos="fade-up">
                 <div className='tools-text'>
                    <h1>Web<br/> Development</h1>
                    <p>I create awesome websites and also the fix technical aspects,
                 such as its performance and capacity.</p>
                 <img src='./images/webtools.svg' 
                 className='web-tool-img'
                 alt='web tool'/>
                 </div>
                 <div className='tools-text'>
                    <h1>Problem<br/> Solving</h1>
                    <p>I find desired solutions to a problem, and applying best 
                        practices to achieve the best and befitting result.</p>
                 <img src='./images/problem-solving.svg' 
                 alt='web tool'
                 className='problem-solving-img'/>
                 </div>
                 <div className='tools-text'>
                    <h1>Responsive<br/> Design</h1>
                    <p>Using the best technologies and frame works to make the best responsive
                         website that spreads across all device.</p>
                 <FaMobileAlt className='mobile-icon'/>
                 </div>
                </div>
                
                <hr/>
                
            </div>
            
        </div>
        
    )
}

export default About