import { useState,useCallback } from 'react';
import styles from './Filter.module.css';
import { nanoid } from 'nanoid'

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
export default function Filter() {

const [selectedMonth, setSelectedMonth] = useState('Месяц')
const [selectedYear, setSelectedYear] = useState('Год')
const [showMonths, setShowMonths] = useState(false)
const [showYears, setShowYears] = useState(false)
const [monthNumber, setMonthNumber] = useState(null)

  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = currentYear - 3; i <= currentYear + 5; i++) {
    years.push(i);
  }

  const dropDownMonths = () => {
    setShowMonths(!showMonths);
  }

  const selectMonth = (month) => {
    
    setSelectedMonth(month);
    setMonthNumber(months.indexOf(month))
    setShowMonths(false);
    
  }

  const dropDownYears = () => {
    setShowYears(!showYears);
  }

  const selectYear = (year) => {
    
    setSelectedYear(year);
    setShowYears(false);
  }

  

// const selectMonthHandler = useCallback(
//   event => {
//     setSelectedMonth(event.target.value);
//   }, []
// )

// const selectYearHandler = useCallback(
//   event => {
//     setSelectedYear(event.target.value);
//   }, []
// )

  return (
  <>
  <div className={styles.wrapper}>
   <div className={styles.selectBoxBox, styles.monthPicker} onClick={dropDownMonths}>
        <div className={styles.selectBoxContainer}>
          <div className={styles.selectBoxSelectedItem}>
            {selectedMonth}
          </div>
         
          <div
            style={{ display: showMonths ? "block" : "none" }}
            className={styles.selectBoxItems}
          >
            {months.map(month => (
              <div
                key={nanoid()}
                onClick={() => selectMonth(month)}
                className={selectedMonth === month ? styles.selected:styles.selectedM}
              >
                {month}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.selectBoxBox, styles.yearPicker} onClick={dropDownYears}>
        <div className={styles.selectBoxContainer}>
          <div className={styles.selectBoxSelectedItem}>
            {selectedYear}
          </div>
         
          <div
            style={{ display: showYears ? "block" : "none" }}
            className={styles.selectBoxItems}
          >
            {years.map(year => (
              <div
                key={nanoid()}
                onClick={() => selectYear(year)}
                className={selectedYear === year ? styles.selected:styles.selectedM}
              >
                {year}
              </div>
            ))}
          </div>
        </div>
      </div>
</div>

    {/* <form className={styles.wrapper}>
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
    </form> */}
    </>
  );
}

