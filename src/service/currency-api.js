import axios from 'axios';

export const getCurrency = async () => {
  const { data } = await axios.get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11');
  return data;
};
