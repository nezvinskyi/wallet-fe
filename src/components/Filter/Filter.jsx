import { useState } from 'react';
import styles from './Filter.module.css';
import { nanoid } from 'nanoid';

import { useDispatch } from 'react-redux';
import { financeOperations } from '../../redux/finance';

const months = [
  { id: '01', name: 'January' },
  { id: '02', name: 'February' },
  { id: '03', name: 'March' },
  { id: '04', name: 'April' },
  { id: '05', name: 'May' },
  { id: '06', name: 'June' },
  { id: '07', name: 'July' },
  { id: '08', name: 'August' },
  { id: '09', name: 'September' },
  { id: '10', name: 'October' },
  { id: '11', name: 'November' },
  { id: '12', name: 'December' },
];

export default function Filter() {
  const dispatch = useDispatch();

  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = currentYear; i >= currentYear - 4; i--) {
    years.push(i);
  }

  const [selectedMonthForm, setSelectedMonthForm] = useState('Month');
  const [selectedYearForm, setSelectedYearForm] = useState('Year');
  const [showMonths, setShowMonths] = useState(false);
  const [showYears, setShowYears] = useState(false);

  const dropDownMonths = () => {
    setShowMonths(!showMonths);
  };

  const dropDownYears = () => {
    setShowYears(!showYears);
  };

 
  const handleMonthChange = e => {
    const month = e.target.dataset.month;
    const monthid = e.target.dataset.monthid;
    dispatch(financeOperations.addFilter({ month: monthid }));
    setSelectedMonthForm(month);
  };

  const handleYearChange = e => {
    const year = e.target.dataset.year;
    dispatch(financeOperations.addFilter({ year: year }));
    setSelectedYearForm(year);
  };

  const resetMonthFilter = e => {
    dispatch(financeOperations.addFilter({  month:'' }));
  };
  const resetYearFilter = e => {
    dispatch(financeOperations.addFilter({ year: ''}));
  }


  return (
    <div className={styles.wrapper}>
      <div className={styles.monthPicker} onClick={dropDownMonths}>
        <div className={styles.selectBoxContainer}>
          <div className={styles.selectBoxSelectedItem}>{selectedMonthForm}</div>

          <div
            style={{ display: showMonths ? 'block' : 'none' }}
            className={styles.selectBoxItemsMonth}
          >
            <div onClick={resetMonthFilter}>All</div>
            {months.map(({ id, name: month }) => (
              <div
                key={id}
                onClick={handleMonthChange}
                className={selectedMonthForm === month ? styles.selected : styles.selectedM}
                data-month={month}
                data-monthid={id}
              >
                {month}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.yearPicker} data-year="year" onClick={dropDownYears}>
        <div className={styles.selectBoxContainer}>
          <div className={styles.selectBoxSelectedItem}>{selectedYearForm}</div>

          <div style={{ display: showYears ? 'block' : 'none' }} className={styles.selectBoxItems}>
          <div  onClick={resetYearFilter}>All</div>
            {years.map(year => (
              <div
                key={nanoid()}
                onClick={handleYearChange}
                className={selectedYearForm === year ? styles.selected : styles.selectedM}
                data-year={year}
              >
                {year}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
