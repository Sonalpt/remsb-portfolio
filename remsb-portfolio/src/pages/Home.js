import { React, useContext } from "react";
import MenuList from "../components/MenuList";
import MenuText from "../components/MenuText";
import { MenuTextContext } from "../helpers/MenuTextContext";
import { motion } from "framer-motion";
import { LanguageContext } from "../helpers/LanguageContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";

const Home = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const navigate = useNavigate();
  return (
    <>
      <motion.main className="mainContainer" exit={{ opacity: 0 }}>
        <MenuList />
        <MenuText />
      </motion.main>
    </>
  );
};

export default Home;
