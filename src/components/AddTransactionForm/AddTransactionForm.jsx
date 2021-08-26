import moment from 'moment';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import api from '../../service/transactions-api';
import styles from './AddTransactionForm.module.css';

import { financeSelectors } from '../../redux/finance';

import { connect } from 'react-redux';

const initialState = {
  date: moment(new Date()).format('YYYY-MM-DD'),
  type: 'expense',

  categoryId: '6121925660f79a0fd0c6d3f6',
  comments: 'Food',
  amount: 0,
  tr: [],
};

class AddTransactionForm extends Component {
  state = initialState;

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      date: this.state.date,
      type: this.state.type,
      categoryId: this.state.categoryId,
      comments: this.state.comments,
      amount: this.state.amount,
    };
    console.log(data);

    // axios.post(`http://localhost:5000/api/v1/transactions`, data);
    api.addTransaction(data);

    // this.props.onCloseModal();
    this.reset();
  };

  reset = () => {
    this.setState(initialState);
  };

  sentData = () => {
    console.log(this.state);
    this.reset();
  };

  render() {
    // const categories = this.props.categories;
    // console.log(categories);
    return (
      <>
        <Link to="/">Home</Link>

        <form onSubmit={this.handleSubmit}>
          <label>
            Date:
            <input type="date" name="date" value={this.state.date} onChange={this.handleChange} />
          </label>

          {/* <div class="form_toggle">
            <div className={styles.item1}>
              <input
                id="fid-1"
                type="radio"
                name="type"
                value="expense"
                checked={this.state.type === 'income'}
                onChange={this.handleChange}
              />
              <label htmlFor="fid-1">OFF</label>
            </div>
            <div className={styles.item2}>
              <input
                id="fid-2"
                type="radio"
                name="type"
                value="income"
                checked={this.state.type === 'expense'}
                onChange={this.handleChange}
              />
              <label htmlFor="fid-2">ON</label>
            </div>
          </div> */}

          <div>
            Type:
            <label>
              Income:
              <input
                type="radio"
                name="type"
                value="income"
                checked={this.state.type === 'income'}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Expense: {this.state.type === 'income'}
              <input
                type="radio"
                name="type"
                value="expense"
                checked={this.state.type === 'expense'}
                onChange={this.handleChange}
              />
            </label>
          </div>

          {/* <label>
            Category:
            <input
              type="text"
              name="categoryId"
              value={this.state.categoryId}
              onChange={this.handleChange}
            />
          </label>
          <br /> */}

          {/* <label htmlFor="">category </label> */}
          <select>
            {this.props.categories.map(category => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>

          <label>
            Comments:
            <input
              type="text"
              name="comments"
              value={this.state.comments}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Amount:
            <input
              type="number"
              name="amount"
              value={this.state.amount}
              onChange={this.handleChange}
            />
          </label>
          <br />
          {/* <button type="submit" onClick={() => this.props.onClose()}>
            Add
          </button> */}
          <button type="submit">Add</button>
        </form>

        {/* <br />
        <br />
        <br />
        <h4>Render transactions</h4>
        <ul>
          {this.state.tr.map(trans => (
            <li key={trans._id}>
              <p className={styles.item}>Date: {trans.date}</p>
              <p className={styles.item}>Type: {trans.type}</p>
              <p className={styles.item}>Comment: {trans.comments}</p>
              <p className={styles.item}>Amount: {trans.amount}</p>
            </li>
          ))}
        </ul> */}
      </>
    );
  }
}

const mapStateToProps = state => ({
  categories: financeSelectors.getAllCategories(state),
});

export default connect(mapStateToProps)(AddTransactionForm);
