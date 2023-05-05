import Separator from "./components/Separator";
import Attribution from "./components/Attribution";

import styles from "./styles/App.module.scss";

function App() {
  return (
    <>
      <main className={styles.main}>
        <form className={styles["input-form"]}>
          <label htmlFor="day">Day</label>
          <div>
            <input id="day" type="number" placeholder="DD" />
          </div>
          <label htmlFor="month">Month</label>
          <div>
            <input id="month" type="number" placeholder="MM" />
          </div>
          <label htmlFor="year">Year</label>
          <div>
            <input id="year" type="number" placeholder="YY" />
          </div>
        </form>
        <Separator />
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
      </main>
      <Attribution />
    </>
  );
}

export default App;
