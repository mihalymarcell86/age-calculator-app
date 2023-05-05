import styles from "../styles/Attribution.module.scss";

function Attribution() {
  return (
    <footer className={styles.attribution} hidden>
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
  );
}

export default Attribution;
