import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import RIcon from '../../assets/images/reacticon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faGear, faEye, faEnvelope, faVideo, faSuitcase, faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faMeetup } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';



const Sidebar = () => {

    const [showNav, setShowNav] = useState(false);
    
    return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src='/benlogo.png' alt='Ask Millie for a Logo' />

        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#64748b" />
            </NavLink>

            <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#64748b" />
            </NavLink>

            <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="skills-link" to="/skills">
                <FontAwesomeIcon icon={faEye} color="#64748b" />
            </NavLink>

            <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="experience-link" to="/experience">
                <FontAwesomeIcon icon={faSuitcase} color="#64748b" />
            </NavLink>

            <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#64748b" />
            </NavLink>
            <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faClose} color='#ffd700' size='3x' className='close-icon' />
        </nav>
        <ul>
            <li>
                <a 
                target='_blank' 
                rel='noreferrer' 
                href='https://www.linkedin.com/in/benkaheel/'
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#64748b"/> 
                </a>
            </li>

            <li>
                <a 
                target='_blank' 
                rel='noreferrer' 
                href='https://github.com/bkaheel'
                >
                    <FontAwesomeIcon icon={faGithub} color="#64748b"/> 
                </a>
            </li>
            <li>
                <a 
                target='_blank' 
                rel='noreferrer' 
                href='https://calendly.com/bmkaheel/15minutes'
                >
                    <FontAwesomeIcon icon={faVideo} color="#64748b"/> 
                </a>
            </li>
        </ul>
        <FontAwesomeIcon onClick={() => setShowNav(true)} icon={faBars} color='#ffd700' size='3x'
        className='hamburger-icon'/>


    </div>
)
}
export default Sidebar;