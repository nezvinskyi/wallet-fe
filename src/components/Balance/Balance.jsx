import { useSelector } from 'react-redux';
import { financeSelectors } from '../../redux/finance';
import styles from './Balance.module.css';

/* const balance = 24000.00; */
const hryvnaSign = '\u20B4';

export default function Currency() {
  const balance = useSelector(financeSelectors.getBalance);

  const moneyFormat = n => {
    return parseFloat(n)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+\.)/g, '$1 ');
  };
  return (
    <div className={styles.balance}>
      <h3 className={styles.title}>Outstanding balance</h3>
      <div className={styles.amount}>
        {hryvnaSign} {moneyFormat(balance)}
      </div>
    </div>
  );
}
