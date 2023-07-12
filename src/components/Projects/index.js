import './index.scss';
import { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import AnimatedLetters from '../AnimatedLetters';

const Projects = () => {


    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
    
        return () => {
          clearTimeout(timeoutId);
        };
      }, []);
    

    return (
    <>
    <div className='container projects-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters letterClass={letterClass} strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']} idx={15} />
            </h1>
            <p>
                Ben is <span><Typewriter
            words={['brainstorming', 'coding']}
            loop={5}
            cursor
            cursorStyle='|'
            // typeSpeed={}
            deleteSpeed={30}
            delaySpeed={1500}
          /></span>
            </p>
            

            
        </div>
    </div>
    </>
    )
}

export default Projects;