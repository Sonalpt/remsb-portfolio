import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";

const Projects = () => {
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
                <div className="textDetailsResponsive">
                  <p>
                    This app, allows you to create an account, and search for
                    some fake movies or TV shows. You can add everything you
                    want to your favorites, then find it in your bookmarked
                    shows.
                  </p>
                  <p>
                    I did this little fullstack app during my free-time, just to
                    revise what I've learned this year. Front-End is coded with
                    React. Back-End is coded with NodeJS, Express, and
                    Sequelize. The database is an SQL database, that I've
                    managed with MySQL Workbench, on Windows OS. All of the
                    images are stock in the front part, because I didn't wanted
                    to invest in any service.
                  </p>
                </div>

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
                <div className="textDetailsResponsive">
                  <p>
                    Groupomania was my last project, provided by OpenClassrooms.
                    This is a small social app for an enterprise. You can create
                    your account, write some posts with/without images. See,
                    like, and comment other people's posts.
                  </p>
                  <p>
                    This project is a fullstack app. The front part is coded
                    with React. Back-end is coded with NodeJS, Express, and
                    Sequelize. The database is an SQL database, that I've
                    managed with MySQL Workbench, on Windows OS. This app is in
                    french, I didn't created an english version yet, so you can
                    explore it if you can understand a little bit of french.
                    Otherwise, just watch the video. If you see any links errors
                    in the console, it's just because I'm using a free plan for
                    images, so the server delete each image after a certain
                    amount of hours. Otherwise, everything is working perfectly.
                  </p>
                </div>

                <div className="textDetails__buttons">
                  <button
                    onClick={() => {
                      setIsVideo2Displayed(true);
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
                <div className="textDetailsResponsive">
                  <p>
                    Galleria, is an art gallery slideshow project, which I'm
                    very proud of, because it was very challenging in terms of
                    CSS. I love the design, and the paintings, obviously.
                  </p>
                  <p>
                    This project was coded with React, and I tried a masonry
                    library, for the landing page. All paintings are generated
                    dynamically through a JSON file.
                  </p>
                </div>

                <div className="textDetails__buttons">
                  <button
                    onClick={() => {
                      setIsVideo3Displayed(true);
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
                <div className="textDetailsResponsive">
                  <p>
                    THE PLANETS, is an 8 pages planets fact site. You will learn
                    many things on our solar system.
                  </p>
                  <p>
                    This is my very first project using React. I did it during
                    my free time. I wanted to work with data, to use differents
                    methods and functions of arrays, so every elements are
                    dynamically generated through a JSON file.
                  </p>
                </div>

                <div className="textDetails__buttons">
                  <button
                    onClick={() => {
                      setIsVideo4Displayed(true);
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
                <div className="textDetailsResponsive">
                  <p>
                    This is the second project from OpenClassrooms. Ohmyfood, is
                    mobile-first app, that allows you to book a table in a
                    restaurant and choose your menu before arriving, so
                    everything is ready when you come.
                  </p>
                  <p>
                    So, this project is a multi-pages, mobile-first integration,
                    with HTML and CSS. Again, no Javascript. The goal here, was
                    to get our hands on CSS animations. And I have to admit it,
                    I really loved it. Since I made this project, I know that I
                    want to be a creative developer in the futur.
                  </p>
                </div>

                <div className="textDetails__buttons">
                  <button
                    onClick={() => {
                      setIsVideo5Displayed(true);
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
                <div className="textDetailsResponsive">
                  <p>
                    Booki was my first project provided by Openclassrooms's
                    staff. Booki is a vacations app, where you can search for a
                    hotel or a house, in a certain location.
                  </p>
                  <p>
                    This was an integration exercise, with responsive design, in
                    HTML and CSS. No Javascript. The goal was to test our
                    knowledge in layout, like using flexbox, or creating tablet
                    and mobile versions. I wanted to share this first project
                    here because I think it's clean and cool to review.
                  </p>
                </div>

                <div className="textDetails__buttons">
                  <button
                    onClick={() => {
                      setIsVideo6Displayed(true);
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
