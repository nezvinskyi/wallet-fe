import styles from './Filter.module.css'
import img from './arrow.svg'
export default function Filter() {
  const currentYear = new Date().getFullYear();
  const years = []
  for (let i = currentYear - 5; i <= currentYear + 5; i++) {
    years.push(i);
  }
  const months = ["Январь", "Февраль","Март","Апрель", "Май","Июнь","Июль","Август","Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]

  return (
  <form className={styles.wrapper} onChange={()=>{}}>

    <select name="" value='Месяц' className={styles.monthPicker} >
  <option name="" value="Месяц" className={styles.pickerFirstOpt}>Месяц</option>
  {months.map(month => (
          <option key={month} value={months.indexOf(month)}>
            {month}
          </option>
        ))}
</select>

<select name="year" value='Год' className={styles.yearPicker}>
  
<option name="year" value="Год" className={styles.pickerFirstOpt}>Год</option>
        {years.map(year => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      </form>
  )
}