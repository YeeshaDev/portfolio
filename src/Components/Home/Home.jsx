import React from 'react';
import Typed from "react-typed";
import Avatar from './avatar1.png'
import BackgroundAnimation from './BackgroundAnimation';
import './Home.css'

function Home() {
    return (
        <main className='home-content' id='home'>
            <section className='home-upper'>
            <article className='home-text' >
            <h1>Hi, I am<br/> 
            <Typed
            strings={["Aisha."]}
            typeSpeed={120}
            backSpeed={120}
            loop
          />
                </h1>
                <h2>Frontend Web Developer</h2>

                </article>
                <div className='hero-image'>
                    <div className='img-container'></div>
                    <img src={Avatar}
                    className='avatar' 
                    alt='avatar'
                    
                    />  
                                 
                    </div>
                    </section>
                    <h6 ><q>Passionate about building beautiful things...</q></h6>
                    <a href='mailto:aishaagunbiade05@gmail.com'
                    className='email-btn'
                    >contact me</a>
                    <BackgroundAnimation/>
                <hr />
        </main>
    )
}

export default Home