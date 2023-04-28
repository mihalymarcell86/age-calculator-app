function App() {
  return (
    <>
      <main>
        <form>
          <label htmlFor="day">Day</label>
          <input id="day" type="number" placeholder="DD"></input>
          <label htmlFor="month">Month</label>
          <input id="month" type="number" placeholder="MM"></input>
          <label htmlFor="year">Year</label>
          <input id="year" type="number" placeholder="YY"></input>
        </form>
        <output>
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
      <footer className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.github.io/mihalymarcell86"
          target="_blank"
          rel="noreferrer"
        >
          Marcell Mihály
        </a>
        .
      </footer>
    </>
  );
}

export default App;
