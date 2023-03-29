import React from 'react';
import Typed from "react-typed";
import BackgroundAnimation from './BackgroundAnimation';
import './Home.css'

function Home() {
    return (
        <div className='home-content' id='home'>
            <section className='home-upper'>
            <div className='home-text' >
            <h1>Hi,<br/> 
            <Typed
            strings={["Aisha."]}
            typeSpeed={120}
            backSpeed={120}
            loop
          />
                </h1>
                <h2>Frontend Web Developer</h2>

                </div>
                <div className='hero-image'>
                    <div className='img-container'></div>
                    <img src='./images/avatar1.png' 
                    alt='avatar'/>  
                                 
                    </div>
                    </section>
                    <h6 ><q>Passionate about building beautiful things...</q></h6>
                    <a href='mailto:aishaagunbiade05@gmail.com'>contact me</a>
                    <BackgroundAnimation/>
                <hr />
        </div>
    )
}

export default Home