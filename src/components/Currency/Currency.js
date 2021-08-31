import styles from './Currency.module.css';
import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { getCurrency } from '../../service/currency-api';
import Loader from '../Loader/LoaderNew3.jsx'

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
      {!currencies?<Loader/>:<table>
        <thead key={nanoid(3)}>
          <tr className={styles.theadTr}>
            <td className={styles.tbodyTd_1}>Валюта</td>
            <td className={styles.tbodyTd_2}>Покупка</td>
            <td className={styles.tbodyTd_3}>Продажа</td>
          </tr>
        </thead>
        <tbody key={nanoid(3)}>
          {currencies.map((currency, index) => {
            if (index !== 2) {
              return (
                  <tr className={styles.tbodyTr} key={nanoid(3)}>
                    <td className={styles.tbodyTd_1}>{currency.ccy}</td>
                    <td className={styles.tbodyTd_2}>{(parseInt(currency.buy*100, 10)/100).toFixed(2)}</td>
                    <td className={styles.tbodyTd_3}>{(parseInt(currency.sale*100, 10)/100).toFixed(2)}</td>
                  </tr>
              );
            } else {
              return null;
            }
          })}
        </tbody>
      </table>}
    </div>
  );
}
