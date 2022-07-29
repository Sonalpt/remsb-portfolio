import { useState, useContext } from "react";
import { MenuTextContext } from "../helpers/MenuTextContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import { LanguageContext } from "../helpers/LanguageContext";

const MenuList = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const { setMenuText } = useContext(MenuTextContext);
  const [isProjectsHover, setIsProjectsHover] = useState(false);
  const [isSkillsHover, setIsSkillsHover] = useState(false);
  const [isAboutHover, setIsAboutHover] = useState(false);
  const [isLanguageHover, setIsLanguageHover] = useState(false);
  return (
    <>
      <ul className="menuList">
        <li
          onMouseEnter={() => {
            setIsProjectsHover(true);
            setIsSkillsHover(false);
            setIsAboutHover(false);
            setIsLanguageHover(false);
            setMenuText("projects");
          }}
        >
          {selectedLanguage === "english" ? (
            <Link to="/projects">Projects</Link>
          ) : (
            <Link to="/projects">Projets</Link>
          )}

          <div
            className={
              isProjectsHover ? "redIndicator" : "redIndicatorInvisible"
            }
          ></div>
        </li>
        <li
          onMouseEnter={() => {
            setIsProjectsHover(false);
            setIsSkillsHover(true);
            setIsAboutHover(false);
            setIsLanguageHover(false);
            setMenuText("skills");
          }}
        >
          {selectedLanguage === "english" ? (
            <Link to="/skills">Skills</Link>
          ) : (
            <Link to="/skills">Compétences</Link>
          )}
          <div
            className={isSkillsHover ? "redIndicator" : "redIndicatorInvisible"}
          ></div>
        </li>
        <li
          onMouseEnter={() => {
            setIsProjectsHover(false);
            setIsSkillsHover(false);
            setIsAboutHover(true);
            setIsLanguageHover(false);
            setMenuText("about");
          }}
        >
          {selectedLanguage === "english" ? (
            <Link to="/about">About me</Link>
          ) : (
            <Link to="/about">A propos</Link>
          )}

          <div
            className={isAboutHover ? "redIndicator" : "redIndicatorInvisible"}
          ></div>
        </li>
        <li
          onMouseEnter={() => {
            setIsProjectsHover(false);
            setIsSkillsHover(false);
            setIsAboutHover(false);
            setIsLanguageHover(true);
            setMenuText("language");
          }}
        >
          {selectedLanguage === "english" ? (
            <Link to="/languages">Language</Link>
          ) : (
            <Link to="/languages">Langue</Link>
          )}

          <div
            className={
              isLanguageHover ? "redIndicator" : "redIndicatorInvisible"
            }
          ></div>
        </li>
      </ul>
    </>
  );
};

export default MenuList;
