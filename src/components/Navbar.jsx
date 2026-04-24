import React, { useState, useEffect } from 'react';
import './Navbar.css';

const links = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="logo-kt">KT</span>
          <span className="logo-dot" />
        </div>

        <ul className="nav-links desktop">
          {links.map(link => (
            <li key={link}>
              <button onClick={() => scrollTo(link)} className="nav-link">
                {link}
              </button>
            </li>
          ))}
        </ul>

        <a
          href="/resume.pdf"
          download="Kartik_Tiraki_Resume.pdf"
          className="nav-resume"
        >
          Resume ↓
        </a>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map((link, i) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            className="mobile-link"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <span className="mobile-num">0{i + 1}</span>
            {link}
          </button>
        ))}
      </div>
    </nav>
  );
}
