import moment from 'moment';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { financeOperations, financeSelectors } from '../../redux/finance/';
import style from './Style.module.css';
import inlineStyle from './inlineStyle';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
// import EditIcon from '@material-ui/icons/Edit';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

const OperationsTable = ({ viewCondition, statistic, total }) => {
  const dispatch = useDispatch();
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
        // console.log('cat.name :>> ', cat.name);
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

  const handleDelete = id => {
    try {
      dispatch(financeOperations.deleteContact(id));
      dispatch(financeOperations.getBalance());
    } catch (error) {
      dispatch(financeOperations.setAddTrError(error.toString()));
    }
  };

  const mainView = viewCondition;

  return (
    <div className={style.tableWrapper}>
      <Table responsive style={inlineStyle.table} className={style.table}>
        <thead className={style.thead}>
          {mainView ? (
            <tr className={style.thead}>
              <th style={inlineStyle.thFirst}>Date</th>
              <th style={inlineStyle.tableTypeTh}>Type</th>
              <th style={inlineStyle.tableTh}>Category</th>
              <th style={inlineStyle.tableTh}>Comment</th>
              <th style={inlineStyle.thSumm}>Amount</th>
              <th style={inlineStyle.thSumm}>Balance</th>
              <th style={inlineStyle.thLast}>
                <SettingsOutlinedIcon />
              </th>
            </tr>
          ) : (
            <tr className={style.thead}>
              <th style={inlineStyle.thFirst}>Category</th>
              <th style={inlineStyle.thLast}>Total</th>
            </tr>
          )}
        </thead>
        {mainView ? (
          transactions.map(({ _id, date, type, categoryId, comments, amount }, idx) => (
            <tbody className={style.tbody} key={_id}>
              <tr className={style.tr} style={inlineStyle.tableTr}>
                <td style={inlineStyle.tableDataTd} className={style.tableDataTd} data-label="Date">
                  {moment(date).format('DD.MM.YYYY')}
                </td>
                <td data-label="Type" style={inlineStyle.tableTypeTd}>
                  {type === 'income' ? '+' : '-'}
                </td>
                <td data-label="Category" style={inlineStyle.tableTd}>
                  {categoryId?.name || findCategoryName(categoryId)}
                </td>
                <td data-label="Comment" style={inlineStyle.tableTd}>
                  {comments}
                </td>

                <td
                  data-label="Amount"
                  style={type === 'income' ? inlineStyle.income : inlineStyle.expense}
                >
                  {moneyFormat(amount)}
                </td>
                <td data-label="Balance" style={inlineStyle.tdLast}>
                  {moneyFormat(calculateBalance(amount, type, idx))}
                </td>

                <td className={style.verticalText} style={inlineStyle.tdLastEdit}>
                  <div className={style.BtnsContainer} onClick={() => handleDelete(_id)}>
                    {/* <img src={closeIcon.close} className={style.removeButton}  alt="" /> */}
                    {/* <EditIcon className={style.editButton} /> */}
                    <DeleteForeverRoundedIcon className={style.removeButton} />
                  </div>
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
                    <span className={style.colorBlockWrapper}>
                      <div className={style.colorBlockWrapper}>
                        <span className={style.colorBlock} style={{ background: color }}></span>
                      </div>
                      {name}
                    </span>
                  </td>
                  <td style={inlineStyle.tdLast} className={style.totalValue}>
                    {moneyFormat(amount)}
                  </td>
                </tr>
              );
            })}
            <tr style={inlineStyle.tr} className={style.totalAmount}>
              <td style={inlineStyle.tdFirst} className={style.countText}>
                Total expense:
              </td>
              <td style={inlineStyle.tdLast} className={style.outcome}>
                {moneyFormat(total.expense)}
              </td>
            </tr>
            <tr style={inlineStyle.tr} className={style.totalAmount}>
              <td style={inlineStyle.tdFirst} className={style.countText}>
                Total income:
              </td>
              <td style={inlineStyle.tdLast} className={style.income}>
                {moneyFormat(total.income)}
              </td>
            </tr>
          </tbody>
        )}
      </Table>
    </div>
  );
};

export default OperationsTable;
