import React from 'react';

function About() {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container2">
          <img src="./assets/sumeet.png" alt="Profile" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src="./assets/experience.png" alt="Experience" className="icon" />
              <h3>Experience</h3>
              <p>3+ months <br />Full Stack Development</p>
            </div>
            <div className="details-container">
              <img src="./assets/education.png" alt="Education" className="icon" />
              <h3>Education</h3>
              <p>B.E. at Mumbai University<br />2021-2025</p>
            </div>
          </div>
          <div className="text-container2">
            <p>I am a full-stack developer currently in my final year of pursuing a Bachelor of Engineering at Mumbai University, specifically at Terna Engineering College. I have previously interned as a Full-Stack Developer at NourishGenie, where I gained hands-on experience in developing and maintaining web applications. I am actively seeking opportunities to leverage my skills and experience in a developer role.</p>
          </div>
        </div>
      </div>
      <img src="./assets/arrow.png" alt="Arrow" className="icon arrow" onClick={() => window.location.href = './#projects'} />
    </section>
  );
}

export default About;
