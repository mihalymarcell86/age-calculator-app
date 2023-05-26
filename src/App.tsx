import BirthdayInput from "./components/BirthdayInput";
import Output from "./components/Output";
import Attribution from "./components/Attribution";

import styles from "./styles/App.module.scss";

type InputValue = number | "";

export interface FormInputValues {
  year: InputValue;
  month: InputValue;
  day: InputValue;
}

function App() {
  return (
    <>
      <main className={styles.main}>
        <BirthdayInput />
        <Output />
      </main>
      <Attribution />
    </>
  );
}

export default App;
