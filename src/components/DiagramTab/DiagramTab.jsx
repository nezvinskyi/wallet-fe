import { Container } from 'react-bootstrap';
import DoughnutChart from '../Chart';
import Filter from '../Filter'
import Table from '../Table'
import styles from './DiagramTab.module.css';

export default function DiagramTab() {
  return (
    <Container>
      <section>
       <div className={styles.statisticWrapper}>
      
        <div className={styles.diagramWrapper}>
         <h1 className={styles.heading}>Статистика</h1>
         <DoughnutChart />
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
