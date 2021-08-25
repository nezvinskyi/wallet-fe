import styles from './Currency.module.css';
import React from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';

export default class CurrencyList extends React.Component {
  state = {
    currencies: [],
  };
  //вынеси запрос в апи (services). создай там отдельный файл
  componentDidMount() {
    axios.get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11').then(res => {
      const currencys = res.data;
      this.setState({ currencys });
    });
  }

  render() {
    return (
      <div className={styles.currency}>
        <h3>Курс валют</h3>
        <ul>
          {this.state.currencys.map(currency => (
            <li id={nanoid(10)}>
              {currency.ccy}, {currency.base_ccy}, {currency.buy}, {currency.sale}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
