import { validate } from 'indicative/validator';

export const addTransactionValidator = async data => {
  const rules = {
    amount: 'required|above:0',
  };

  const messages = {
    required: () => `Please enter amount`,
    'amount.above': 'Amount must be a positive number',
  };

  try {
    await validate(data, rules, messages);
  } catch (error) {
    throw new Error(error[0].message);
  }
};
