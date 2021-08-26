import { useState,useCallback } from 'react';
import styles from './Filter.module.css';

export default function Filter() {

const [selectedMonth, setSelectedMonth] = useState('Месяц')
const [selectedYear, setSelectedYear] = useState('Год')

  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = currentYear - 3; i <= currentYear + 5; i++) {
    years.push(i);
  }
  const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

const selectMonthHandler = useCallback(
  event => {
    setSelectedMonth(event.target.value);
  }, []
)

const selectYearHandler = useCallback(
  event => {
    setSelectedYear(event.target.value);
  }, []
)

  return (
    <form className={styles.wrapper}>
      <select name="" value={selectedMonth} onChange={selectMonthHandler} className={styles.monthPicker}>
        <option name="" value="Месяц" className={styles.pickerFirstOpt}>
          Месяц
        </option>
        {months.map(month => (
          <option key={month} value={months.indexOf(month)}>
            {month}
          </option>
        ))}
      </select>

      <select name="year" value={selectedYear} className={styles.yearPicker} onChange={selectYearHandler}>
        <option name="year" value="Год" className={styles.pickerFirstOpt}>
          Год
        </option>
        {years.map(year => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </form>
  );
}

