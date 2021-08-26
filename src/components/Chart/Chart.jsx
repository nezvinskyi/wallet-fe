import { Doughnut, defaults } from 'react-chartjs-2';
import styles from './Chart.module.css';

// Disable animating charts by default.
// defaults.animation = false;

// Don't show legend
defaults.plugins.legend.display = false;

export default function DoughnutChart (props) {
const data = {
  labels: props.transactions.categories,
    datasets: [
    {
      label: '# of Votes',
      data: props.transactions.values,
      backgroundColor: props.transactions.colors,
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
  <span className={styles.balance}>{hryvnaSign} {props.transactions.balance}</span>
</div>
)
  
};

