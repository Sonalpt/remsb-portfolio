import React from "react";
import MenuList from "../components/MenuList";
import MenuText from "../components/MenuText";
import { MenuTextContext } from "../helpers/MenuTextContext";
import { motion } from "framer-motion";

const Home = () => {
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
