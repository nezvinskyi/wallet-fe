import styles from './Balance.module.css';

const balance = 24000.00;
const hryvnaSign = '\u20B4';

export default function Currency() {
  return (
    <div className={styles.balance}>
      <h3>Ваш баланс</h3>
      <p>{hryvnaSign} {balance}</p>
    </div>
  )
};