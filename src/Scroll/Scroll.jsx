import React, { useState } from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import './Scroll.css'

function Scroll() {
    const [scrollToTop, setScrollToTop] = useState(false);

    const visible = () => {
     const scroll = document.documentElement.scrollTop;
     if(scroll > 300){
        setScrollToTop(true)
     }
     else if (scroll <= 300){
        setScrollToTop(false)
     }
    };
    const scrolled = () => {
        window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}
window.addEventListener('scroll', visible);
    return (
        <div className='scroll-btn'>
            <button>
            <FaArrowCircleUp onClick={scrolled} 
     style={{display: scrollToTop ? 'inline' : 'none'}} />
     </button>
        </div>
    )
}

export default Scroll
