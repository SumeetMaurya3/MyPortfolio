import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <ProjectItem title="Movie Recommendation System" imag = "./assets/1.png" gitlink = "https://github.com/SumeetMaurya3/MovieRecommendationSystem" demolink="https://bingeee.onrender.com/"/>
          <ProjectItem title="Project Two" imag = "./assets/project-2.png"/>
          <ProjectItem title="Project Three" imag = "./assets/project-3.png"/>
        </div>
      </div>
      <img src="./assets/arrow.png" alt="Arrow" className="icon arrow" onClick={() => window.location.href = './#experience'} />
    </section>
  );
}

const ProjectItem = ({ title , imag, gitlink, demolink}) => (
  <div className="details-container color-container random-container">
    <div className="article-container">
      <img src={imag} alt={title} className="project-img" />
    </div>
    <p className="experience-sub-title project-title">{title}</p>
    <div className="btn-container">
      <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = gitlink}>
        Github
      </button>
      <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = demolink}>
        Live Demo
      </button>
    </div>
  </div>
);

export default Projects;
