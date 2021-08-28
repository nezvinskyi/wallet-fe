import moment from 'moment';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { financeSelectors } from '../../redux/finance/';

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
    paddingLeft: '30px',
  },
  thLast: {
    backgroundColor: 'white',
    borderTopRightRadius: '30px',
    borderBottomRightRadius: '30px',
    borderStyle: 'hidden',
    textAlign: 'right',
    paddingRight: '30px',
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

const OperationsTable = ({ viewCondition, color, transTotal }) => {
  const transactions = useSelector(financeSelectors.getAllSortedTransactions);
  const categories = useSelector(financeSelectors.getAllCategories);
  const balance = useSelector(financeSelectors.getBalance);

  localStorage.setItem('balance', balance);

  const calculateBalance = (amount, type) => {
    let previousDayBalance = +localStorage.getItem('balance');
    if (type === 'income') {
      localStorage.setItem('balance', previousDayBalance - amount);
      return previousDayBalance;
    }
    if (type === 'expense') {
      localStorage.setItem('balance', previousDayBalance + amount);
      return previousDayBalance;
    }
    return localStorage.getItem('balance');
  };

  const findCategoryName = id => {
    let catName;
    categories.find(cat => {
      if (cat._id === id) {
        console.log('cat.name :>> ', cat.name);
        catName = cat.name;
        return null;
      } else return null;
    });
    return catName;
  };

  const mainView = viewCondition;

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
        transactions.map(({ _id, date, type, categoryId, comments, amount }, idx) => (
          <tbody key={_id}>
            <tr className={styles.tr} style={style.tr}>
              <td style={style.td} data-label="Дата">
                {moment(date).format('DD.MM.YYYY')}
              </td>
              <td data-label="Тип" style={style.td}>
                {type === 'income' ? '+' : '-'}
              </td>
              <td data-label="Категория" style={style.td}>
                {categoryId?.name || findCategoryName(categoryId)}
              </td>
              <td data-label="Комментарий" style={style.td}>
                {comments}
              </td>
              <td data-label="Сумма" style={style.td}>
                {amount}
              </td>
              <td data-label="Баланс" style={style.tdLast}>
                {calculateBalance(amount, type, idx)}
              </td>
            </tr>
          </tbody>
        ))
      ) : (
        <tbody>
          {transactions.map(({ _id, categoryId, amount }) => {
            const rgb = color.filter(item => item.id === categoryId._id);
            return (
              <tr key={_id} style={style.tr}>
                <td style={style.tdFirst}>
                  <div className={styles.colorBlock} style={{ background: rgb[0]?.color }}></div>
                  {categoryId?.name}
                </td>
                <td style={style.tdLast}>{amount}</td>
              </tr>
            );
          })}
          <tr style={style.tr}>
            <td style={style.tdFirst} className={styles.countText}>
              Расходы:
            </td>
            <td style={style.tdLast} className={styles.outcome}>
              {transTotal?.expense}
            </td>
          </tr>
          <tr style={style.tr}>
            <td style={style.tdFirst} className={styles.countText}>
              Доходы:
            </td>
            <td style={style.tdLast} className={styles.income}>
              {transTotal?.income}
            </td>
          </tr>
        </tbody>
      )}
    </Table>
  );
};

export default OperationsTable;
