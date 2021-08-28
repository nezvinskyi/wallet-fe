import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { financeSelectors } from '../../redux/finance';
import DoughnutChart from '../Chart';
import Filter from '../Filter'
import Table from '../Table'
import styles from './DiagramTab.module.css';
import categoryColors from './colors'
import {getCurrentValues, getCurrentCategories, getCurrentColors} from './statsInfo'


export default function DiagramTab() {
  const balance = useSelector(financeSelectors.getBalance)
  const allTransactions = useSelector(financeSelectors.getAllTransactions)
  // const allCategories = useSelector(financeSelectors.getAllCategories)
  // const currentCategories =  allTransactions.map((transaction) => transaction.categoryId.name)
  // const currentValues =  allTransactions.map((transaction) => transaction.amount)
  
  // const getCurrentValues = (transactions) => {
  //  return transactions.map((transaction) => transaction.amount)
  // }

  //   const getCurrentCategories = (transactions)=>{
  //     return transactions.map((transaction) => transaction.categoryId.name)
  //   }
  //   const getCurrentColors = (transactions) =>{
  //   let currentColors =[]
  //   allTransactions.forEach((transaction) => {
  //   const categoryId = transaction.categoryId._id
  //     categoryColors.map((color) => {
  //     if(color.id === categoryId){
  //       currentColors.push(color.color)
  //     }} )
  //   })

  //   return currentColors
  // }

  const transactions = {
   categories:getCurrentCategories(allTransactions),
   values: getCurrentValues(allTransactions),
   balance: balance,
   colors: getCurrentColors(allTransactions),
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
