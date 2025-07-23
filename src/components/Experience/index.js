import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';

const Experience = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const experiences = [
    {
      title: 'Research & Development Intern',
      company: 'Siemens Digital Industries Software',
      period: 'May 2025 - Present',
      bullets: [
        'Design and deploy a custom AI bot for the SiemensGPT catalogue tailored to the Advanced Machine Engineering domain, achieving measurable impact through 29+ uses and 14 likes',
        'Conduct a feasibility study on AI integration between Copia and Teamcenter platforms, delivering strategic analysis report with 3 proposed solutions',
        'Collaborate with developers to build and validate Automation Lifecycle Management (AuLM) workflow demonstrations'
      ]
    },
    {
      title: 'Operations Manager',
      company: 'The Car Park',
      period: 'September 2023 - Present',
      bullets: [
        'Streamline operations for a team of 29+ staff by implementing efficient systems for equipment distribution',
        'Execute data-driven logistics plans for 17 high-volume events (21,750+ attendees each) within 30 days',
        'Manage complex scheduling systems and implemented process improvements enhancing shift change efficiency by 20%'
      ]
    },
    {
      title: 'iOS Developer',
      company: 'App Team Carolina',
      period: 'September 2023 – May 2025',
      bullets: [
        'Developed client-facing iOS applications using Swift, reaching 1,500+ users',
        'Improved accessibility for children with CVI by implementing high-contrast visuals and adjustable UI elements',
      ]
    },
    {
      title: 'Founding Director, Thirst Service Initiative',
      company: "St. Mary's Coptic Orthodox Church",
      period: 'September 2024 - Present',
      bullets: [
        'Direct launch of campus outreach initiative at UNC-Chapel Hill, coordinating monthly stations reaching 500+ students',
        'Engineer scalable operational framework for multi-campus expansion, developing training materials'
      ]
    }
  ];

  const renderExperience = () => {
    return (
      <div className='experience-container'>
        {experiences.map((exp, idx) => (
          <div key={idx} className='experience-box'>
            <div className='content'>
              <h3 className='title'>{exp.title}</h3>
              <h4 className='company'>{exp.company}</h4>
              <p className='period'>{exp.period}</p>
              <ul className='bullets'>
                {exp.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container experience-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
            idx={15}
          />
        </h1>
        <p>
          My professional journey showcases a diverse range of experiences in software development,
          operations management, and community leadership.
        </p>
      </div>
      {renderExperience()}
    </div>
  );
};

export default Experience;
