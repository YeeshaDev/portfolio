import React from 'react';
import { projects } from './data';
import './Project.css';

function Project() {
    return (
        <div className='project-content' id='project' data-aos="fade-up">
           
            <h1 className='work'>Projects</h1>
            <span className='my-projects'>my works</span>
            
                {projects.map((item) => {
                    const{id,name,text,demoLink,codeLink,mobileImg,LaptopImg} = item;
                    return (
                        <div className='project-wrapper ' key={id} data-aos="fade-left">
                            <div className='project-details'>
                <h1>{name}</h1>
            <p>{text}</p>
         <a href={demoLink}
         className='project-links'><span>
            View Demo</span></a> 
            <a href={codeLink}
            className='project-links'><span>
            Source Code</span></a> 
            </div>
                <div className='project-info '>
                    <div className='device'>
                    <img src={LaptopImg}
                    loading='lazy'
                    alt='project'
                    className='device-img'/>
                    <img src={mobileImg}
                    alt='project'
                    loading='lazy'
                    className='mobile-img'/>
                    </div>
                    
               
            </div>
            </div>
                    )
                })}
                
            <hr/> 
        </div>
    )
}

export default Project

/* <div className='project-wrapper ' data-aos="fade-right">
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
            </div> */