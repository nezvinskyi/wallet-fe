import React from 'react';
import { Container, Table } from 'react-bootstrap';
import transaction from './exampleData';
// import style from './Style.module.css';

const style = {
  table: {
    position: 'absolute',
    right: '85px',
    top: '45px',
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
    // border: '1px solid red',
    border: '0px solid inherit',
  },
  th: {
    borderStyle: 'hidden',
  },
  td: {
    backgroundColor: 'inherit',
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
      <thead>
        <tr style={style.thead}>
          <th style={style.thFirst}>Дата</th>
          <th style={style.th}>Тип</th>
          <th style={style.th}>Категория</th>
          <th style={style.th}>Комментарий</th>
          <th style={style.th}>Сумма</th>
          <th style={style.thLast}>Баланс</th>
        </tr>
      </thead>
      <tbody>
        {transaction.map(({ id, date, type, category, comment, sum, balance }) => (
          <tr key={id} style={style.tr}>
            <td style={style.td}>{date}</td>
            <td>{type}</td>
            <td>{category}</td>
            <td>{comment}</td>
            <td>{sum}</td>
            <td>{balance}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default OperationsTable;
