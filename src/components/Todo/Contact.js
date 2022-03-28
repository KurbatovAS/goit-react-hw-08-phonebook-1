import styles from "./Contact.module.css";
export default function Contact({
  name,
  number,
  favorite,
  onToggleFavorite,
  onDelete,
}) {
  return (
    <>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={favorite}
        onChange={onToggleFavorite}
      />
      <p className={styles.text}>
        {name}
        {number}
      </p>
      <button type="button" className={styles.button} onClick={onDelete}>
        Удалить
      </button>
    </>
  );
}
