import React from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Contact from '../Contact';
import './index.scss';
import { useState, useEffect } from 'react';
import { FaAngular, FaJava, FaPython, FaReact, FaSass, FaSwift } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss } from 'react-icons/si';
import { DiCss3, DiHtml5 } from 'react-icons/di';
import { DiCode } from 'react-icons/di';
import { RiJavascriptFill } from "react-icons/ri";

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
    { icon: RiJavascriptFill, name: 'JavaScript' },
    { icon: FaSwift, name: 'Swift' },
    { icon: FaReact, name: 'React' },
    { icon: FaAngular, name: 'Angular' },
    { icon: DiCode, name: 'C' },
    { icon: DiHtml5, name: 'HTML' },
    { icon: DiCss3, name: 'CSS' }
  ];
  
  return (
    <>
      <div className='container skills-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['S', 'k', 'i', 'l', 'l', 's']} idx={15} />
          </h1>
          <p>
            Before I came to UNC and began to take computer science courses, I had never touched any programming languages. Yet, I've learned many different 
            languages at through coursework and enjoyed it, so much that I picked up more languages and technologies on my own time at home. 
          </p>
          <p>
            Given that I'm a fast-learner, possess experience with problem-solving through my many managment roles, and can manage a significant workload, I have taken on 
            frontend and backend languages and techonologies. I would be even more excited to learn more languages and technologies, expanding my skillset 
            with your company. These are just a few of the programming languages and technologies I have worked with, but there are many more like <span className='standout-text'>Git</span>, <span className='standout-text'>APIs</span>, 
            <span className='standout-text'>TypeScript</span>, etc.         
          </p>
            <p>
            Visit my <a 
                target='_blank' 
                rel='noreferrer' 
                href='https://www.linkedin.com/in/benkaheel/'
                >
                    <span className='standout-link'>LinkedIn</span> 
                </a> profile for more details or even <a 
                target='_self' 
                rel='noreferrer' 
                href='../Contact'
                >
                  <a href='Benjamin_Kaheel_Resume_.pdf'>ressummee</a>
                    <span className='standout-link'>contact</span>
                </a> me for a copy of my resume. 
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