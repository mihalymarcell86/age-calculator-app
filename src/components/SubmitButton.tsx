import arrow from "../assets/images/icon-arrow.svg";
import styles from "../styles/Separator.module.scss";

type propType = {
  dateIsValid: boolean;
};

function SubmitButton({ dateIsValid }: propType) {
  return (
    <div className={styles.separator}>
      <div className={styles["separator-line"]}></div>
      <button
        className={`${styles["separator-button"]} ${
          dateIsValid ? "" : styles["button--error"]
        }`}
        aria-label="submit"
      >
        <img src={arrow} alt="" />
      </button>
    </div>
  );
}

export default SubmitButton;
