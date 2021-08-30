import moment from 'moment';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { financeSelectors } from '../../redux/finance/';
import style from './Style.module.css';
import inlineStyle from './inlineStyle';

const OperationsTable = ({ viewCondition, statistic, total }) => {
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

  const moneyFormat = n => {
    return parseFloat(n)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+\.)/g, '$1 ');
  };

  const mainView = viewCondition;

  return (
    <Table responsive style={inlineStyle.table} className={style.table}>
      <thead className={style.thead}>
        {mainView ? (
          <tr className={style.thead}>
            <th style={inlineStyle.thFirst}>Дата</th>
            <th style={inlineStyle.thLeftSide}>Тип</th>
            <th style={inlineStyle.thLeftSide}>Категория</th>
            <th style={inlineStyle.thLeftSide}>Комментарий</th>
            <th style={inlineStyle.thSumm}>Сумма</th>
            <th style={inlineStyle.thLast}>Баланс</th>
          </tr>
        ) : (
          <tr className={style.thead}>
            <th style={inlineStyle.thFirst}>Категория</th>
            <th style={inlineStyle.thLast}>Сумма</th>
          </tr>
        )}
      </thead>
      {mainView ? (
        transactions.map(({ _id, date, type, categoryId, comments, amount }, idx) => (
          <tbody key={_id}>
            <tr className={style.tr} style={inlineStyle.tr}>
              <td style={inlineStyle.tdLeftSide} data-label="Дата">
                {moment(date).format('DD.MM.YYYY')}
              </td>
              <td data-label="Тип" style={inlineStyle.tdType}>
                {type === 'income' ? '+' : '-'}
              </td>
              <td data-label="Категория" style={inlineStyle.tdLeftSide}>
                {categoryId?.name || findCategoryName(categoryId)}
              </td>
              <td data-label="Комментарий" style={inlineStyle.tdLeftSide}>
                {comments}
              </td>

              <td
                data-label="Сумма"
                style={type === 'income' ? inlineStyle.income : inlineStyle.expense}
              >
                {moneyFormat(amount)}
              </td>
              <td data-label="Баланс" style={inlineStyle.tdLast}>
                {moneyFormat(calculateBalance(amount, type, idx))}
              </td>
            </tr>
          </tbody>
        ))
      ) : (
        <tbody>
          {statistic.map(({ id, name, amount, color }) => {
            return (
              <tr key={id} style={inlineStyle.tr}>
                <td style={inlineStyle.tdFirst}>
                  <div className={style.colorBlock} style={{ background: color }}></div>
                  {name}
                </td>
                <td style={inlineStyle.tdLast}>{moneyFormat(amount)}</td>
              </tr>
            );
          })}
          <tr style={inlineStyle.tr} className={style.totalAmount}>
            <td style={inlineStyle.tdFirst} className={style.countText}>
              Расходы:
            </td>
            <td style={inlineStyle.tdLast} className={style.outcome}>
              {moneyFormat(total.expense)}
            </td>
          </tr>
          <tr style={inlineStyle.tr} className={style.totalAmount}>
            <td style={inlineStyle.tdFirst} className={style.countText}>
              Доходы:
            </td>
            <td style={inlineStyle.tdLast} className={style.income}>
              {moneyFormat(total.income)}
            </td>
          </tr>
        </tbody>
      )}
    </Table>
  );
};

export default OperationsTable;
