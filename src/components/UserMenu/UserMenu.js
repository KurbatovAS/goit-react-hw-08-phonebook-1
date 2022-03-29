import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import stringAvatar from "./Avatar";
import style from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const symbol = stringAvatar(name).children;
  const bgcolor = stringAvatar(name).style;

  return (
    <div className={style.container}>
      <div style={bgcolor} className={style.avatar}>
        <span>{symbol}</span>
      </div>
      <button
        className={style.button}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log Out
      </button>
    </div>
  );
}
