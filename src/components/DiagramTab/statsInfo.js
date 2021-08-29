import categoryColors from './colors';

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


export const getStats = transactions =>{
  const notFilteredStats = [];
  
  transactions.forEach(transaction => {
    const categoryId = transaction.categoryId._id;
    
    categoryColors.forEach(color => {
          if (color.id === categoryId && transaction.type === "expense") {
          notFilteredStats.push( {
            id: transaction.categoryId._id,
            amount: transaction.amount,
            name: transaction.categoryId.name,
            color: color.color,
          }) 
        }
      });
    });
    const allStats = notFilteredStats.map(({id, amount, name, color}) => {
      const sum = notFilteredStats 
      .filter(item => item.id === id)
      .reduce((total, item) => total+item.amount,0)
      return{
        id,
        name,
        amount:sum,
        color,
      } 
      })

    
    const filteredStats = uniqueBy('id')
    return filteredStats(allStats)
};

export const getNames = transactions => getStats(transactions).map(category => category.name)
export const getValues = transactions => getStats(transactions).map(category => category.amount) 
export const getColors = transactions => getStats(transactions).map(category => category.color)  

const uniqueBy = prop => list => {
    const uniques = {}
    return list.reduce(
        (result, item) => {
            if (uniques[item[prop]]) return result
            uniques[item[prop]] = item
            return [...result, item]
        },
        [],
    )
};

