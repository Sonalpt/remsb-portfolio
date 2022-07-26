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
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Languages from "./pages/Languages";
import Home from "./pages/Home";
import { MenuTextContext } from "./helpers/MenuTextContext";

const App = () => {
  const [menuText, setMenuText] = useState("home");
  return (
    <>
      <NavBar />
      <MenuTextContext.Provider value={{ menuText, setMenuText }}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/*" element={<Home />} />
          <Route path="/projects" exact element={<Projects />} />
          <Route path="/skills" exact element={<Skills />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/languages" exact element={<Languages />} />
        </Routes>
      </MenuTextContext.Provider>
    </>
  );
};

export default App;
