import React from "react";
import { motion } from "framer-motion";

const Languages = () => {
  return (
    <>
      <motion.main className="mainLanguage" exit={{ opacity: 0 }}>
        <h2>Choose your language</h2>
        <div className="languageButtons">
          <button>French</button>
          <button>English</button>
        </div>
      </motion.main>
    </>
  );
};

export default Languages;
