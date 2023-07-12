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
                  I was born in Egypt and immigrated to the Raleigh, NC when I was a child. I loved technology since I was a little kid
                  but was never pulled into the realm of programming until I discovered something: the "Inspect" button on Google Chrome.
                  Messing around with it, I was enamoured and began learning more about web development. As I began college, I began to
                  expose myself to different fields of development and learned more about software development, machine learning, and
                  artificial intelligence.
              </p>
              <p>
                  I value spending time with family, friends, and in church. In love with nature, I spend as much time as I can outside. I love
                  fishing, hiking, canoeing, etc. When I'm craving indoor activities, I am constantly seeking a mental puzzle. You'll find me
                  playing chess, sudoku, or improving my programming knowledge through personal projects. If I'm not at home or somewhere
                  outside, I'm probably eating (or cooking) or in the gym. One thing I love is volunteer work, so whenever an opportunity arises,
                  I am eager to participate.
              </p>
              <p>
                  I'm interested in the entire full-stack spectrum and working on ambitious projects with positive people.
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
