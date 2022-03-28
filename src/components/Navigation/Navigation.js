import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";

const Navigation = () => (
  <nav className={style.nav}>
    <NavLink
      to="/"
      exact
      className={style.link}
      activeClassName={style.activeLink}
    >
      Home
    </NavLink>

    <NavLink
      to="/contacts"
      exact
      className={style.link}
      activeClassName={style.activeLink}
    >
      Phonebook
    </NavLink>
  </nav>
);

export default Navigation;
