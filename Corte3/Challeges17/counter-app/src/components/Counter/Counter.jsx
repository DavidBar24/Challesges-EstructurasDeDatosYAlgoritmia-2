import { useState } from 'react';
import styles from './Counter.module.scss';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.counterContainer}>
      <div className={styles.counter}>
        <div className={styles.counter__display}>{count}</div>
        <div className={styles.counter__buttons}>
          <button
            className={`${styles.counter__button} ${styles['counter__button--increment']}`}
            onClick={() => setCount(c => c + 1)}
          >
            +
          </button>
          <button
            className={`${styles.counter__button} ${styles['counter__button--decrement']}`}
            onClick={() => setCount(c => c - 1)}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;