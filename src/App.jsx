import React, { useState, useEffect } from 'react';
import './App.css';  // Add CSS for styling
import About from './about';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contacts';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const interBubble = document.querySelector('.interactive');
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    function move() {
      currentX += (targetX - currentX) / 20;
      currentY += (targetY - currentY) / 20;
      if (interBubble) {
        interBubble.style.transform = `translate(${Math.round(currentX)}px, ${Math.round(currentY)}px)`;
      }
      requestAnimationFrame(move);
    }

    const handleMouseMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      setTgX(targetX);
      setTgY(targetY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    move();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
       
            <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
        </div>
      </div>
      <div className="text-container">
      {/* Desktop Navigation */}
      <nav id="desktop-nav">
        <div className="logo"><img src="./assets/logo.png" alt="Logo" /></div>
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
        <div className="logo"><img src="./assets/logo.png" alt="Logo" /></div>
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
          <img src="./assets/profile-pic2.png" alt="Sumeet's Profile" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Sumeet Maurya</h1>
          <p className="section__text__p2">Full Stack Developer</p>
          <div className="btn-container">
            <a href="./assets/Resume.pdf" download>
              <button className="btn btn-color-2">Download CV</button>
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
      </div>
      {/* Gradient and Interactive Bubbles */}


      <About />
      <Projects />
      <Experience />
      <Contact />

      {/* Footer */}
      <footer>
        <p>Copyright &#169; 2023 John Doe. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
