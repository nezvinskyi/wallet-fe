import { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './AddTransactionForm.module.css';
// https://test-wallet-be.herokuapp.com/
const initialState = {
  date: Date.now(),
  type: '',

  categoryId: '6121925660f79a0fd0c6d3f6',
  comments: 'Food',
  amount: 0,
  tr: [],
};

class AddTransactionForm extends Component {
  state = initialState;

  // async componentDidMount() {
  //   const response = await axios.get(
  //     `https://test-wallet-be.herokuapp.com/api/v99/transactions/allTrWithoutAuth`,
  //   );

  //   this.setState({ tr: response.data.result });
  // }

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

    axios.post(
      `https://test-wallet-be.herokuapp.com/api/v99/transactions/postOneTrWithoutAuth`,
      data,
    );
  };

  reset = () => {
    this.setState(initialState);
  };

  sentData = () => {
    console.log(this.state);
    this.reset();
  };

  render() {
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

          <label>
            Category:
            <input
              type="text"
              name="categoryId"
              value={this.state.categoryId}
              onChange={this.handleChange}
            />
          </label>
          <br />
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

          {/* <button className={styles.button_x} onClick={() => this.props.onClose()}>
            X
          </button> */}
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

export default AddTransactionForm;
