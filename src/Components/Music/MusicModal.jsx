import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './MusicModal.css'

function MusicModal({play,pause,closebtn}) {

    return (
        <div className='modal'>
        <div className='modal-content'>
        <span onClick={closebtn}
        className='close-btn'>
            <FaTimes/>
            </span>
           <h1>Welcome!</h1>
           
           <p>Would you like to listen
             to some classic <span>&#9835;</span> as you explore?</p>
             
             <div className='modal-btn'>
                <button onClick={play}>Yes</button>
                <button onClick={pause}>No</button>
             </div>
        </div>
        </div>
    )
}

export default MusicModal
