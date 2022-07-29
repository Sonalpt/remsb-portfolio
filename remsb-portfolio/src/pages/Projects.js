import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../helpers/LanguageContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";

const Projects = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const [isVideo1Displayed, setIsVideo1Displayed] = useState(false);
  const [isVideo2Displayed, setIsVideo2Displayed] = useState(false);
  const [isVideo3Displayed, setIsVideo3Displayed] = useState(false);
  const [isVideo4Displayed, setIsVideo4Displayed] = useState(false);
  const [isVideo5Displayed, setIsVideo5Displayed] = useState(false);
  const [isVideo6Displayed, setIsVideo6Displayed] = useState(false);
  const getVideoDisplayed = (index) => {
    if (`isVideo${index}Displayed`) {
      return 3;
    } else {
      return -2;
    }
  };

  const onWheel = (e) => {
    // e.preventDefault();
    if (window.innerWidth <= 768) {
      return;
    } else {
      const container = document.querySelector(".projectsScroll");
      const containerScrollPosition =
        document.querySelector(".projectsScroll").scrollLeft;
      container.scrollTo({
        top: 0,
        left: containerScrollPosition + e.deltaY * 7.5,
        behaviour: "smooth",
      });
    }
  };

  return (
    <>
      <motion.main
        className="mainContainer mainContainerProjects"
        exit={{ opacity: 0 }}
      >
        <section className="projectsScroll" onWheel={onWheel}>
          <div className="project">
            <div className="thumbnail project6">
              <img
                src="/assets/brands/logo.svg"
                alt="Entertainement App icon"
              />
              <h2>Entertainment app</h2>
            </div>
            <div className="thumbnail thumbnailDetails">
              <div className="textDetails">
                <h2>Entertainment App</h2>
                <>
                  {selectedLanguage === "english" ? (
                    <div className="textDetailsResponsive">
                      <p>
                        This app, allows you to create an account, and search
                        for some fake movies or TV shows. You can add everything
                        you want to your favorites, then find it in your
                        bookmarked shows.
                      </p>
                      <p>
                        I did this little fullstack app during my free-time,
                        just to revise what I've learned this year. Front-End is
                        coded with React. Back-End is coded with NodeJS,
                        Express, and Sequelize. The database is an SQL database,
                        that I've managed with MySQL Workbench, on Windows OS.
                        All of the images are stock in the front part, because I
                        didn't wanted to invest in any service.
                      </p>
                    </div>
                  ) : (
                    <div className="textDetailsResponsive">
                      <p>
                        Cette application fullstack consiste à vous créer un
                        compte, et à parcourir une liste de films et séries.
                        Vous pouvez mettre en favoris vos shows favoris, et ces
                        derniers seront répertoriés dans votre page "Favoris"
                      </p>
                      <p>
                        J'ai fait cette petite application fullstack pendant mon
                        temps libre, juste pour réviser ce que j'ai appris cette
                        année. Le Front-End est codé avec React. Le back-end est
                        codé avec NodeJS, Express, et Sequelize. La base de
                        données est une base de données MySQL, que j'ai géré
                        avec MySQL Workbench, sur Windows OS. Toutes les images
                        sont stockées dans le front-end, car je ne voulais pas
                        investir dans un service.
                      </p>
                    </div>
                  )}
                </>
                <>
                  {selectedLanguage === "english" ? (
                    <div className="textDetails__buttons">
                      <button
                        onClick={() => {
                          setIsVideo1Displayed(true);
                        }}
                      >
                        <div>Watch the video</div>
                        <div className="barHover"></div>
                      </button>
                      <button>
                        <a href="https://remsb-entertainement-app-front.vercel.app/">
                          Go to website
                        </a>
                        <div className="barHover"></div>
                      </button>
                    </div>
                  ) : (
                    <div className="textDetails__buttons">
                      <button
                        onClick={() => {
                          setIsVideo1Displayed(true);
                        }}
                      >
                        <div>Regarder la vidéo</div>
                        <div className="barHover"></div>
                      </button>
                      <button>
                        <a href="https://remsb-entertainement-app-front.vercel.app/">
                          Visiter le site
                        </a>
                        <div className="barHover"></div>
                      </button>
                    </div>
                  )}
                </>
              </div>
            </div>
            {isVideo1Displayed ? (
              <div
                style={{
                  zIndex: getVideoDisplayed(1),
                }}
                className={
                  isVideo1Displayed ? "thumbnail thumbnailVideo" : "hidden"
                }
                onClick={() => {
                  setIsVideo1Displayed(false);
                }}
              >
                <div className="videoContainer">
                  <video
                    autoPlay={true}
                    muted={true}
                    loop={false}
                    controls={true}
                  >
                    <source
                      src={"/assets/videos/entertainement-video.mp4"}
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            ) : null}
          </div>
          <div className="project">
            <div className="thumbnail project5">
              <img
                src="/assets/brands/icon-left-font-monochrome-black.png"
                alt="Groupomania icon"
              />
            </div>
            <div className="thumbnail thumbnailDetails">
              <div className="textDetails">
                <h2>Groupomania</h2>
                <>
                  {selectedLanguage === "english" ? (
                    <div className="textDetailsResponsive">
                      <p>
                        Groupomania was my last project, provided by
                        OpenClassrooms. This is a small social app for an
                        enterprise. You can create your account, write some
                        posts with/without images. See, like, and comment other
                        people's posts.
                      </p>
                      <p>
                        This project is a fullstack app. The front part is coded
                        with React. Back-end is coded with NodeJS, Express, and
                        Sequelize. The database is an SQL database, that I've
                        managed with MySQL Workbench, on Windows OS. This app is
                        in french, I didn't created an english version yet, so
                        you can explore it if you can understand a little bit of
                        french. Otherwise, just watch the video. If you see any
                        links errors in the console, it's just because I'm using
                        a free plan for images, so the server delete each image
                        after a certain amount of hours. Otherwise, everything
                        is working perfectly.
                      </p>
                    </div>
                  ) : (
                    <div className="textDetailsResponsive">
                      <p>
                        Groupomania était mon dernier projet, fourni par
                        OpenClassrooms. Il s'agit d'une petite application
                        sociale pour une entreprise. Vous pouvez créer votre
                        compte, écrire quelques posts avec/sans images. Voir,
                        aimer et commenter les messages d'autres personnes.
                      </p>
                      <p>
                        Ce projet est une application fullstack. La partie
                        front-end est codée avec React. J'ai utilisé les
                        librairies Formik et Yup, qui sont très bonnes pour la
                        gestion des formulaires et des regex. La partie back-end
                        est codée avec NodeJS, Express, et Sequelize. La base de
                        données est une base de données MySQL, que j'ai géré
                        avec MySQL Workbench, sur Windows OS. Cette application
                        est en français, je n'ai pas encore créé de version
                        anglaise. Vous pouvez l'explorer si vous comprenez un
                        peu le français. Sinon, regardez simplement la vidéo. Si
                        vous voyez des erreurs de liens dans la console, c'est
                        juste parce que j'utilise un plan gratuit pour les
                        images, donc le serveur supprime chaque image après un
                        certain nombre d'heures. Sinon, tout fonctionne
                        parfaitement.
                      </p>
                    </div>
                  )}
                </>

                <>
                  {selectedLanguage === "english" ? (
                    <div className="textDetails__buttons">
                      <button
                        onClick={() => {
                          setIsVideo1Displayed(true);
                        }}
                      >
                        <div>Watch the video</div>
                        <div className="barHover"></div>
                      </button>
                      <button>
                        <a href="https://remsb-oc-projet7.vercel.app/">
                          Go to website
                        </a>
                        <div className="barHover"></div>
                      </button>
                    </div>
                  ) : (
                    <div className="textDetails__buttons">
                      <button
                        onClick={() => {
                          setIsVideo1Displayed(true);
                        }}
                      >
                        <div>Regarder la vidéo</div>
                        <div className="barHover"></div>
                      </button>
                      <button>
                        <a href="https://remsb-oc-projet7.vercel.app/">
                          Visiter le site
                        </a>
                        <div className="barHover"></div>
                      </button>
                    </div>
                  )}
                </>
              </div>
            </div>
            {isVideo2Displayed ? (
              <div
                style={{
                  zIndex: getVideoDisplayed(2),
                }}
                className={
                  isVideo2Displayed ? "thumbnail thumbnailVideo" : "hidden"
                }
                onClick={() => {
                  setIsVideo2Displayed(false);
                }}
              >
                <div className="videoContainer">
                  <video
                    autoPlay={true}
                    muted={true}
                    loop={false}
                    controls={true}
                  >
                    <source
                      src={"/assets/videos/Groupomania-video.mp4"}
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            ) : null}
          </div>
          <div className="project">
            <div className="thumbnail project4">
              <img src="/assets/brands/galleria..png" alt="galleria icon" />
            </div>
            <div className="thumbnail thumbnailDetails">
              <div className="textDetails">
                <h2>Galleria.</h2>
                <>
                  {selectedLanguage === "english" ? (
                    <div className="textDetailsResponsive">
                      <p>
                        Galleria, is an art gallery slideshow project, which I'm
                        very proud of, because of his very challenging design. I
                        love it, and the paintings, obviously.
                      </p>
                      <p>
                        This project was coded with React, and I tried a masonry
                        library, for the landing page. All paintings are
                        generated dynamically through a JSON file.
                      </p>
                    </div>
                  ) : (
                    <div className="textDetailsResponsive">
                      <p>
                        Galleria, est un projet de diaporama pour une galerie
                        d'art, dont je suis très fier, en raison de son design
                        très stimulant et challengeant. Je l'adore, ainsi que
                        les peintures, évidemment.
                      </p>
                      <p>
                        Ce projet a été codé avec React, et j'ai utilisé une
                        librairie pour la page d'accueil au format "masonry".
                        Tous les tableaux sont générés dynamiquement à travers
                        un fichier JSON.
                      </p>
                    </div>
                  )}
                </>

                <>
                  {selectedLanguage === "english" ? (
                    <div className="textDetails__buttons">
                      <button
                        onClick={() => {
                          setIsVideo1Displayed(true);
                        }}
                      >
                        <div>Watch the video</div>
                        <div className="barHover"></div>
                      </button>
                      <button>
                        <a href="https://remsb-galleria-react.vercel.app/">
                          Go to website
                        </a>
                        <div className="barHover"></div>
                      </button>
                    </div>
                  ) : (
                    <div className="textDetails__buttons">
                      <button
                        onClick={() => {
                          setIsVideo1Displayed(true);
                        }}
                      >
                        <div>Regarder la vidéo</div>
                        <div className="barHover"></div>
                      </button>
                      <button>
                        <a href="https://remsb-galleria-react.vercel.app/">
                          Visiter le site
                        </a>
                        <div className="barHover"></div>
                      </button>
                    </div>
                  )}
                </>
              </div>
            </div>
            {isVideo3Displayed ? (
              <div
                style={{
                  zIndex: getVideoDisplayed(3),
                }}
                className={
                  isVideo3Displayed ? "thumbnail thumbnailVideo" : "hidden"
                }
                onClick={() => {
                  setIsVideo3Displayed(false);
                }}
              >
                <div className="videoContainer">
                  <video
                    autoPlay={true}
                    muted={true}
                    loop={false}
                    controls={true}
                  >
                    <source
                      src={"/assets/videos/Galleria-video.mp4"}
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            ) : null}
          </div>
          <div className="project">
            <div className="thumbnail project3">
              <img src="/assets/brands/thePlanets.png" alt="The Planets icon" />
            </div>
            <div className="thumbnail thumbnailDetails">
              <div className="textDetails">
                <h2>THE PLANETS</h2>
                <>
                  {selectedLanguage === "english" ? (
                    <div className="textDetailsResponsive">
                      <p>
                        THE PLANETS, is an 8 pages planets fact site. You will
                        learn many things on our solar system. I like this
                        project because of all these states to manage for all
                        planets, and, I really like this colorful flat design.
                      </p>
                      <p>
                        This is my very first project using React. I did it
                        during my free time. I wanted to work with data, to use
                        differents methods and functions of arrays, so every
                        elements are dynamically generated through a JSON file.
                      </p>
                    </div>
                  ) : (
                    <div className="textDetailsResponsive">
                      <p>
                        The Planets, c'est un site de 8 pages sur les planètes
                        et leurs différentes données. Vous y apprendrez beaucoup
                        de choses sur notre système solaire. J'aime ce projet à
                        cause de tous ces states React à gérer pour toutes les
                        planètes, et puis, j'apprécie énormément ce flat design
                        très rêveur.
                      </p>
                      <p>
                        Il s'agit de mon tout premier projet utilisant React. Je
                        l'ai fait pendant mon temps libre. Je voulais travailler
                        avec des données, utiliser différentes méthodes et
                        fonctions de tableaux, donc tous les éléments sont
                        générés dynamiquement à travers un fichier JSON.
                      </p>
                    </div>
                  )}
                </>

                <>
                  {selectedLanguage === "english" ? (
                    <div className="textDetails__buttons">
                      <button
                        onClick={() => {
                          setIsVideo1Displayed(true);
                        }}
                      >
                        <div>Watch the video</div>
                        <div className="barHover"></div>
                      </button>
                      <button>
                        <a href="https://planets-fact-site-react.vercel.app/">
                          Go to website
                        </a>
                        <div className="barHover"></div>
                      </button>
                    </div>
                  ) : (
                    <div className="textDetails__buttons">
                      <button
                        onClick={() => {
                          setIsVideo1Displayed(true);
                        }}
                      >
                        <div>Regarder la vidéo</div>
                        <div className="barHover"></div>
                      </button>
                      <button>
                        <a href="https://planets-fact-site-react.vercel.app/">
                          Visiter le site
                        </a>
                        <div className="barHover"></div>
                      </button>
                    </div>
                  )}
                </>
              </div>
            </div>
            {isVideo4Displayed ? (
              <div
                style={{
                  zIndex: getVideoDisplayed(4),
                }}
                className={
                  isVideo4Displayed ? "thumbnail thumbnailVideo" : "hidden"
                }
                onClick={() => {
                  setIsVideo4Displayed(false);
                }}
              >
                <div className="videoContainer">
                  <video
                    autoPlay={true}
                    muted={true}
                    loop={false}
                    controls={true}
                  >
                    <source
                      src={"/assets/videos/theplanets-video.mp4"}
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            ) : null}
          </div>
          <div className="project">
            <div className="thumbnail project2">
              <img src="/assets/brands/ohmyfood.png" alt="oh my food icon" />
            </div>
            <div className="thumbnail thumbnailDetails">
              <div className="textDetails">
                <h2>ohmyfood</h2>
                <>
                  {selectedLanguage === "english" ? (
                    <div className="textDetailsResponsive">
                      <p>
                        This is the second project from OpenClassrooms.
                        Ohmyfood, is mobile-first app, that allows you to book a
                        table in a restaurant and choose your menu before
                        arriving, so everything is ready when you come.
                      </p>
                      <p>
                        This project is a multi-pages, mobile-first integration,
                        with HTML and CSS. Again, no Javascript. The goal here,
                        was to get our hands on CSS animations. And I have to
                        admit it, I really loved it. Since I made this project,
                        I know that I want to be a creative developer in the
                        futur.
                      </p>
                    </div>
                  ) : (
                    <div className="textDetailsResponsive">
                      <p>
                        C'est le deuxième projet d'OpenClassrooms. Ohmyfood, est
                        une application mobile qui vous permet de réserver une
                        table dans un restaurant et de choisir votre menu avant
                        d'atteindre le restaurant, afin que tout soit prêt quand
                        vous arrivez.
                      </p>
                      <p>
                        Ce projet est une intégration multi-pages, mobile-first
                        avec HTML et CSS. Encore une fois, pas de Javascript. Le
                        but ici, était de mettre en pratique nos connaissances
                        dans les animations CSS. Et je dois l'admettre, j'ai
                        vraiment aimé ça. Depuis que j'ai fait ce projet, je
                        sais que je veux devenir un développeur créatif.
                      </p>
                    </div>
                  )}
                </>

                <>
                  {selectedLanguage === "english" ? (
                    <div className="textDetails__buttons">
                      <button
                        onClick={() => {
                          setIsVideo1Displayed(true);
                        }}
                      >
                        <div>Watch the video</div>
                        <div className="barHover"></div>
                      </button>
                      <button>
                        <a href="https://remy-badji-3-01022022.vercel.app/">
                          Go to website
                        </a>
                        <div className="barHover"></div>
                      </button>
                    </div>
                  ) : (
                    <div className="textDetails__buttons">
                      <button
                        onClick={() => {
                          setIsVideo1Displayed(true);
                        }}
                      >
                        <div>Regarder la vidéo</div>
                        <div className="barHover"></div>
                      </button>
                      <button>
                        <a href="https://remy-badji-3-01022022.vercel.app/">
                          Visiter le site
                        </a>
                        <div className="barHover"></div>
                      </button>
                    </div>
                  )}
                </>
              </div>
            </div>
            {isVideo5Displayed ? (
              <div
                style={{
                  zIndex: getVideoDisplayed(5),
                }}
                className={
                  isVideo5Displayed ? "thumbnail thumbnailVideo" : "hidden"
                }
                onClick={() => {
                  setIsVideo5Displayed(false);
                }}
              >
                <div className="videoContainer">
                  <video
                    autoPlay={true}
                    muted={true}
                    loop={false}
                    controls={true}
                  >
                    <source
                      src={"/assets/videos/ohmyfood-video.mp4"}
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            ) : null}
          </div>
          <div className="project">
            <div className="thumbnail project1">
              <img src="/assets/brands/Booki@3x.png" alt="Booki icon" />
            </div>
            <div className="thumbnail thumbnailDetails">
              <div className="textDetails">
                <h2>Booki</h2>
                <>
                  {selectedLanguage === "english" ? (
                    <div className="textDetailsResponsive">
                      <p>
                        Booki was my first project provided by Openclassrooms's
                        staff. Booki is a vacations app, where you can search
                        for a hotel or a house, in a certain location.
                      </p>
                      <p>
                        This was an integration exercise, with responsive
                        design, in HTML and CSS. No Javascript. The goal was to
                        test our knowledge in layout, like using flexbox, or
                        creating tablet and mobile versions. I wanted to share
                        this first project here because I think it's clean and
                        cool to review.
                      </p>
                    </div>
                  ) : (
                    <div className="textDetailsResponsive">
                      <p>
                        Booki a été mon premier projet fourni par l'équipe
                        d'Openclassrooms. Booki est une application de vacances,
                        où vous pouvez rechercher un hôtel ou une maison, dans
                        l'endroit souhaité.
                      </p>
                      <p>
                        Il s'agissait d'un exercice d'intégration, avec
                        responsive design, en HTML et CSS. Pas de Javascript. Le
                        but était de tester nos connaissances dans la mise en
                        page, comme l'utilisation de flexbox, ou la création de
                        versions pour tablettes et mobiles. Je voulais partager
                        ce premier projet ici parce que je pense qu'il est
                        propre et cool à examiner.
                      </p>
                    </div>
                  )}
                </>

                <>
                  {selectedLanguage === "english" ? (
                    <div className="textDetails__buttons">
                      <button
                        onClick={() => {
                          setIsVideo1Displayed(true);
                        }}
                      >
                        <div>Watch the video</div>
                        <div className="barHover"></div>
                      </button>
                      <button>
                        <a href="https://remsb-dw-p2-ressources-booki-fr.vercel.app/">
                          Go to website
                        </a>
                        <div className="barHover"></div>
                      </button>
                    </div>
                  ) : (
                    <div className="textDetails__buttons">
                      <button
                        onClick={() => {
                          setIsVideo1Displayed(true);
                        }}
                      >
                        <div>Regarder la vidéo</div>
                        <div className="barHover"></div>
                      </button>
                      <button>
                        <a href="https://remsb-dw-p2-ressources-booki-fr.vercel.app/">
                          Visiter le site
                        </a>
                        <div className="barHover"></div>
                      </button>
                    </div>
                  )}
                </>
              </div>
            </div>
            {isVideo6Displayed ? (
              <div
                style={{
                  zIndex: getVideoDisplayed(6),
                }}
                className={
                  isVideo6Displayed ? "thumbnail thumbnailVideo" : "hidden"
                }
                onClick={() => {
                  setIsVideo6Displayed(false);
                }}
              >
                <div className="videoContainer">
                  <video
                    autoPlay={true}
                    muted={true}
                    loop={false}
                    controls={true}
                  >
                    <source
                      src={"/assets/videos/booki-video.mp4"}
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            ) : null}
          </div>
        </section>
      </motion.main>
    </>
  );
};

export default Projects;
