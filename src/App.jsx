import React, { useState } from 'react';
import './App.css';  // Add CSS for styling
import About from './about';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contacts';
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Desktop Navigation */}
      <nav id="desktop-nav">
        <div className="logo"><img src="./assets/logo.png" alt="" /></div>
        <div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hamburger Navigation */}
      <nav id="hamburger-nav">
      <div className="logo"><img src="./assets/logo.png" alt="" /></div>
        <div className="hamburger-menu">
          <div className={`hamburger-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${menuOpen ? "open" : ""}`}>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </div>
        </div>
      </nav>

      {/* Profile Section */}
      <section id="profile">
        <div className="section__pic-container">
          <img src="./assets/download.png" alt="Sumeet's Profile" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Sumeet Maurya</h1>
          <p className="section__text__p2">Full Stack Developer</p>
          <div className="btn-container">
          <a href="./assets/Resume.pdf" download>
            <button className="btn btn-color-2" >
              Download CV
            </button>
      </a>
            <button className="btn btn-color-1" onClick={() => window.location.href = './#contact'}>
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img src="./assets/linkedin.png" alt="LinkedIn" className="icon" onClick={() => window.location.href='https://linkedin.com'} />
            <img src="./assets/github.png" alt="Github" className="icon" onClick={() => window.location.href='https://github.com'} />
          </div>
        </div>
      </section>
  

    
      

     <About />
      <Projects />
      <Experience />
 

      <Contact /> 

      {/* Footer */}
      <footer>
        {/* <nav>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav> */}
        <p>Copyright &#169; 2023 John Doe. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;

