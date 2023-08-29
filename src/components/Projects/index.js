import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { render } from '@testing-library/react';
import portfolioData from '../../data/portfolio.json'

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
    
      const renderPortfolio = (portfolio) => {
        return (
          <div className='images-container'>
            {
              portfolio.map((port, idx) => {
                return (
                  <div key={idx} className='image-box'>
                    <img src={port.cover} alt='portfolio' className='portfolio-image' />
                    <div className='content'>
                      <p className='title'>{port.title}</p>
                      <h4 className='description'>{port.description}</h4>
                      <button className='btn' onClick={() => window.open(port.url)}>View</button>
                  </div>
                  </div>
                )
              })
            }
          </div>
        )
      }

    return (
    <>
    <div className='container projects-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters letterClass={letterClass} strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']} idx={15} />
            </h1>
            <p>
            Passionately exploring web development and design, I've led projects and been a part of others handling the design elements of majority.
            Beginning to build a full-stack application, mastering front-end to back-end communication. Created a captivating portfolio 
            to showcase my journey and accomplishments. Stay tuned for more!
            </p>
        </div>
        <div className='portfolio-block'>{renderPortfolio(portfolioData.portfolio)}</div>
    </div>
    </>
    )
}

export default Projects;