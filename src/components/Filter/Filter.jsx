import { useState } from 'react';
import styles from './Filter.module.css';
import { nanoid } from 'nanoid';

import { useDispatch } from 'react-redux';
import { financeOperations } from '../../redux/finance';
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

  const [selectedMonthForm, setSelectedMonthForm] = useState('Месяц');
  const [selectedYearForm, setSelectedYearForm] = useState('Год');
  const [showMonths, setShowMonths] = useState(false);
  const [showYears, setShowYears] = useState(false);

  const dropDownMonths = () => {
    setShowMonths(!showMonths);
  };

  const dropDownYears = () => {
    setShowYears(!showYears);
  };

  // const filter = useSelector(financeSelectors.getFilter);

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

  return (
    <div className={styles.wrapper}>
      <div className={[styles.selectBoxBox, styles.monthPicker].join(' ')} onClick={dropDownMonths}>
        <div className={styles.selectBoxContainer}>
          <div className={styles.selectBoxSelectedItem}>{selectedMonthForm}</div>

          <div
            style={{ display: showMonths ? 'block' : 'none' }}
            className={styles.selectBoxItemsMonth}
          >
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

      <div
        className={[styles.selectBoxBox, styles.yearPicker].join(' ')}
        data-year="year"
        onClick={dropDownYears}
      >
        <div className={styles.selectBoxContainer}>
          <div className={styles.selectBoxSelectedItem}>{selectedYearForm}</div>

          <div style={{ display: showYears ? 'block' : 'none' }} className={styles.selectBoxItems}>
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
