import React from 'react';
import { Table } from 'react-bootstrap';

import transaction from './exampleData';

import styles from './Style.module.css';

const style = {
  table: {
    // position: 'absolute',
    // right: '85px',
    // top: '45px',
    borderBottomCollor: 'red',
    maxWidth: '700px',
    border: '0px solid white',
    borderCollapse: 'collapse',
  },
  thFirst: {
    borderTopLeftRadius: '30px',
    borderBottomLeftRadius: '30px',
    borderStyle: 'hidden',
  },
  thLast: {
    borderTopRightRadius: '30px',
    borderBottomRightRadius: '30px',
    borderStyle: 'hidden',
  },
  tr: {
    border: '0px solid inherit',
  },
  th: {
    borderStyle: 'hidden',
  },

  td: {
    borderBottomColor: '#BDBDBD',
    backgroundColor: 'inherit',
    paddingLeft: '15px',
    paddingRight: '15px',
  },
  tdLast: {
    paddingLeft: '15px',
    paddingRight: '15px',
    borderBottom: 'none',
  },
  thead: {
    backgroundColor: 'white',
    height: '58px',
    lineHeight: '38px',
    borderStyle: 'hidden',
  },
};

const OperationsTable = () => {
  return (
    <Table responsive style={style.table}>
      <thead className={style.thead}>
        <tr className={styles.thead}>
          <th style={style.thFirst}>Дата</th>
          <th style={style.th}>Тип</th>
          <th style={style.th}>Категория</th>
          <th style={style.th}>Комментарий</th>
          <th style={style.th}>Сумма</th>
          <th style={style.thLast}>Баланс</th>
        </tr>
      </thead>
      {transaction.map(({ id, date, type, category, comment, sum, balance }) => (
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
      ))}
    </Table>
  );
};

export default OperationsTable;
