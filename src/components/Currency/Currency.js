import styles from './Currency.module.css';
import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { getCurrency } from '../../service/currency-api';

export default function CurrencyList() {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      const data = await getCurrency();
      setCurrencies(data);
    };
    fetchCurrencies();
  }, []);

  return (
    <div className={styles.currency}>
      <table>
        <thead key={nanoid(3)}>
          <tr>
            <td>Валюта</td>
            <td>Покупка</td>
            <td>Продажа</td>
          </tr>
        </thead>
        {currencies.map((currency, index) => {
          if (index < 3) {
            return (
              <tbody key={currency.ccy}>
                <tr>
                  <td>{currency.ccy}</td>
                  <td>{currency.buy}</td>
                  <td>{currency.sale}</td>
                </tr>
              </tbody>
            );
          }
        })}
      </table>
    </div>
  );
}
