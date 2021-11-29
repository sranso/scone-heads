import styles from "../styles/EasterEggs.module.css";

const EasterEggScorgy = ({ count, setCount }) => {
  if (count === 0 || count % 3 !== 0) return <span />;

  setTimeout(() => setCount(0), 1300);
  return (
    <div className={styles.scorgy}>
      <img src="/scorgy.png" />
    </div>
  );
};

export default EasterEggScorgy;
