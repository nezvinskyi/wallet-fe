import React from 'react';
import { Table } from 'react-bootstrap';

import transaction from './exampleData';

import styles from './Style.module.css';

const style = {
  table: {
    position: 'relative',
    zIndex: '100000',
    // right: '85px',
    // top: '45px',
    borderBottomCollor: 'red',
    // maxWidth: '700px',
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

const OperationsTable = ({viewCondition}) => {
  let mainView = viewCondition;
  if (window.location.pathname !== '/home') {
    mainView = false;
  }
  return (
    <Table responsive style={style.table}>
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
        transaction.map(({ id, date, type, category, comment, sum, balance }) => (
          <tbody key={id}>
            <tr className={styles.tr} style={style.tr}>
              <td style={style.td} data-label="Дата">
                {date}
              </td>
              <td data-label="Тип" style={style.td}>
                {type}
              </td>
              <td data-label="Категория" style={style.td}>
                {category}
              </td>
              <td data-label="Комментарий" style={style.td}>
                {comment}
              </td>
              <td data-label="Сумма" style={style.td}>
                {sum}
              </td>
              <td data-label="Баланс" style={style.tdLast}>
                {balance}
              </td>
            </tr>
          </tbody>
        ))
      ) : (
        <tbody>
          {transaction.map(({ id, category, sum }) => (
            <tr key={id} style={style.tr}>
              <td style={style.tdFirst}><div className={styles.colorBlock}></div>{category}</td>
              <td style={style.tdLast}>{sum}</td>
            </tr>
          ))}
          <tr style={style.tr}>
          <td style={style.tdFirst} className={styles.countText}>Расходы:</td>
          <td style={style.tdLast} className={styles.outcome}>99383</td>
          </tr>
           <tr style={style.tr}>
           <td style={style.tdFirst} className={styles.countText}>Доходы:</td>
           <td style={style.tdLast} className={styles.income}>6433</td>
           </tr>
        </tbody>
      )}
    </Table>
  );
};

export default OperationsTable;
