import React,{useState,useRef,useEffect} from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Project from './Components/Project/Project';
import Loading from './Components/Home/Loading';
import CelloMusic from './Components/Music/audio.mp3'
import MusicModal from './Components/Music/MusicModal';
import Skills from './Components/Skills/Skills';
import Scroll from './Scroll/Scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Components/Footer/Footer';


function App() {
  const [playing,setPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false)
     const audio = useRef(new Audio(CelloMusic))
     const play = () => {
        setPlaying(true);
        audio.current.play();
        setModal(false)  
     }

     const pause = () => {
        setPlaying(false);
        audio.current.pause();
        setModal(false)
        
     }

     const close = () => {
      setModal(false)
     }

     useEffect(() => {
      AOS.init({
        offset: 300, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700,
      });
    }, [])
 
    //This is for the loader timer before the main page comes on
     useEffect(() =>{
      const loader = setTimeout(() => {
        setLoading(false)
      },2000);
      return () => clearTimeout(loader)
     },[])
     
     //This sets a timer for the music modal to appear on the screen.
     useEffect(() =>{
      const modalTimer = setTimeout(() => {
        setModal(true)
      },10000);
      return () => clearTimeout(modalTimer)
     },[])

     if(loading){
      return (
        <div>
        <Loading/>
        </div>
      )
    }
    
    else {
  return (
    
    <div className="App">
       {modal && <MusicModal
      play={play}
      pause={pause}
      closebtn = {close}
      />
       }
    <Header
    play={play}
    pause={pause}
    playing={playing}/> 
    <Home />
    <About />
    <Skills />
    <Project />
    <Contact />
    <Footer/>
    <Scroll />
    
    </div>
  );
    }
}

export default App;

