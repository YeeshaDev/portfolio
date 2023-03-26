import React from 'react';
import './Project.css';

function Project() {
    return (
        <div className='project-content' id='project' data-aos="fade-up">
           
            <h1 className='work'>Projects</h1>
            <span className='my-projects'>my works</span>
            <div className='project-wrapper project1' data-aos="fade-up">
            <div className='project-details'>
                <h1>Foodie Restuarant</h1>
            <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, expedita voluptates? Ut corrupti 
                pariatur inventore facilis reprehenderit, 
                aut tenetur iure.</h4>
         <a href='https://foodie-restuarant-yeeshadev-fuzekzzfm-yeeshadev.vercel.app/'
         className='project-links'><span>
            View Demo</span></a> 
            <a href='https://github.com/YeeshaDev/foodie-restuarant'
            className='project-links'><span>
            Source Code</span></a> 
            </div>
                <div className='project-info '>
                    <div className='device'>
                    <img src='./images/foodie-mac.png'
                    alt='project'
                    className='device-img'/>
                    <img src='./images/foodie-mobile.png'
                    alt='project'
                    className='mobile-img'/>
                    </div>
                    
               
            </div>
            </div>
            <div className='project-wrapper project2'data-aos="fade-left">
            <div className='project-details'>
                <h1>Gadgets</h1>
            <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, expedita voluptates? Ut corrupti 
                pariatur inventore facilis reprehenderit, 
                aut tenetur iure.</h4>
         <a href='https://youtube-clone-yeeshadev.vercel.app'
         className='project-links'><span>
            View Demo</span></a> 
            <a href='https://github.com/YeeshaDev/gadget-store-app'
            className='project-links'><span>
            Source Code</span></a> 
            </div>
                <div className='project-info '>
                <div className='device'>
                    <img src='./images/gadgets-tab.png'
                    alt='project'
                    className='device-img'/>
                    <img src='./images/gadgets-mobile.png'
                    alt='project'
                    className='mobile-img'/>
                    </div>
                    
               
            </div>
            </div>
            <div className='project-wrapper project3' data-aos="fade-right">
            <div className='project-details'>
                <h1>Youtube Clone</h1>
            <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, expedita voluptates? Ut corrupti 
                pariatur inventore facilis reprehenderit, 
                aut tenetur iure.</h4>
         <a href='https://youtube-clone-yeeshadev.vercel.app'
         className='project-links'><span>
            View Demo</span></a> 
            <a href='https://youtube-clone-yeeshadev.vercel.app'
            className='project-links'><span>
            Source Code</span></a> 
            </div>
                <div className='project-info '>
                    <img src='./images/project-3.png'
                    alt='project'
                    className='project-img'/>
               
            </div>
            </div>
        
            
            <hr/> 
        </div>
    )
}

export default Project
