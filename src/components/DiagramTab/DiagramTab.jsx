import DoughnutChart from '../Chart';
import styles from './DiagramTab.module.css'

export default function DiagramTab() {
  return (
    <>
    <h1 className={styles.heading}>Статистика</h1>
    <DoughnutChart/>
    </>
  )
}