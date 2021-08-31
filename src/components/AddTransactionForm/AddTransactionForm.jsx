import moment from 'moment';
import { Button } from 'react-bootstrap';
import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { globalOperations } from '../../redux/global';
import { financeSelectors, financeOperations } from '../../redux/finance';
import Header from '../Header';
import { addTransactionValidator } from '../../helpers/addTransaction.validate';
import styles from './AddTransactionForm.module.css';

import Select from 'react-select';
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? '#ff6596' : '#2a2a2a',
  }),
  control: base => ({
    ...base,
    borderLeft: '0px solid white',
    borderRight: '0px solid white',
    borderTop: '0px solid white',
    borderBottom: '1px solid #e0e0e0',
    boxShadow: 'none',
    '&:hover': {
      border: '0 none',
    },
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.9 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};

const stylesJSX = {
  select: {
    width: '410px',
  },
  '@media screen and (max-width: 767px)': {
    select: {
      width: '100%',
    },
  },
  primaryBtn: {
    color: '#ffffff',
    background: '#24CCA7',
    width: 300,
    height: 50,

    marginBottom: '20px',
    border: 'none',
    borderRadius: '20px',
  },
  '@media screen and max-width: 700px': {
    primaryBtn: {
      width: 280,
      height: 50,
    },
  },

  secondaryBtn: {
    color: '#4A56E2',
    background: 'white',
    width: 300,
    height: 50,
    border: '1px solid #4A56E2',
    borderRadius: '20px',
  },
  '@media screen and min-width: 300px': {
    secondaryBtn: {
      width: 280,
      height: 50,
    },
  },
};

const AddTransactionForm = () => {
  const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
  const [type, setType] = useState(true);
  const [amount, setAmount] = useState('');
  const categories = useSelector(financeSelectors.categoriesForAddTrForm);
  const [categoryId, setCategoryId] = useState(categories[8]._id);
  const [comments, setComments] = useState('');

  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(globalOperations.closeModalAddTransaction());
  };

  const changeDate = e => {
    setDate(e.target.value);
  };
  const changeAmount = e => {
    setAmount(e.target.value);
  };

  const categoryChangeREACTSELECT = category => {
    setCategoryId(category._id);
  };
  const commentsChange = e => {
    setComments(e.target.value);
  };
  const changeType = useCallback(() => setType(!type), [type]);

  const stateType = () => {
    if (type === false) {
      return 'income';
    }
    return 'expense';
  };

  const reset = () => {
    setAmount('');
    setComments('');
  };

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      const data = {
        date,
        type: stateType(),
        categoryId,
        comments,
        amount,
      };

      // await validate.addTransaction({ amount });
      await addTransactionValidator({ amount });

      dispatch(financeOperations.addTransaction(data));
      dispatch(financeOperations.getBalance());
      reset();
    } catch (error) {
      dispatch(financeOperations.setAddTrError(error.toString()));
    }
  };

  return (
    <>
      <div className={styles.header}>
        <Header />
      </div>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <h1 className={styles.title}>Добавить транзакцию</h1>
        <div className={styles.typeWrapper}>
          <span className={styles.transType}>
            <span className={styles.income}>Доход</span>
          </span>
          <label htmlFor="myToggle" className={styles.toggle}>
            <input
              name="type"
              className={styles.toggle__input}
              type="checkbox"
              value={type}
              onChange={changeType}
              id="myToggle"
              defaultChecked
            ></input>
            <div className={styles.toggle__fill}></div>
          </label>
          <span className={styles.transType}>
            <span className={styles.expense}>Расход</span>
          </span>
        </div>

        <div className={styles.categoryWrapper}>
          <div style={stylesJSX.select}>
            <Select
              styles={customStyles}
              placeholder="Выберите категорию"
              name="categoryId"
              onChange={categoryChangeREACTSELECT}
              options={categories}
            />
          </div>
        </div>

        <div className={styles.amountAndData__wrapper}>
          <input
            type="number"
            name="amount"
            className={styles.amountAndData}
            value={amount}
            onChange={changeAmount}
            placeholder="0.00"
          />

          <input
            className={styles.amountAndData}
            type="date"
            name="date"
            value={date}
            onChange={changeDate}
          />
        </div>

        <div className={styles.textareaWrapper}>
          <input
            className={styles.text}
            name="comments"
            value={comments}
            onChange={commentsChange}
            placeholder="Комментарий"
          />
        </div>
        <div className={styles.btnGroup}>
          <Button variant="primary" type="submit" style={stylesJSX.primaryBtn}>
            ДОБАВИТЬ
          </Button>

          <Button onClick={onClose} variant="primary" type="submit" style={stylesJSX.secondaryBtn}>
            ОТМЕНА
          </Button>
        </div>
      </form>
    </>
  );
};

export default AddTransactionForm;
