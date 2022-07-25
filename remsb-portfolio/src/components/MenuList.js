import { useState, useContext } from "react";
import { MenuTextContext } from "../helpers/MenuTextContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";

const MenuList = () => {
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
          <Link to="/projects">Projects</Link>
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
          <Link to="/skills">Skills</Link>
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
          <Link to="/about">About me</Link>
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
          <Link to="/languages">Language</Link>
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
