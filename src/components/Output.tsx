import styles from "../styles/Output.module.scss";

function Output() {
  return (
    <output className={styles.output}>
      <p>
        <span>--</span> years
      </p>
      <p>
        <span>--</span> months
      </p>
      <p>
        <span>--</span> days
      </p>
    </output>
  );
}

export default Output;
