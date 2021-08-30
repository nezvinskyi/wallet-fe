// import { useState, useCallback } from 'react';
import styles from './Filter.module.css';
// import { nanoid } from 'nanoid';
// import Select from 'react-select';

import { useSelector, useDispatch } from 'react-redux';
import { financeOperations, financeSelectors } from '../../redux/finance';
// import { financeSelectors, actions } from '../../redux/finance/';
const months = [
  { id: '01', name: 'Январь' },
  { id: '02', name: 'Февраль' },
  { id: '03', name: 'Март' },
  { id: '04', name: 'Апрель' },
  { id: '05', name: 'Май' },
  { id: '06', name: 'Июнь' },
  { id: '07', name: 'Июль' },
  { id: '08', name: 'Август' },
  { id: '09', name: 'Сентябрь' },
  { id: '10', name: 'Октябрь' },
  { id: '11', name: 'Ноябрь' },
  { id: '12', name: 'Декабрь' },
];

export default function Filter() {
  const dispatch = useDispatch();

  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = currentYear; i >= currentYear - 4; i--) {
    years.push(i);
  }

  // const selectedYear = useSelector(financeSelectors.getFilteredTransactions);

  // const selectMonthHandler = useCallback(event => setSelectedMonthForm(event.target.value));

  // const selectYearHandler = useCallback(
  //   event => dispatch(actions.addFilter(event.target.value)),
  //   [dispatch],
  // );

  //то что красивое
  // const [selectedMonthForm, setSelectedMonthForm] = useState('Месяц');
  // const [selectedYearForm, setSelectedYearForm] = useState('Год');
  // const [showMonths, setShowMonths] = useState(false);
  // const [showYears, setShowYears] = useState(false);

  // const dropDownMonths = () => {
  //   setShowMonths(!showMonths);
  // };

  // const dropDownYears = () => {
  //   setShowYears(!showYears);
  // };

  // const selectMonth = month => {
  //   setSelectedMonthForm(month);
  //   setShowMonths(false);
  // };

  // const selectYear = year => {
  //   setSelectedYearForm(year);
  //   setShowYears(false);
  // };

  const filter = useSelector(financeSelectors.getFilter);

  const handleMonthChange = e => {
    dispatch(financeOperations.addFilter({ month: e.target.value }));

    console.log('filter :>> ', filter);
  };

  const handleYearChange = e => {
    dispatch(financeOperations.addFilter({ year: e.target.value }));
  };

  return (
    <>
      {/* <div className={styles.wrapper}>
        <div className={(styles.selectBoxBox, styles.monthPicker)} onClick={dropDownMonths}>
          <div className={styles.selectBoxContainer}>
            <div className={styles.selectBoxSelectedItem}>{selectedMonthForm}</div>

            <div
              style={{ display: showMonths ? 'block' : 'none' }}
              className={styles.selectBoxItems}
            >
              {months.map(month => (
                <div
                  key={nanoid()}
                  onClick={() => selectMonth(month)}
                  className={selectedMonthForm === month ? styles.selected : styles.selectedM}
                >
                  {month}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={(styles.selectBoxBox, styles.yearPicker)} onClick={dropDownYears}>
          <div className={styles.selectBoxContainer}>
            <div className={styles.selectBoxSelectedItem}>{selectedYearForm}</div>

            <div
              style={{ display: showYears ? 'block' : 'none' }}
              className={styles.selectBoxItems}
            >
              {years.map(year => (
                <div
                  key={nanoid()}
                  onClick={() => selectYear(year)}
                  className={selectedYearForm === year ? styles.selected : styles.selectedM}
                >
                  {year}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}

      <form className={styles.wrapper}>
        <select
          name="month"
          // value={selectedMonthForm}
          // className={styles.monthPicker}
          // onChange={selectMonthHandler}
          onChange={handleMonthChange}
        >
          <option value="" disabled selected hidden>
            Месяц
          </option>
          {months.map(({ id, name: month }) => (
            <option key={id} value={id}>
              {month}
            </option>
          ))}

          {/* <option name="" value="Месяц" className={styles.pickerFirstOpt}>
            Месяц
          </option>
          {months.map(month => (
            <option key={month} value={month} data-month="month">
              {month}
            </option>
          ))} */}
        </select>

        <select
          name="year"
          // value={selectedYear}
          className={styles.yearPicker}
          // onChange={selectYearHandler}
          onChange={handleYearChange}
        >
          <option value="" disabled selected hidden>
            Год
          </option>
          {years.map(year => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
          {/* <option name="" value="Год" className={styles.pickerFirstOpt}>
            Год
          </option>
          {years.map(year => (
            <option key={year} value={year} data-year="year">
              {year}
            </option>
          ))} */}
        </select>
      </form>
    </>
  );
}
