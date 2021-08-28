import categoryColors from './colors';

export const getCurrentValues = transactions => {
  return transactions.map(transaction => transaction.amount);
};

export const getCurrentCategories = transactions => {
  return transactions.map(transaction => transaction.categoryId.name);
};

export const getCurrentColors = transactions => {
  let currentColors = [];
  transactions.forEach(transaction => {
    const categoryId = transaction.categoryId._id;
    categoryColors.map(color => {
      if (color.id === categoryId) {
        currentColors.push(color.color);
      }
    });
  });

  return currentColors;
};

export const getTotal = transactions => {
  let total = {
    expense: 0,
    income: 0,
  };

  transactions.forEach(transaction => {
    switch (transaction.type) {
      case 'expense':
        total.expense = total.expense + transaction.amount;
        break;

      case 'income':
        total.income = total.income + transaction.amount;
        break;
      default:
        console.log('invalid type');
    }
  });

  return total;
};
