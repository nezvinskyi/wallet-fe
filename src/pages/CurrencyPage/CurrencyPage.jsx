import { Currency, Header, Navigation } from '../../components';
import styles from './CurrencyPage.module.css'

export default function CurrencyPage() {

  return (
    <div className={styles.currencyPage}>
      <Header />
      <div className={styles.container}>
        <div>
          <Navigation />
          <div className={styles.currency}>
            <Currency />
          </div>
        </div>

      </div>
    </div >
  );
}