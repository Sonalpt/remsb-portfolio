import React from "react";
import { MenuTextContext } from "../helpers/MenuTextContext";
import { useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";

const NavBar = () => {
  const { menuText } = useContext(MenuTextContext);
  const { setMenuText } = useContext(MenuTextContext);
  return (
    <>
      <nav>
        <span>remsB</span>
        <div>
          <>
            <Link to="/">Menu</Link>
            <div className="redIndicator"></div>
          </>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
