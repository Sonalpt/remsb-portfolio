import React from "react";
import { useState, useContext } from "react";
import { MenuTextContext } from "../helpers/MenuTextContext";
import { LanguageContext } from "../helpers/LanguageContext";

const MenuText = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const { menuText } = useContext(MenuTextContext);
  const { setMenuText } = useContext(MenuTextContext);
  return (
    <>
      <div
        className="textClassList"
        onMouseEnter={() => {
          setMenuText("home");
        }}
      >
        {menuText === "home" || menuText === "" ? (
          <>
            {selectedLanguage === "english" ? (
              <p className="primaryText menuTextListAnimation">
                Hello. I'm Rémy Badji, your future front-end web developer, if
                you want to. <br />
                This portfolio works like a DVD menu, so you can switch between
                two languages, french or english. For the rest, I let you
                discover by yourself !{" "}
              </p>
            ) : (
              <p>
                Bienvenue. Je me présente, Rémy Badji, votre futur développeur
                web front-end, si vous le souhaitez. <br /> Ce portfolio
                fonctionne comme un menu DVD, vous pouvez donc basculer entre
                deux langues, français ou anglais. Pour le reste, je vous laisse
                découvrir ça par vous-même !
              </p>
            )}
          </>
        ) : menuText === "projects" ? (
          <>
            {selectedLanguage === "english" ? (
              <p className="primaryText menuTextListAnimation">
                Here, you can check out some projects I did during my
                OpenClassrooms journey, and during my free time. Each project is
                displayed in a mini screen that will give you all the
                informations you need.
              </p>
            ) : (
              <p>
                Ici, vous pouvez découvrir certains projets que j'ai réalisé au
                cours de mon parcours OpenClassrooms, et pendant mon temps
                libre. Chaque projet est affiché dans un petit écran qui vous
                donnera toutes les informations dont vous avez besoin.
              </p>
            )}
          </>
        ) : menuText === "skills" ? (
          <>
            {selectedLanguage === "english" ? (
              <p className="primaryText menuTextListAnimation">
                Here, you’ll find my different skills in web development, and my
                other abilities in hardware and software.
              </p>
            ) : (
              <p>
                Dans cet espace, vous trouverez mes différentes compétences en
                développement web et design.
              </p>
            )}
          </>
        ) : menuText === "about" ? (
          <>
            {selectedLanguage === "english" ? (
              <p className="primaryText menuTextListAnimation">
                Click on this section if you want to know more about me, like my
                personality, my hobbies, my motivation.
              </p>
            ) : (
              <p>
                Cliquez sur cette section si vous souhaitez en savoir plus sur
                ma personnalité, mes hobbies, et mes motivations.
              </p>
            )}
          </>
        ) : (
          <>
            {selectedLanguage === "english" ? (
              <p className="primaryText menuTextListAnimation">
                The most useful option. If you want to switch between french and
                english, you are at the right place !
              </p>
            ) : (
              <p>
                L'option la plus utile d'un DVD. Si vous voulez passer du
                français à l'anglais, vous êtes au bon endroit !
              </p>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default MenuText;
