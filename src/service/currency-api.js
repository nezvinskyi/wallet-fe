import axios from 'axios';
// const config = {
//   headers: {
//     'Access-Control-Allow-Origin': '*',
//     'Content-Type': 'application/json',
//     Authorization: '',
//   },
// };

export const getCurrency = async () => {
  const { data } = await axios.get(
    'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11',
  );
  return data;
};
