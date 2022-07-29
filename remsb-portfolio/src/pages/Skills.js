import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      <motion.main className="mainContainer mainSkills" exit={{ opacity: 0 }}>
        <h2>Technologies</h2>
        <div className="technologies">
          <span className="technologies__html">HTML5</span>
          <span className="technologies__css">CSS3</span>
          <span className="technologies__js">Javascript</span>
          <span className="technologies__sass">Sass</span>
          <span className="technologies__react">React</span>
          <span className="technologies__node">NodeJS</span>
          <span className="technologies__mongodb">MongoDB</span>
          <span className="technologies__mysql">MySQL</span>
          <span className="technologies__vercel">Vercel</span>
          <span className="technologies__heroku">Heroku</span>
          <span className="technologies__git">Git</span>
        </div>
      </motion.main>
    </>
  );
};

export default Skills;
