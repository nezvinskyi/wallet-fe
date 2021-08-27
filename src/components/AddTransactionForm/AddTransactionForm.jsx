import moment from 'moment';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import api from '../../service/transactions-api';
import { financeSelectors } from '../../redux/finance';
import styles from './AddTransactionForm.module.css';
import { BtnImg } from './img';

class AddTransactionForm extends Component {
  state = {
    date: moment(new Date()).format('YYYY-MM-DD'),
    type: false,
    categoryId: this.props.categories[0]._id,
    comments: '',
    amount: '0.00',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChangeType = e => {
    this.setState(prevState => ({
      type: !prevState.type,
    }));
  };

  stateType = () => {
    const { type } = this.state;
    if (type === true) {
      return 'income';
    }
    return 'expense';
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      date: this.state.date,
      type: this.stateType(),
      categoryId: this.state.categoryId,
      comments: this.state.comments,
      amount: this.state.amount,
    };
    console.log(data);

    api.addTransaction(data);

    this.reset();

    this.setState({});
  };

  reset = () => {
    this.setState({
      date: moment(new Date()).format('YYYY-MM-DD'),
      type: false,
      comments: '',
      amount: '',
    });
  };

  sentData = () => {
    console.log(this.state);
    this.reset();
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className={styles.typeWrapper}>
            <div>Доход</div>
            <label htmlFor="myToggle" className={styles.toggle}>
              <input
                name="type"
                className={styles.toggle__input}
                type="checkbox"
                value={this.state.type}
                onChange={this.handleChangeType}
                id="myToggle"
              ></input>
              <div className={styles.toggle__fill}></div>
            </label>
            <div>Расход</div>
          </div>

          <br />

          <select onChange={this.handleChange} name="categoryId">
            {this.props.categories.map(category => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>

          <label>
            <input
              type="number"
              name="amount"
              value={this.state.amount}
              onChange={this.handleChange}
            />
          </label>

          <label className={styles.item}>
            <input type="date" name="date" value={this.state.date} onChange={this.handleChange} />
          </label>

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
          <br />
          <button type="submit">Добвить</button>
          <br />
          <br />
          <h4 style={{ color: 'red' }}>Comments and amount are required</h4>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  categories: financeSelectors.getAllCategories(state),
});

export default connect(mapStateToProps)(AddTransactionForm);
