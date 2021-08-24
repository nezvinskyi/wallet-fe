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
  const mainView = true;

  return (
    <Table responsive style={style.table}>
      <thead className={style.thead}>
        <tr className={styles.thead}>
        {mainView ? 
    <>
      <th style={style.thFirst}>Дата</th>
      <th style={style.th}>Тип</th>
    </> :null }
      <th style= {(mainView )? style.th  : style.thFirst }>Категория</th>
      {mainView ? 
      <th style={style.th}>Комментарий</th>:null }
      <th style={(mainView )? style.th  : style.thLast }>Сумма</th>
      {mainView ? 
      <th style={style.thLast}>Баланс</th>:null }
        </tr>
      </thead>
      {transaction.map(({ id, date, type, category, comment, sum, balance }) => (
        <tbody key={id}>
          <tr className={styles.tr} style={style.tr}>
          {mainView ? 
    <>
     <td style={style.td} data-label="Дата">
        {date}
      </td>
      <td data-label="Тип" style={style.td}>
        {type}
      </td>
    </> :null }
      <td data-label="Категория" style={style.td}>
        {category}
      </td>
      {mainView ? <td data-label="Комментарий" style={style.td}>
        {comment}
      </td> :null }
      <td data-label="Сумма" style={style.td}>
        {sum}
      </td>
      {mainView ? <td data-label="Баланс" style={style.tdLast}>
        {balance}
      </td> :null }
      
    </tr>
  </tbody>
))}
</Table>

  );
};

export default OperationsTable;
