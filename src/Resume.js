import React from "react";
import Project from "./Project";
import Experience from "./Experience";
import Education from "./Education";
import Overview from "./Overview";
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
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ marginBottom: "20px", borderBottom: "1px solid black" }}>
        <h1>HIMANSHU KUMAR</h1>
        <p>himanshuk.kumar01@gmail.com</p>
        <p>
          <a href="#">LinkedIn</a> | <a href="#">GitHub</a> |{" "}
          <a href="#">Portfolio</a>
        </p>
        <p>+1 (604) 725-9950</p>
        <p>Vancouver, Canada</p>
      </div>

      <div style={{ textAlign: "left", width: "70%" }}>
        <h2>OVERVIEW</h2>
        <Overview points={OverviewData} keywords={keywords} />
      </div>

      {/************** Project section *****************/}
      <div style={{ textAlign: "left", width: "70%" }}>
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
      <div style={{ textAlign: "left", width: "70%" }}>
        <h2>EDUCATION</h2>
        {EducationData.map((education, index) => (
          <Education key={index} {...education} />
        ))}
      </div>

      {/* Experience section */}
      <div style={{ textAlign: "left", width: "70%" }}>
        <h2>EXPERIENCE</h2>
        {ExperienceData.map((experience, index) => (
          <Experience key={index} {...experience} />
        ))}
      </div>
    </div>
  );
};

export default Resume;
