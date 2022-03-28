import React from "react";
import { NavLink } from "react-router-dom";
import style from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={style.link}
        activeStyle={style.activeLink}
      >
        Sign In
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={style.link}
        activeStyle={style.activeLink}
      >
        Log In
      </NavLink>
    </div>
  );
}
