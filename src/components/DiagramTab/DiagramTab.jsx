import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { financeSelectors } from '../../redux/finance';
import DoughnutChart from '../Chart';
import Filter from '../Filter'
import Table from '../Table'
import styles from './DiagramTab.module.css';

export default function DiagramTab() {
  // const realTransactions= useSelector()
  const balance = useSelector(financeSelectors.getBalance)
  const allTransaction = useSelector(financeSelectors.getAllTransactions)
const categoryColors = [
  {
  id: "612663e26ff2885ca454662f",
  color: 'rgba(254, 208, 87, 1)',
},
{
  id: "6126647352796137f0f9a16b",
  color: 'rgba(255, 216, 208, 1)',
},
{
  id: "61278871099e747d24dd9f28",
  color: 'rgba(197, 186, 255, 1)',
},
{
  id: "6127c5622450ab5d00458090",
  color: 'rgba(110, 120, 232, 1)',
},
{
  id: "6127c5732450ab5d00458093",
  color: '(74, 86, 226, 1)',
},

]
  const transactions = {
   categories:['Основные расходы', 'Продукты', 'Машина', 'Забота о себе', 'Забота о детях', 'Товары для дома', 'Образование', 'Досуг', 'Другие расходы'],
   values: [8700.00, 3800.75, 1500.80, 800.00, 2208.50, 300.00, 3400.00, 1230.00, 610.00],
   balance: balance,
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
          <Table color={categoryColors}/>
        </div>
        
      </div>

     </section>
    </Container>
  );
}