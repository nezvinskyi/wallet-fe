import { useSelector } from 'react-redux';
import { financeSelectors } from '../../redux/finance';
import DoughnutChart from '../Chart';
import Filter from '../Filter'
import Table from '../Table'
import styles from './DiagramTab.module.css';

import {getTotal, getStats, getNames, getValues, getColors } from './statsInfo'


export default function DiagramTab() {
  const balance = useSelector(financeSelectors.getBalance);
  const allTransactions = useSelector(financeSelectors.getFilteredTransactions);
  
  const chartStats = {
   categories: getNames(allTransactions),
   values: getValues(allTransactions),
   balance: balance,
   colors: getColors(allTransactions),
  }

  const total = getTotal(allTransactions)
  const tableStats = getStats(allTransactions)
 
  return (
          <section className={styles.statisticEl}>
            {allTransactions.length !== 0 ? 
            
            <div className={styles.statisticWrapper}>
              <div className={styles.diagramWrapper}>
               <h1 className={styles.heading}>Статистика</h1>
               <DoughnutChart transactions={chartStats}/>
             </div>
             <div>
               <Filter/>
               <Table statistic={tableStats} total={total}/>
             </div>
            </div>: 
            <div className={styles.noStatsDDiagramWrapper}>
              <h1 className={styles.heading}>Статистика</h1>
              <Filter/>
              <div className={styles.noStatsText} >За выбранный период транзакций не было</div>
            </div>
            }
       
          </section>
    
  );
}