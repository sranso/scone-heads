import type { Dispatch, SetStateAction } from "react";

import styles from "../styles/EasterEggs.module.css";

type EasterEggScorgyProps = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};

const EasterEggScorgy = ({ count, setCount }: EasterEggScorgyProps) => {
  if (count === 0 || count % 3 !== 0) return <span />;

  setTimeout(() => setCount(0), 1300);
  return (
    <div className={styles.scorgy}>
      <img src="/scorgy.png" />
    </div>
  );
};

export default EasterEggScorgy;
