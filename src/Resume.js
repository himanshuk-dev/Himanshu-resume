import React from "react";
import Project from "./Project";
import Experience from "./Experience";
import Education from "./Education";
import projectData from "./ProjectData";
import experienceData from "./ExperienceData";
import educationData from "./EducationData";

const Resume = () => {
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
        <ul>
          {/* Other overview points */}
          <li>
            2+ years in front end programming using HTML, CSS, React,
            JavaScript, and AJAX.
          </li>
          {/* ... */}
        </ul>
      </div>

      {/************** Project section *****************/}
      <div style={{ textAlign: "left", width: "70%" }}>
        <h2>PROJECTS</h2>
        {projectData.map((project, index) => (
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
        {educationData.map((education, index) => (
          <Education key={index} {...education} />
        ))}
      </div>

      {/* Experience section */}
      <div style={{ textAlign: "left", width: "70%" }}>
        <h2>EXPERIENCE</h2>
        {experienceData.map((experience, index) => (
          <Experience key={index} {...experience} />
        ))}
      </div>
    </div>
  );
};

export default Resume;
