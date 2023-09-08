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

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hovered, setHovered] = useState(false);

  const Slides = [
    Cactus,  
    Bryan, 
    CamilaEats, 
    ChaseMirror, 
    ChemStudy, 
    ChurchGrad, 
    CookChicken, 
    DeneshaGrad, 
    DowntownLekel, 
    Egypt, 
    GoApe, 
    Graduation, 
    Gym, 
    KrisJordan, 
    MillieEats, 
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
                  Hi. I'm Benjamin Kaheel, a sophomore majoring in Computer Science at the University of North Carolina at Chapel Hill.
                  I was born in <span className='standout-text'>Egypt</span> and immigrated to the Raleigh, NC when I was a child. My fascination with technology has been a lifelong companion; 
                  however, it was the discovery of a seemingly inconspicuous tool that I loved to tinker with as a kid: the "Inspect" button on Google Chrome.
                  My initial curiosity soon blossomed into a profound interest in <span className='standout-text'>web development</span>, as I delved into the complexicities revealed by this tool however, not actually programming. 
                  Transitioning into college, I embarked on a journey of exploration across diverse domains of development, immersing myself in the realms of <span className='standout-text'>software development</span> through COMP110 and loving it.
              </p>
              <p>
                  Beyond the digital world, I value spending time with family, friends, and in church. I love any actitivies involving being outside - fishing, hiking, canoeing, etc. 
                  When I'm craving indoor activities, I'm usually seeking a <span className='standout-text'>mental puzzle</span> - chess, sudoku, or improving my programming knowledge 
                  through personal projects. If not inside, I'm probably eating (or cooking) or in the gym. One thing I love is <span className='standout-text'>volunteer work</span>, so whenever an opportunity arises,
                  I am eager to participate. In fact, I was in Namibia on a mission trip this summer.
              </p>
              <p>
                  I'm interested in the entire <span className='standout-text'>full-stack spectrum</span> and working on ambitious projects with positive people.
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
