import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { financeSelectors } from '../../redux/finance';
import DoughnutChart from '../Chart';
import Filter from '../Filter'
import Table from '../Table'
import styles from './DiagramTab.module.css';
import categoryColors from './colors'


export default function DiagramTab() {
  const balance = useSelector(financeSelectors.getBalance)
  const allTransactions = useSelector(financeSelectors.getAllTransactions)
  const allCategories = useSelector(financeSelectors.getAllCategories)
  
  const currentCategories =  allTransactions.map((transaction) => transaction.categoryId.name)
  let currentColors =[]
  allTransactions.forEach((transaction) => {
  const categoryId = transaction.categoryId._id
    categoryColors.map((color) => {
    if(color.id === categoryId){
      currentColors.push(color.color)
    }} )
  })
  const currentValues =  allTransactions.map((transaction) => transaction.amount)
  
  const transactions = {
   categories:currentCategories,
   values: currentValues,
   balance: balance,
   colors: currentColors,
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
