import React, { useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  
  const toggleLinks = () => {

    setShowLinks(!showLinks);
  };

  const linkStyles = {
    height:showLinks ? `${linksRef.current.getBoundingClientRect().height}px` : '0px'
  }
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img
            src={logo}
            alt='logo'
            className='logo'
          />
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef} style={linkStyles} >
          <ul className='links' ref={linksRef}>
            {links.map((el) => {
              return (
                <li key={el.id}>
                  <a href={el.url}>{el.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* social links */}
        <ul className='social-icons'>
            {social.map((el) => {
                return <li key={el.id}>
                    <a href={el.url}>{el.icon}</a>
                </li>
            })}
        </ul>
        
      </div>
    </nav>
  );
};

export default NavBar;
