import React from "react";

const Education = ({ institution, program, year }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p>
          <b>{institution}</b> - {program}
        </p>
        <p>{year}</p>
      </div>
    </div>
  );
};

export default Education;
