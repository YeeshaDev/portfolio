import React from 'react';
import { projects } from './data';
import './Project.css';

function Project() {
    return (
        <main className='project-content' id='project' data-aos="fade-up">
           
            <h1 className='work'>Projects</h1>
            <span className='my-projects'>my works</span>
            
                {projects.map((item) => {
                    const{id,name,text,demoLink,codeLink,mobileImg,LaptopImg} = item;
                    
                    return (
                        <section className='project-wrapper ' key={id} data-aos="fade-left">
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
                <article className='project-info '>
                    <div className='device'>
                    <img src={`/assets/${LaptopImg}`}
                    alt='project'
                    className='device-img'
                    />
                    <img src={`/assets/${mobileImg}`}
                    alt='project'
                    
                    className='mobile-img'/>
                    </div>
                    
               
            </article>
            </section>
                    )
                })}
                
            <hr/> 
        </main>
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