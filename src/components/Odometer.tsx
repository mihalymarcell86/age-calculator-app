import { memo, useEffect } from "react";
import { nanoid } from "nanoid";
import styles from "../styles/Odometer.module.scss";

type propType = {
  number: number | "--";
};

const Odometer = memo(function Odometer({ number }: propType) {
  const numString = number.toString();
  const digitIDs: string[] = [];

  useEffect(() => {
    const digits = digitIDs.map((digit) => document.getElementById(digit));
    digits.forEach((digit, index) => {
      const span = digit?.querySelector(
        `span:nth-child(${
          numString[index] === "-" ? 0 : +numString[index] + 2
        })`
      ) as HTMLSpanElement;
      if (digit) digit.style.width = span?.offsetWidth + "px";
      span?.scrollIntoView({ behavior: "smooth" });
    });
  });

  return (
    <div className={styles.odometer}>
      {[...numString].map((digits) => {
        const id = nanoid();
        digitIDs.push(id);

        return (
          <div className={styles.olist} id={id} key={id}>
            <span>-</span>
            <span>0</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
          </div>
        );
      })}
    </div>
  );
});

export default Odometer;
