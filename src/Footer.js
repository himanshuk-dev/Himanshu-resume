import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "10px",
        backgroundColor: "#F8C630",
      }}
    >
      &copy; {new Date().getFullYear()} Developed using React with{" "}
      <span role="img" aria-label="heart">
        ❤️
      </span>{" "}
      by Himanshu
    </footer>
  );
};

export default Footer;
