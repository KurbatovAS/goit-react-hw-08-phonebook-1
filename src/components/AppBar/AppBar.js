import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Navigation from "../Navigation";
import UserMenu from "../UserMenu";
import AuthNav from "../AuthNav";
import { authSelectors } from "../../redux/auth";
import style from "./AppBar.module.css";
import Container from "components/Container";

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={style.header}>
      <NavLink to="/" exact className={style.logo}>
        <img
          alt="avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReK6pUGk66nxuoUjAgPyXQ55neCkfFdO8EDjah4hqBn_-VrQKYo5oI_citL5mS9_ZWgaQ&usqp=CAU"
        />
        Phonebook
      </NavLink>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
