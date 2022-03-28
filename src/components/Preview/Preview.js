import style from "./Preview.module.css";
import { useState, React } from "react";
import RegisterView from "../../views/RegisterView";
import LoginView from "../../views/LoginView";

export default function Preview() {
  const [window, setWindow] = useState("register");
  return (
    <>
      <div className={style.backdrop}></div>
      <div className={style.backdrop2}></div>
      <div className={style.backdrop3}></div>
      <div className={style.content}>
        <div className={style.modal}>
          <div className={style.btnBox}>
            <button
              onClick={() => setWindow("register")}
              type="button"
              className={
                window === "register" ? `${style.btnActive}` : `${style.button}`
              }
            >
              SignIn
            </button>
            <button
              onClick={() => setWindow("login")}
              className={
                window === "login" ? `${style.btnActive}` : `${style.button}`
              }
              type="button"
            >
              LogIn
            </button>
          </div>
          {window === "register" ? <RegisterView /> : <LoginView />}
        </div>
      </div>
    </>
  );
}
