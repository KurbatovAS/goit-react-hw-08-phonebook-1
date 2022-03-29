import { ImSpinner } from "react-icons/im";
import style from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={style.backdrop}>
      <ImSpinner size="32" className={style.loader} />
    </div>
  );
}
