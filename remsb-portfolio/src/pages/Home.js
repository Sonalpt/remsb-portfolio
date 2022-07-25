import React from "react";
import MenuList from "../components/MenuList";
import MenuText from "../components/MenuText";
import { MenuTextContext } from "../helpers/MenuTextContext";

const Home = () => {
  return (
    <>
      <main className="mainContainer">
        <MenuList />
        <MenuText />
      </main>
    </>
  );
};

export default Home;
