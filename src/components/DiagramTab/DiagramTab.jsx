import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../redux/finance/finance-selectors';
import DoughnutChart from '../Chart';
import Filter from '../Filter'
import Table from '../Table'
import styles from './DiagramTab.module.css';

export default function DiagramTab() {
  // const realTransactions= useSelector()
const categories = useSelector(getAllCategories)
console.log(categories);
  const transactions = {
   categories:['Основные расходы', 'Продукты', 'Машина', 'Забота о себе', 'Забота о детях', 'Товары для дома', 'Образование', 'Досуг', 'Другие расходы'],
   values: [8700.00, 3800.75, 1500.80, 800.00, 2208.50, 300.00, 3400.00, 1230.00, 610.00],
   balance: 24000.00,
   colors: ['rgba(254, 208, 87, 1)',
   'rgba(255, 216, 208, 1)',
   'rgba(253, 148, 152, 1)',
   'rgba(197, 186, 255, 1)',
   'rgba(110, 120, 232, 1)',
   'rgba(74, 86, 226, 1)',
   'rgba(129, 225, 255, 1)',
   'rgba(36, 204, 167, 1)',
   'rgba(0, 173, 132, 1)',],
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
          <Table/>
        </div>
      </div>
     </section>
    </Container>
  );
}