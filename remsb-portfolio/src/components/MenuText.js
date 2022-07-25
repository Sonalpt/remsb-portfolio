import React from "react";
import { useState, useContext } from "react";
import { MenuTextContext } from "../helpers/MenuTextContext";

const MenuText = () => {
  const { menuText } = useContext(MenuTextContext);
  const { setMenuText } = useContext(MenuTextContext);
  return (
    <>
      <div
        className={menuText === "home" ? "textClassHome" : "textClassList"}
        onMouseEnter={() => {
          setMenuText("home");
        }}
      >
        {menuText === "home" ? (
          <>
            <p classname="primaryText menuTextListAnimation">
              Hello. I'm Rémy Badji. I'm your future front-end web developer, if
              you want to.
            </p>

            <p className="secondaryText menuTextListAnimation">
              This portfolio works like a DVD menu, so you can switch between
              two languages, french or english. For the rest, I let you discover
              it by yourself.{" "}
            </p>
          </>
        ) : menuText === "projects" ? (
          <p className="primaryText menuTextListAnimation">
            Here, you can check out all the projects I did during my
            OpenClassrooms journey, and during my free time. Each project is
            displayed in a mini screen that will give you all the informations
            you need.
          </p>
        ) : menuText === "skills" ? (
          <p className="primaryText menuTextListAnimation">
            Here, you’ll find my soft and hard skills. For hard skills, I talk
            about my main skills, on web development, but not only.{" "}
          </p>
        ) : menuText === "about" ? (
          <p className="primaryText menuTextListAnimation">
            Click on this section if you want to know more about me, like my
            personallity, my hobbies, even my daily questionings.
          </p>
        ) : (
          <p className="primaryText menuTextListAnimation">
            The most useful option, like in our DVD menus. If you want to switch
            between french and english, you are at the right place !
          </p>
        )}
      </div>
    </>
  );
};

export default MenuText;
