import { useSelector } from 'react-redux';
import { financeSelectors } from '../../redux/finance';
import styles from './Balance.module.css';

// const balance = 24000.0;
const hryvnaSign = '\u20B4';

export default function Currency() {
  const balance = useSelector(financeSelectors.getBalance);
  return (
    <div className={styles.balance}>
      <h3>Ваш баланс</h3>
      <p>
        {hryvnaSign} {balance}
      </p>
    </div>
  );
}
