import { useState,useCallback } from 'react';
import styles from './Filter.module.css';
import { nanoid } from 'nanoid'
import { useSelector, useDispatch } from 'react-redux';
import { financeSelectors,actions } from '../../redux/finance/';
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
  const dispatch = useDispatch();
  
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = currentYear-4; i <= currentYear; i++) {
  years.push(i);
 }

  const selectedYear  = useSelector(financeSelectors.getFilteredTransactions)
  
  const selectMonthHandler = useCallback(
    event => setSelectedMonthForm(event.target.value)  
  )
  
  const selectYearHandler = useCallback(
    event => dispatch(actions.addFilter(event.target.value)),[dispatch]
  )
  
  //то что красивое
  const [selectedMonthForm, setSelectedMonthForm] = useState('Месяц')
  const [selectedYearForm, setSelectedYearForm] = useState('Год')
  const [showMonths, setShowMonths] = useState(false)
  const [showYears, setShowYears] = useState(false)

  const dropDownMonths = () => {
    setShowMonths(!showMonths);
  }

  const dropDownYears = () => {
    setShowYears(!showYears);
  }

  const selectMonth = (month) => {
    
    setSelectedMonthForm(month);
    setShowMonths(false);
    
  }

  const selectYear = (year) => {
    
    setSelectedYearForm(year);
    setShowYears(false);
  }

  


  return (
  <>
  <div className={styles.wrapper}>
   <div className={styles.selectBoxBox, styles.monthPicker} onClick={dropDownMonths}>
        <div className={styles.selectBoxContainer}>
          <div className={styles.selectBoxSelectedItem}>
            {selectedMonthForm}
          </div>
         
          <div
            style={{ display: showMonths ? "block" : "none" }}
            className={styles.selectBoxItems}
          >
            {months.map(month => (
              <div
                key={nanoid()}
                onClick={() => selectMonth(month)}
                className={selectedMonthForm === month ? styles.selected:styles.selectedM}
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
            {selectedYearForm} 
          </div>
         
          <div
            style={{ display: showYears ? "block" : "none" }}
            className={styles.selectBoxItems}
          >
            {years.map(year => (
              <div
                key={nanoid()}
                onClick={() => selectYear(year)}
                className={selectedYearForm === year ? styles.selected:styles.selectedM}
              >
                {year}
              </div>
            ))}
          </div>
        </div>
      </div>
</div>

    <form className={styles.wrapper}>
      <select name="" value={selectedMonthForm} className={styles.monthPicker} onChange={selectMonthHandler}>
        <option  name="" value="Месяц" className={styles.pickerFirstOpt}>
          Месяц
        </option>
        {months.map(month => (
          <option key={month} value={month} data-month="month">
            {month}
          </option>
        ))}
      </select>

      <select name="" value={selectedYear} className={styles.yearPicker} onChange={selectYearHandler}>
        <option name="" value="Год" className={styles.pickerFirstOpt}>
          Год
        </option>
        {years.map(year => (
          <option key={year} value={year}  data-year="year">
            {year}
          </option>
        ))}
      </select>
    </form>
    </>
  );
}

