import React from "react";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header-top">
        <h1>HIMANSHU KUMAR</h1>
        <div>
          <p>himanshuk.kumar01@gmail.com</p>
          <p style={{ textAlign: "right" }}>+1 (604) 725-9950</p>
        </div>
      </div>
      <hr
        style={{
          width: "100%",
          color: "#000",
          margin: "0%",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          width: "100%",
        }}
      >
        <div>
          <div>
            <p>
              <a
                href="https://www.linkedin.com/in/himanshukumar3"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/coderhimanshu1"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>{" "}
              |{" "}
              <a
                href="https://coderhimanshu.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio
              </a>
            </p>
          </div>
        </div>{" "}
        <div style={{ marginBottom: "15px" }}>Vancouver, Canada</div>
      </div>
    </div>
  );
};

export default Header;
