import { useState } from "react";

import BirthdayInput from "./components/BirthdayInput";
import Output from "./components/Output";
import Attribution from "./components/Attribution";

import styles from "./styles/App.module.scss";

export interface DateStateObjType {
  [index: string]: {
    value: string;
    wasTouched: boolean;
    error: string | null;
  };
}

export interface DisplayStateObjType {
  [index: string]: number | "--";
}

const initialDateState: DateStateObjType = ["day", "month", "year"].reduce(
  (acc, curr) => ({
    ...acc,
    [curr]: { value: "", wasTouched: false, error: null },
  }),
  {}
);

const initialDisplayState: DisplayStateObjType = [
  "day",
  "month",
  "year",
].reduce((acc, curr) => ({ ...acc, [curr]: "--" }), {});

function App() {
  const [dateState, setDateState] = useState(initialDateState);
  const [displayState, setDisplayState] = useState(initialDisplayState);

  return (
    <>
      <main className={styles.main}>
        <BirthdayInput
          dateState={dateState}
          setDateState={setDateState}
          setDisplayState={setDisplayState}
        />
        <Output displayState={displayState} />
      </main>
      <Attribution />
    </>
  );
}

export default App;
