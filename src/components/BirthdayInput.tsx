import styles from "../styles/BithdayInput.module.scss";
import SubmitButton from "./SubmitButton";

import { DateStateObjType, DisplayStateObjType } from "../App";
import { FocusEvent, ChangeEvent, FormEvent } from "react";
import isExists from "date-fns/isExists";
import isPast from "date-fns/isPast";
import intervalToDuration from "date-fns/intervalToDuration";

type propType = {
  dateState: DateStateObjType;
  setDateState: React.Dispatch<React.SetStateAction<DateStateObjType>>;
  setDisplayState: React.Dispatch<React.SetStateAction<DisplayStateObjType>>;
};

function BirthdayInput({ dateState, setDateState, setDisplayState }: propType) {
  const allInputFieldsWereTouched = Object.values(dateState).every(
    (unit) => unit.wasTouched
  );

  const individualInputsAreCorrect = Object.values(dateState).every(
    (unit) => unit.error === null
  );

  const fullDateIsInvalid = allInputFieldsWereTouched
    ? individualInputsAreCorrect &&
      !isExists(
        +dateState.year.value,
        +dateState.month.value - 1,
        +dateState.day.value
      )
    : false;

  const fullDateIsNotInPast =
    allInputFieldsWereTouched &&
    individualInputsAreCorrect &&
    !fullDateIsInvalid &&
    !isPast(
      new Date(
        +dateState.year.value,
        +dateState.month.value - 1,
        +dateState.day.value
      )
    );

  const formIsValid =
    allInputFieldsWereTouched &&
    individualInputsAreCorrect &&
    !fullDateIsInvalid &&
    !fullDateIsNotInPast;

  function maskInput(type: string, value: string) {
    const isYear = type === "year";
    value = isYear ? value.replace(/^0*/, "") : value;
    return value.replace(/\D/gi, "").slice(0, isYear ? 4 : 2);
  }

  function validateInput(type: string, value: string) {
    let error: string | null;
    const inputValue = Number(value);

    if (!value) error = "This field is required";
    else {
      switch (type) {
        case "day":
          error =
            inputValue < 1 || inputValue > 31 ? "Must be a valid day" : null;
          break;
        case "month":
          error =
            inputValue < 1 || inputValue > 12 ? "Must be a valid month" : null;
          break;
        case "year":
          error =
            inputValue > new Date().getFullYear()
              ? "Must be in the past"
              : null;
          break;
        default:
          throw new Error(`Unknown parameter: ${type}`);
      }
    }

    setDateState((prev) => ({
      ...prev,
      [type]: { ...prev[type], wasTouched: true, error: error },
    }));
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { id, value } = e.target;
    setDateState((prev) => ({
      ...prev,
      [id]: { ...prev[id], value: maskInput(id, value) },
    }));
    if (dateState[id].wasTouched) validateInput(id, value);
  }

  function handleBlur(e: FocusEvent) {
    const { id, value } = e.target as HTMLInputElement;
    validateInput(id, value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (formIsValid) {
      const duration = intervalToDuration({
        start: new Date(
          +dateState.year.value,
          +dateState.month.value - 1,
          +dateState.day.value
        ),
        end: new Date(),
      });

      setDisplayState(() => ({
        year: duration.years ? +duration.years : 0,
        month: duration.months ? +duration.months : 0,
        day: duration.days ? +duration.days : 0,
      }));
    } else
      setDisplayState(() => ({
        year: "--",
        month: "--",
        day: "--",
      }));
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles["form-input-group"]}>
        {["day", "month", "year"].map((unit) => (
          <div
            className={`${styles["form-input"]} ${
              dateState[unit].error || fullDateIsInvalid || fullDateIsNotInPast
                ? styles["input--error"]
                : ""
            }`}
            key={unit}
          >
            <label htmlFor={unit}>{unit}</label>
            <div className={styles["input-wrapper"]}>
              <input
                id={unit}
                placeholder={`${unit[0]}${unit[0]}`}
                inputMode="numeric"
                onChange={handleChange}
                onBlur={handleBlur}
                value={dateState[unit].value}
              />
            </div>
            {dateState[unit].error && (
              <div className={styles["error-message"]}>
                {dateState[unit].error}
              </div>
            )}
          </div>
        ))}
      </div>
      {(fullDateIsInvalid || fullDateIsNotInPast) && (
        <div className={styles["error-message"]}>
          {fullDateIsInvalid ? "Must be a valid date" : "Must be in the past"}
        </div>
      )}
      <SubmitButton dateIsValid={formIsValid} />
    </form>
  );
}

export default BirthdayInput;
