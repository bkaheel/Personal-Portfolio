import './index.scss';
import { useState, useEffect } from 'react';
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
            Passionately exploring web development and design, I've led projects and handled both front-end and back-end tasks. 
            Currently building a full-stack application, mastering front-end to back-end communication. Creating a captivating portfolio 
            to showcase my journey and accomplishments. Stay tuned for more!
            </p>
            
            

            
        </div>
    </div>
    </>
    )
}

export default Projects;