import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import './index.scss';
import Kitchen4th from '../../assets/images/AboutMe/4thkitchen.jpeg'
import Bryan from '../../assets/images/AboutMe/Bryan.jpeg'
import Cactus from '../../assets/images/AboutMe/Cactus.jpeg'
import CamilaEats from '../../assets/images/AboutMe/camilaeats.jpeg'
import ChaseMirror from '../../assets/images/AboutMe/chasemirror.jpeg'
import ChemStudy from '../../assets/images/AboutMe/chemstudy.jpeg'
import ChurchGrad from '../../assets/images/AboutMe/churchgrad.jpeg'
import CookChicken from '../../assets/images/AboutMe/cookchicken.jpeg'
import DeneshaGrad from '../../assets/images/AboutMe/denesha.jpeg'
import DowntownLekel from '../../assets/images/AboutMe/downtownlekel.jpeg'
import Egypt from '../../assets/images/AboutMe/egypt.jpeg'
import GoApe from '../../assets/images/AboutMe/goape.jpeg'
import Graduation from '../../assets/images/AboutMe/graduation.jpeg'
import Gym from '../../assets/images/AboutMe/gym.jpeg'
import KrisJordan from '../../assets/images/AboutMe/krisjordan.jpeg'
import MillieEats from '../../assets/images/AboutMe/millieeats.jpeg'
import MillieStudy from '../../assets/images/AboutMe/milliestudy.jpeg'
import NorthHills from '../../assets/images/AboutMe/northhills.jpeg'
import Photoshoot9th from '../../assets/images/AboutMe/photoshoot.jpeg'
import TomatoGuac from '../../assets/images/AboutMe/tomatoguac.jpeg'
import Floor from '../../assets/images/AboutMe/NamibiaFloor.jpeg'
import Shoulders from '../../assets/images/AboutMe/NamibiaShoulder.jpeg'
import WashFeet from '../../assets/images/AboutMe/WashingofFeet.jpeg'


const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hovered, setHovered] = useState(false);

  const Slides = [
    Shoulders,
    Cactus,  
    Bryan, 
    CamilaEats, 
    ChaseMirror, 
    ChemStudy, 
    ChurchGrad, 
    CookChicken, 
    Floor,
    DeneshaGrad, 
    DowntownLekel, 
    Egypt, 
    GoApe, 
    Graduation, 
    Gym, 
    KrisJordan, 
    MillieEats, 
    WashFeet,
    MillieStudy, 
    NorthHills, 
    Photoshoot9th, 
    TomatoGuac, 
    Kitchen4th
  ];

  const previousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? Slides.length - 1 : prevSlide - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === Slides.length - 1 ? 0 : prevSlide + 1));
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <><div className="container about-page">
          <div className="text-zone">
              <h1>
                  <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']} idx={15} />
              </h1>
              <p>
                I was born in Egypt but moved to Raleigh when I was young. Growing up here, I had to help my parents translating and filling out forms. This was hard for me but I would say, that helped me learn English early on. 
                Seeing my parents work countless hours, as soon as I was able to get a job, I started working to help my parents pay for bills and other expenses. I learned so much like how to work as a team and how to engage 
                with customers and later on, learned many management and operational skills. 
              </p>
              <p>
                I love spending time with my family and friends and in my church. I've grown up in the same church since I moved to Raleigh and I have many memories there - from traumatizing ones to fantastic ones. I love any 
                activity involving being outside like fishing and playing basketball but not when its freezing or burning outside. When it is however, I'll be inside playing chess or sudoku, cooking and eating, or in the gym.
              </p>
              <p>
                I love being of service and going to volunteering events. My church hosts a lot of service events and I try to go to as many as possible. The more I've grown and learned about the Coptic Orthodox church and 
                its history, I have loved my church more and more and have begun a initiative called Thirst Service to facilitate Orthodox Christian dialogue on the side of my studies on university campuses.
              </p>
              <p>
                I am currently a junior studying <span className='standout-text'>computer science</span>. I am looking for a Intern role for <span className='standout-text'>Summer 2025</span>, willing to work on-site or remotely. 
                Please reach out to me as I'm always interested to learn more about companies and their goals and how I can help them achieve them.
              </p>
              {/* <p>
                Hiiiiiiiiiiiiiiiiii. I'm Benjamin Kaheel, a sophomore majoring in Computer Science at the University of North Carolina at Chapel Hill.
                  I was born in <span className='standout-text'>Egypt</span> and immigrated to the Raleigh, NC when I was a child. My fascination with technology has been a lifelong companion; 
                  however, it was the discovery of a seemingly inconspicuous tool that ignited a subtle passion for programming: the "Inspect" button on Google Chrome.
                  My initial curiosity soon blossomed into a profound interest in <span className='standout-text'>web development</span>, as I delved into the complexicities revealed by this tool, yet not actually programming.
                  Transitioning into college, I embarked on a journey of exploration across diverse domains of development, immersing myself in the realms of <span className='standout-text'>software development</span> through 
                  COMP110: Introduction to Programming & Data Science with Professor Kris Jordan and loving the course.
              </p>
              <p>
                  Beyond the digital world, I value spending time with family, friends, and in church. I love any actitivies involving being outside - fishing, hiking, canoeing, etc. 
                  When I'm craving indoor activities, I'm usually seeking a <span className='standout-text'>mental puzzle</span> - chess, sudoku, or improving my programming knowledge 
                  through personal projects. If not inside, I'm probably eating (or cooking) or in the gym. One thing I love is <span className='standout-text'>volunteer work</span>, so whenever an opportunity arises,
                  I am eager to participate. In fact, I was in Namibia on a mission trip this summer and I've learned a tremendous amount from this experience. 
              </p> */}
              <p>
                  I'm interested in the <span className='standout-text'>technical project management</span> and <span className='standout-text'>technical sales</span> and working on ambitious projects with positive people.
              </p>
          </div>
          <div
              className="aboutmecontainer"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
          >
              <div
                  className={`about-me-pictures ${hovered ? "hovered" : ""}`}
                  style={{ backgroundImage: `url(${Slides[currentSlide]})` }}
              ></div>
              <div className={`chevleft ${hovered ? "visible" : ""}`} onClick={previousSlide}>
                  <FontAwesomeIcon icon={faChevronLeft} />
              </div>
              <div className={`chevright ${hovered ? "visible" : ""}`} onClick={nextSlide}>
                  <FontAwesomeIcon icon={faChevronRight} />
              </div>
          </div>
      </div>
      </>
  );
};

export default About;
