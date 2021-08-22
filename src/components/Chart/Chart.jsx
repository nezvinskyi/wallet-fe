import { Doughnut } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';
import styles from './Chart.module.css';

// Disable animating charts by default.
// defaults.animation = false;

// Don't show legend
defaults.plugins.legend.display = false;



export default function DoughnutChart () {
const categories = ['Основные расходы', 'Продукты', 'Машина', 'Забота о себе', 'Забота о детях', 'Товары для дома', 'Образование', 'Досуг', 'Другие расходы'];
const transactionsValues = [8700.00, 3800.75, 1500.80, 800.00, 2208.50, 300.00, 3400.00, 1230.00, 610.00];
const balance = 24000.00

const data = {
  labels: categories,
    datasets: [
    {
      label: '# of Votes',
      data: transactionsValues,
      backgroundColor: [
        'rgba(254, 208, 87, 1)',
        'rgba(255, 216, 208, 1)',
        'rgba(253, 148, 152, 1)',
        'rgba(197, 186, 255, 1)',
        'rgba(110, 120, 232, 1)',
        'rgba(74, 86, 226, 1)',
        'rgba(129, 225, 255, 1)',
        'rgba(36, 204, 167, 1)',
        'rgba(0, 173, 132, 1)',
      ],
      borderWidth:0,
      maintainAspectRatio: false,
      cutout: '70%',
   },
  ],
};

const hryvnaSign = '\u20B4';

 return (
    <div className={styles.chartWrapper}>
  <Doughnut className="chart" data={data} />
  <span className={styles.balance}>{hryvnaSign} {balance}</span>
</div>
)  
};

