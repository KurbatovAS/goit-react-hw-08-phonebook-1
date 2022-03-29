import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import style from "./LoginView.module.css";
export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div className={style.content}>
      <h1 className={style.title}>Log In</h1>

      <form onSubmit={handleSubmit} className={style.form} autoComplete="on">
        <label className={style.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            className={style.input}
            onChange={handleChange}
            placeholder="example@gmail.com"
          />
        </label>

        <label className={style.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            className={style.input}
            onChange={handleChange}
            placeholder="Minimum of 8 characters"
          />
        </label>

        <button className={style.button} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}
