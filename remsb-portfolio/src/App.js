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

const App = () => {
  const [menuText, setMenuText] = useState("home");
  const location = useLocation();
  return (
    <>
      <NavBar />
      <MenuTextContext.Provider value={{ menuText, setMenuText }}>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" exact element={<Home />} />
            <Route path="/*" element={<Home />} />
            <Route path="/projects" exact element={<Projects />} />
            <Route path="/skills" exact element={<Skills />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/languages" exact element={<Languages />} />
          </Routes>
        </AnimatePresence>
      </MenuTextContext.Provider>
    </>
  );
};

export default App;
