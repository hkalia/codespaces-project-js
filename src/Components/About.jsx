/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/mountain-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Lifelong tech enthusiast and full-stack software engineer with a passion for solving complex problems and building innovative solutions.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Java",
  "React",
  "TypeScript & JavaScript",
  "API Design",
  "Data Structures",
  "Algorithms",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote = `
My love for technology started at a young age, building my first website in XHTML, and has only grown stronger since. I've made significant contributions at Allstate, working on projects that saved millions and directly improved the customer experience. As a collaborative team player, I thrive in Agile settings, applying my expertise in Java, TypeScript, React, Spring Boot, and a variety of other tools.

My curiosity extends beyond software development to the intricacies of computer hardware, embedded systems, and the mathematical foundations that underpin it all. I'm equally fascinated by microcontrollers, Arduino projects, and the theoretical aspects of linear algebra and discrete math.

Let's connect! I'm always eager to discuss new opportunities, collaborate on exciting projects, or simply exchange ideas about the ever-evolving world of technology.
`;

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
