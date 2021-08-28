// import axios from 'axios';
// const config = {
//   headers: {
//     'Access-Control-Allow-Origin': '*',
//     'Content-Type': 'application/json',
//     Authorization: '',
//   },
// };

export const getCurrency = async () => {
  // await axios.get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11');

  const response = await fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11');
  const data = await response.json();

  console.log('currency :>> ', data);
  return data;
};
