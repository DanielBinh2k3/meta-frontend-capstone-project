import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoImage from '../assets/logo.png';
import './header.css';
import { Col, Row } from 'react-bootstrap';

const Header = () => {
  const { pathname } = useLocation();
  const [isNavExpanded, setIsNavExpanded] = useState(false);
const navLinks = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About Us',
    path: '/about'
  },
  {
    name: 'Services',
    path: '/services'
  },
  {
    name: 'Contact Us',
    path: '/contact'
  },
  {
    name: 'Bookings',
    path: '/bookings'
  }
];
  return (
    <>
    <header>
      <nav className="container grid nav-bar">
        <Row>
        <Col md={6}>
            <Link className="nav-bar-logo" to='/'>
              <img src={logoImage} alt="Little Lemon logo" />
            </Link>
            <button 
            className="nav-bar-hamburger" 
            type="button" 
            onClick={() => setIsNavExpanded(!isNavExpanded)}
          >
            {isNavExpanded ?
              <FontAwesomeIcon icon={faXmark} size="2x" /> : 
              <FontAwesomeIcon icon={faBars} size="2x" />}
          </button>
        </Col>
        <Col md={6}>
                <ul 
          className={isNavExpanded ? 'nav-bar-links expanded' : 'nav-bar-links'} 
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          {navLinks.map((navLink, index) => 
            <li key={index}>
              <Link 
                className={pathname === navLink.path ? 'current-location' : ''} 
                to={navLink.path}
              >
                {navLink.name}
              </Link>
            </li>
          )}
        </ul>
        </Col>

        </Row>


      </nav>
      <hr/>
    </header>
    
    </>
  );
};

export default Header;
