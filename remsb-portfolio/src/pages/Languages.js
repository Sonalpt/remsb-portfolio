import React from "react";
import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../helpers/LanguageContext";

const Languages = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const { setSelectedLanguage } = useContext(LanguageContext);
  return (
    <>
      <motion.main className="mainLanguage" exit={{ opacity: 0 }}>
        {selectedLanguage === "english" || selectedLanguage === "" ? (
          <h2>Choose your language</h2>
        ) : (
          <h2>Choisissez la langue</h2>
        )}
        <div className="languageButtons">
          {selectedLanguage === "english" || selectedLanguage === "" ? (
            <button
              onClick={() => {
                setSelectedLanguage("english");
              }}
            >
              English
            </button>
          ) : (
            <button
              onClick={() => {
                setSelectedLanguage("english");
              }}
            >
              Anglais
            </button>
          )}
          {selectedLanguage === "english" || selectedLanguage === "" ? (
            <button
              onClick={() => {
                setSelectedLanguage("french");
              }}
            >
              French
            </button>
          ) : (
            <button
              onClick={() => {
                setSelectedLanguage("french");
              }}
            >
              Français
            </button>
          )}
        </div>
      </motion.main>
    </>
  );
};

export default Languages;
