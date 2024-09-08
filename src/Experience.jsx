import React from 'react';

function Experience() {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              {/* Add experience details here */}
              <ExperienceItem skill="HTML" level="Experienced" />
              <ExperienceItem skill="CSS" level="Experienced" />
              <ExperienceItem skill="SASS" level="Intermediate" />
              <ExperienceItem skill="JavaScript" level="Basic" />
              <ExperienceItem skill="TypeScript" level="Basic" />
              <ExperienceItem skill="Material UI" level="Intermediate" />
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              <ExperienceItem skill="PostgreSQL" level="Basic" />
              <ExperienceItem skill="Node JS" level="Intermediate" />
              <ExperienceItem skill="Express JS" level="Intermediate" />
              <ExperienceItem skill="Git" level="Intermediate" />
            </div>
          </div>
        </div>
      </div>
      <img src="./assets/arrow.png" alt="Arrow" className="icon arrow" onClick={() => window.location.href = './#contact'} />
    </section>
  );
}

const ExperienceItem = ({ skill, level }) => (
  <article>
    <img src="./assets/checkmark.png" alt="Checkmark" className="icon" />
    <div>
      <h3>{skill}</h3>
      <p>{level}</p>
    </div>
  </article>
);

export default Experience;
