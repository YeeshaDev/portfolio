import React,{useRef,useState} from 'react';
import emailjs from '@emailjs/browser';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

function Contact() {

const form = useRef();

const [input,setInput] = useState({
    name:'',
    email:'',
    subject:'',
    message: '',
})


const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({...input,[name]:value})
}

const sendEmail = (e) => {
e.preventDefault();
emailjs.sendForm('service_pvetqze',
'template_csoq2sj', form.current,
'Yd0ftKDk064kWgEL8')
.then((result) => {
    console.log(result.text);
    toast.success('MESSAGE SENT SUCCESSFULLY',{
        position:toast.POSITION.BOTTOM_RIGHT
    })
    setInput({name:'',email:'',subject:'',message:''})
    
}, (error) => {
    console.log(error.text);
});

    }
   
    
       
    return (
        <section className='contact-content' id='contact'>
            <ToastContainer/>
            <article className='contact-wrapper' data-aos="fade-up">
                <h1>Contact</h1>
                
         <h2>Get In Touch</h2>
         
         <p className='contact-text'>Dropping a line to say g'day,ask for my resume or see 
            if we can build somehing amazing together?
            I'd love to here from you!
            
         </p>
         <p className='contact-text'>Please fill in your information below and
            i look foward to hearing from you!
         </p>
         <form onSubmit={sendEmail} ref={form} >
            
            <input type='text'
                 name='name'
            placeholder='name'
            value={input.name}
            onChange={handleChange}
            required
            />
            <input type='text'
            placeholder='email'
            value={input.email}
            onChange={handleChange}
            name='email'  required/>
            <input type='text'
            name='subject'
            value={input.subject}
            placeholder='subject'
            onChange={handleChange}
            />
            <textarea cols='50' 
            rows='10' 
            name='message'
            value={input.message}
            placeholder='Message'
            onChange={handleChange}
            required
            >
         </textarea>
        <input type='submit'
            value='Send' 
            className='submit-btn'
            
    />
         </form>
         
        </article>

         <hr/>
        </section>
    )
}

export default Contact
