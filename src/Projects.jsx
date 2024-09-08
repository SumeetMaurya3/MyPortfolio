import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <ProjectItem title="Project One" imag = "./assets/project-1.png"/>
          <ProjectItem title="Project Two" imag = "./assets/project-2.png"/>
          <ProjectItem title="Project Three" imag = "./assets/project-3.png"/>
        </div>
      </div>
      <img src="./assets/arrow.png" alt="Arrow" className="icon arrow" onClick={() => window.location.href = './#experience'} />
    </section>
  );
}

const ProjectItem = ({ title , imag}) => (
  <div className="details-container color-container">
    <div className="article-container">
      <img src={imag} alt={title} className="project-img" />
    </div>
    <h2 className="experience-sub-title project-title">{title}</h2>
    <div className="btn-container">
      <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://github.com/'}>
        Github
      </button>
      <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://github.com/'}>
        Live Demo
      </button>
    </div>
  </div>
);

export default Projects;
