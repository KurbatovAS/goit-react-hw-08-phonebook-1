import style from "./Contact.module.css";
import stringAvatar from "../UserMenu/Avatar";
export default function Contact({ name, number, onDelete }) {
  const symbol = stringAvatar(name).children;
  const bgcolor = stringAvatar(name).style;
  return (
    <>
      <div className={style.info}>
        <div style={bgcolor} className={style.avatar}>
          <span>{symbol}</span>
        </div>
        <p className={style.text}>{name}</p>
      </div>
      <p className={style.text}>{number}</p>
      <button type="button" className={style.button} onClick={onDelete}>
        Delete
      </button>
    </>
  );
}
