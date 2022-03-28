import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import style from "./UserMenu.module.css";

function stringToColor(string) {
  let hash = 0;
  for (let i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (let i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  return color;
}

function stringAvatar(name) {
  if (name.trim().split(" ").length > 1) {
    return {
      sx: {
        backgroundColor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  } else {
    return {
      style: {
        backgroundColor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}`,
    };
  }
}
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
