import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
// import transaction from './exampleData';
import { getAllTransactions } from '../../redux/finance/finance-selectors';
import moment from 'moment';

import styles from './Style.module.css';

const style = {
  table: {
    position: 'relative',
    zIndex: '2',
    borderBottomCollor: 'red',
    border: '0px solid white',
    borderCollapse: 'collapse',
  },
  thFirst: {
    backgroundColor: 'white',
    borderTopLeftRadius: '30px',
    borderBottomLeftRadius: '30px',
    borderStyle: 'hidden',
  },
  thLast: {
    backgroundColor: 'white',
    borderTopRightRadius: '30px',
    borderBottomRightRadius: '30px',
    borderStyle: 'hidden',
    textAlign: 'right',
  },
  tr: {
    border: '0px solid inherit',
  },
  th: {
    backgroundColor: 'white',
    borderStyle: 'hidden',
  },

  td: {
    borderBottomColor: 'rgba(220, 220, 223, 1)',
    backgroundColor: 'inherit',
    paddingLeft: '15px',
    paddingRight: '15px',
  },
  tdLast: {
    paddingLeft: '15px',
    paddingRight: '15px',
    // borderBottom: 'none',
    borderBottomColor: 'rgba(220, 220, 223, 1)',
    textAlign: 'right',
  },
  tdFirst: {
    borderBottomColor: 'rgba(220, 220, 223, 1)',
    backgroundColor: 'inherit',
    paddingLeft: '15px',
    paddingRight: '15px',
    textAlign: 'left',
  },
  thead: {
    backgroundColor: 'white',
    height: '58px',
    lineHeight: '38px',
    borderStyle: 'hidden',
  },
};

function OperationsTable() {
  const data = useSelector(getAllTransactions);

  let mainView = true;
  if (window.location.pathname !== '/home') {
    mainView = false;
  }
  return (
    <Table responsive style={style.table} className={styles.table}>
      <thead className={style.thead}>
        {mainView ? (
          <tr className={styles.thead}>
            <th style={style.thFirst}>Дата</th>
            <th style={style.th}>Тип</th>
            <th style={style.th}>Категория</th>
            <th style={style.th}>Комментарий</th>
            <th style={style.th}>Сумма</th>
            <th style={style.thLast}>Баланс</th>
          </tr>
        ) : (
          <tr className={style.thead}>
            <th style={style.thFirst}>Категория</th>
            <th style={style.thLast}>Сумма</th>
          </tr>
        )}
      </thead>
      {mainView ? (
        data.map(({ _id, date, type, category, comments, amount }) => (
          <tbody key={_id}>
            <tr className={styles.tr} style={style.tr}>
              <td style={style.td} data-label="Дата">
                {moment(date).format('YYYY.MM.DD')}
              </td>
              <td data-label="Тип" style={style.td}>
                {type === 'income' ? '+' : '-'}
              </td>
              <td data-label="Категория" style={style.td}>
                {category}
              </td>
              <td data-label="Комментарий" style={style.td}>
                {comments}
              </td>
              <td data-label="Сумма" style={style.td}>
                {amount}
              </td>
              <td data-label="Баланс" style={style.tdLast}>
                6 500
              </td>
            </tr>
          </tbody>
        ))
      ) : (
        <tbody>
          {data.map(({ _id, category, sum }) => (
            <tr key={_id} style={style.tr}>
              <td style={style.tdFirst}>{category}</td>
              <td style={style.tdLast}>300</td>
            </tr>
          ))}
        </tbody>
      )}
    </Table>
  );
}

export default OperationsTable;
