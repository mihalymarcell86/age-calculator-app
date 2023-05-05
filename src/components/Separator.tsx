import arrow from "../assets/images/icon-arrow.svg";
import styles from "../styles/Separator.module.scss";

function Separator() {
  return (
    <div className={styles.separator}>
      <div className={styles["separator-line"]}></div>
      <button className={styles["separator-circle"]}>
        <img src={arrow} alt="" />
      </button>
    </div>
  );
}

export default Separator;
