import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import style from "./RegisterView.module.css";
export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1 className={style.title}>Sign In</h1>

      <form onSubmit={handleSubmit} className={style.form} autoComplete="on">
        <label className={style.label}>
          Name
          <input
            className={style.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Username"
          />
        </label>

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

        <button type="submit" className={style.button}>
          Sign In
        </button>
      </form>
    </div>
  );
}
