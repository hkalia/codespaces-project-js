import React from "react";

const Education = () => {
  return (
    <section className="padding" id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="single-column-container">
          <div className="box">
            <h3 style={{ flexBasis: "40px" }}>Bachelor of Science in Computer Engineering</h3>
            <p>University of Texas at Dallas</p>
            <p>Richardson, TX</p>
            <p>August 2018 - May 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
