import React from "react";
import Header from "./Header";
import Project from "./Project";
import Experience from "./Experience";
import Education from "./Education";
import Overview from "./Overview";
import Footer from "./Footer";

import ProjectData from "./ProjectData";
import ExperienceData from "./ExperienceData";
import EducationData from "./EducationData";
import OverviewData from "./OverviewData";

const Resume = () => {
  const keywords = [
    "HTML",
    "CSS",
    "React",
    "JavaScript",
    "AJAX",
    "Python",
    "PostgreSQL",
    "GIT",
    "Node",
    "Express",
    "jQuery",
    "Flask",
    "JSON",
    "leadership",
  ];
  return (
    <div>
      <Header />

      <div style={{ textAlign: "left", width: "90%", padding: "0% 3%" }}>
        <h2>OVERVIEW</h2>
        <Overview points={OverviewData} keywords={keywords} />
      </div>

      {/************** Project section *****************/}
      <div style={{ textAlign: "left", width: "90%", padding: "0% 3%" }}>
        <h2>PROJECTS</h2>
        {ProjectData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            year={project.year}
            descriptions={project.descriptions}
            url={project.url}
          />
        ))}
      </div>

      {/* Education section */}
      <div style={{ textAlign: "left", width: "90%", padding: "0% 3%" }}>
        <h2>EDUCATION</h2>
        {EducationData.map((education, index) => (
          <Education key={index} {...education} />
        ))}
      </div>

      {/* Experience section */}
      <div style={{ textAlign: "left", width: "90%", padding: "0% 3%" }}>
        <h2>EXPERIENCE</h2>
        {ExperienceData.map((experience, index) => (
          <Experience key={index} {...experience} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Resume;
