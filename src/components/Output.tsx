import styles from "../styles/Output.module.scss";
import { DisplayStateObjType } from "../App";
import Odometer from "./Odometer";

type propType = {
  displayState: DisplayStateObjType;
};

function Output({ displayState }: propType) {
  const { year, month, day } = displayState;
  return (
    <output className={styles.output}>
      <div>
        <Odometer number={year} /> years
      </div>
      <div>
        <Odometer number={month} /> months
      </div>
      <div>
        <Odometer number={day} /> days
      </div>
    </output>
  );
}

export default Output;
