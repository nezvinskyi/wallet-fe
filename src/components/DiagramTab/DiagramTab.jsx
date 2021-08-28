import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { financeSelectors } from '../../redux/finance';
import DoughnutChart from '../Chart';
import Filter from '../Filter'
import Table from '../Table'
import styles from './DiagramTab.module.css';
import categoryColors from './colors'
import {getCurrentValues, getCurrentCategories, getCurrentColors, getTotal} from './statsInfo'


export default function DiagramTab() {
  const balance = useSelector(financeSelectors.getBalance)
  const allTransactions = useSelector(financeSelectors.getAllTransactions)

  const transactions = {
   categories:getCurrentCategories(allTransactions),
   values: getCurrentValues(allTransactions),
   balance: balance,
   colors: getCurrentColors(allTransactions),
   total: getTotal(allTransactions),
    }
  
  return (
    <Container>
      <section>
       <div className={styles.statisticWrapper}>
      
        <div className={styles.diagramWrapper}>
         <h1 className={styles.heading}>Статистика</h1>
         <DoughnutChart transactions={transactions}/>
        </div>

        <div>
         <Filter/>
          <Table color={categoryColors} transTotal={transactions.total}/>
        </div>
        
      </div>

     </section>
    </Container>
  );
}
