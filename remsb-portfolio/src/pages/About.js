import React from "react";
import { motion } from "framer-motion";
const About = () => {
  return (
    <>
      <motion.main className="mainAbout" exit={{ opacity: 0 }}>
        <h2>About me</h2>
        <div className="aboutContainer">
          <p>
            Since I was 5 years old, I have been connected to technology. I've
            always liked to tinker with everything, whether it's hardware or
            software. Fixing computers, cracking consoles, overclocking my
            smartphones. I have a, shall we say, native understanding of this
            dimension. Everything I enjoy in life is related to technology:
            Virtual reality, video games, photography, film, and more recently,
            design. Since high school, I've been told to become a developer. But
            I didn't like math, I wasn't good at it, so I quickly gave up the
            idea. But that was like closing my eyes to what was obvious to me.
            That's when I discovered web development.
          </p>
          <div className="aboutStrong">
            <span>This </span>
            <span>is </span>
            <span>never </span>
            <span>boring, </span>
            <span>the </span>
            <span>potential </span>
            <span>is </span>
            <span>endless.</span>
          </div>{" "}
          <br />
          <p>
            I'm not a developer who memorizes by heart, or who knows all the
            technos of the world. I often forget the most basic syntax. But who
            cares? If I have a need, a specific problem, I investigate on the
            internet, I find the solution, I learn it, I understand it, and I
            apply it. Immediately. I'm very good at this, I can work with any
            technology you'd like to give me. <br /> <br />
            So, if you have an ambitious project, which requires an investment
            and a passion for everything I mentioned above, don't wait any
            longer,
          </p>
          <div className="aboutContact">
            <a href="mailto:remsbdj@gmail.com">Contact me !</a>
            <div className="barHover"></div>
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default About;
