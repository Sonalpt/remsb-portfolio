import React from "react";
import { useEffect, useState } from "react";
import "./styles/index.scss";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Languages from "./pages/Languages";
import Home from "./pages/Home";
import { MenuTextContext } from "./helpers/MenuTextContext";
import { AnimatePresence } from "framer-motion";
import { LanguageContext } from "./helpers/LanguageContext";

const App = () => {
  const [menuText, setMenuText] = useState("home");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const location = useLocation();
  return (
    <>
      <NavBar />
      <LanguageContext.Provider
        value={{ selectedLanguage, setSelectedLanguage }}
      >
        <MenuTextContext.Provider value={{ menuText, setMenuText }}>
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                exact
                element={selectedLanguage === "" ? <Languages /> : <Home />}
              />
              <Route
                path="/*"
                element={selectedLanguage === "" ? <Languages /> : <Home />}
              />
              <Route
                path="/projects"
                exact
                element={selectedLanguage === "" ? <Languages /> : <Projects />}
              />
              <Route
                path="/skills"
                exact
                element={selectedLanguage === "" ? <Languages /> : <Skills />}
              />
              <Route
                path="/about"
                exact
                element={selectedLanguage === "" ? <Languages /> : <About />}
              />
              <Route path="/languages" exact element={<Languages />} />
            </Routes>
          </AnimatePresence>
        </MenuTextContext.Provider>
      </LanguageContext.Provider>
    </>
  );
};

export default App;
