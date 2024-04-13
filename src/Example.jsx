import React, { useState, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  /* const [menuLink, setMenuLinks] = useState(links); */

  const linksRef = useRef(null);
  const showLinksToggle = () => {
    console.log(linksRef.current.getBoundingClientRect().height);
    setShowLinks(!showLinks);
  };

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  };
  return (
    <nav className="nav-center">
      <div className="nav-header">
        <img src={logo} className="logo " alt="logo" />
        <button className="nav-toggle" onClick={showLinksToggle}>
          <FaBars />
        </button>
      </div>

      <ul className="links" ref={linksRef} style={linkStyles}>
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
