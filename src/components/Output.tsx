import styles from "../styles/Output.module.scss";
import { DisplayStateObjType } from "../App";

type propType = {
  displayState: DisplayStateObjType;
};

function Output({ displayState }: propType) {
  const { year, month, day } = displayState;
  return (
    <output className={styles.output}>
      <p>
        <span>{year}</span> years
      </p>
      <p>
        <span>{month}</span> months
      </p>
      <p>
        <span>{day}</span> days
      </p>
    </output>
  );
}

export default Output;
