import React from "react";

const Experience = ({ role, year, company, location, descriptions }) => {
  return (
    <div style={{ marginRight: "0%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3 style={{ fontWeight: "bold" }}>{role}</h3>
        <p style={{ fontWeight: "normal" }}>{year}</p>
      </div>
      {company}, {location}
      <ul>
        {descriptions.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
