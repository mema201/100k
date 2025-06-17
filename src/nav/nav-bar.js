import "./Navbar.css"
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

export default function Navbar( {textColor} ) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer menu quand on clique sur un lien (sur mobile)
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav style={!scrolled ? { color: textColor } : {}} className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`} >

      <button 
        className="menu-toggle" 
        onClick={() => setMenuOpen(!menuOpen)} 
        aria-label="Toggle menu"
        style={{Color : "#242756"}}
      >
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={handleLinkClick}>Accueil</Link></li>
        <li><Link to="/page2" onClick={handleLinkClick}>Services</Link></li>
        <li><Link to="/page3" onClick={handleLinkClick}>Contact</Link></li>
      </ul>
    </nav>
  );
}
