import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import RIcon from '../../assets/images/reacticon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faGear, faEye, faEnvelope, faVideo, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faMeetup } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={RIcon} alt='Ask Millie for a Logo' />

        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#64748b" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#64748b" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="skills-link" to="/skills">
                <FontAwesomeIcon icon={faEye} color="#64748b" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
                <FontAwesomeIcon icon={faSuitcase} color="#64748b" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#64748b" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                target='_blank' 
                rel='noreferrer' 
                href='https://www.linkedin.com/in/benjamin-kaheel/'
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


    </div>
)

export default Sidebar;