import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import React, { useEffect, useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';


const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
    
        return () => {
          clearTimeout(timeoutId);
        };
      }, []);

      const form = useRef();

      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ipm08if', 'template_u4xsj4o', form.current, 'fC49wFOeRT4TyCV79')
          .then((result) => {
              alert('Message successfully sent!');
              window.location.reload(false)
          }, (error) => {
              alert('Failed to send message, please try again later.');
          });
      };
    

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']} 
                    idx={15} 
                    />
                </h1>
                <p>
                    I am interest in freelance opportunities. Let me build you a website for your start-up or company. I love working 
                    on ambitious and complex projects. However, if you have another request or question, don't hesitate to contact me 
                    using the form below. 
                </p>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail} >
                        <ul>
                        <li className='half'>
                            <input type="text" name="user_name" placeholder='Name' required />
                        </li>
                        <li className='half'>
                            <input type="email" name="user_email" placeholder='Email' required />
                        </li>
                        <li>
                            <input type="text" name="user_subject" placeholder='Subject' required />
                        </li>
                        <li>
                            <textarea type="text" name='user_message' placeholder='Message' required />
                        </li>
                        <li>
                            <input className=' contact-me-button' type="Submit"  value='Submit' />
                        </li>
                        </ul>
                    </form>

                    <script type="text/javascript"
                        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
                    </script>

                    <script type="text/javascript">
                        emailjs.init('fC49wFOeRT4TyCV79')
                    </script>
                </div>
            </div>
            <div className='info-map'>
                Benjamin Kaheel, 
                <br />
                North Carolina, 
                <br />
                University of North Carolina at Chapel Hill
                <br />
            </div>
            <div className='map-wrap'>
                <MapContainer center={[35.9105, -79.05035]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[30.1393, 31.3245]}>
                    <Popup>Where I was born</Popup>
                </Marker>
                <Marker position={[35.785, -78.64]}>
                    <Popup>Where I live</Popup>
                </Marker>
                <Marker position={[35.9105, -79.05035]}>
                    <Popup>Where I am studying</Popup>
                </Marker>
                </MapContainer>
            </div>
        </div>
        
        </>
    )
}

export default Contact;