import React from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Contact from '../Contact';
import './index.scss';
import { useState, useEffect } from 'react';
import { FaJava, FaPython, FaReact, FaSass } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss } from 'react-icons/si';
import { DiCss3, DiHtml5 } from 'react-icons/di';
import { DiCode } from 'react-icons/di';

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const logos = [
    { icon: FaJava, name: 'Java' },
    { icon: FaPython, name: 'Python' },
    { icon: SiJavascript, name: 'JavaScript' },
    { icon: FaReact, name: 'React' },
    { icon: DiCode, name: 'C' },
    { icon: DiHtml5, name: 'HTML' },
    { icon: DiCss3, name: 'CSS' },
    { icon: FaSass, name: 'Sass' },
    { icon: SiTailwindcss, name: 'TailwindCSS' },
  ];
  
  return (
    <>
      <div className='container skills-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['S', 'k', 'i', 'l', 'l', 's']} idx={15} />
          </h1>
          <p>
            Throughout my programming journey, embraced a diverse array of languages and technologies. From crafting backend 
            applications to engaging frontend experiences, I've immersed myself in various tools and frameworks to achieve 
            remarkable results. <span className='standout-text'>Java</span> remains the stronghold, yet countless 
            hours dedicated to <span className='standout-text'>Python</span> as well. Great skillset encompassing <span className='standout-text'>HTML</span>, <span className='standout-text'>CSS</span>, <span className='standout-text'>React.js</span>, <span className='standout-text'>TailwindCSS</span>, and much more. 
            This versatility empowers me to tackle diverse projects with precision and creativity.            
            </p>
            <p>
            Visit my <a 
                target='_blank' 
                rel='noreferrer' 
                href='https://www.linkedin.com/in/benjamin-kaheel/'
                >
                    <span className='standout-link'>LinkedIn</span> 
                </a> profile for more details or just <a 
                target='_self' 
                rel='noreferrer' 
                href='../Contact'
                >
                    <span className='standout-link'>contact</span>
                </a> me. You can also check out my resume at this <span className='standout-link'>link</span>. 
            </p>
        </div>
        <div className='skills-display'>
          <ul className='skills-list'>
            <div className='row'>
              {logos.slice(0, 3).map((logo, index) => (
                <li key={index} className='skills-item'>
                  {React.createElement(logo.icon)}
                  <span className='skill-name'>{logo.name}</span>
                </li>
              ))}
            </div>
            <div className='row'>
              {logos.slice(3, 6).map((logo, index) => (
                <li key={index} className='skills-item'>
                  {React.createElement(logo.icon)}
                  <span className='skill-name'>{logo.name}</span>
                </li>
              ))}
            </div>
            <div className='row'>
              {logos.slice(6).map((logo, index) => (
                <li key={index} className='skills-item'>
                  {React.createElement(logo.icon)}
                  <span className='skill-name'>{logo.name}</span>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Skills;