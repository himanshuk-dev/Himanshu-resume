import React from "react";

const Project = ({ url, title, year, descriptions }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3 style={{ fontWeight: "bold" }}>
          <a
            href={url}
            style={{ marginLeft: "10px" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
        </h3>
        <p style={{ fontWeight: "normal" }}>{year}</p>
      </div>
      <ul>
        {descriptions.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
