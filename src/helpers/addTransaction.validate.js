import { validate } from 'indicative/validator';

export const addTransactionValidator = async data => {
  const rules = {
    amount: 'required|above:0',
  };

  const messages = {
    required: () => `Вы не заполнили поле сумма!`,
    'amount.above': 'Сумма должна быть больше нуля',
  };

  try {
    await validate(data, rules, messages);
  } catch (error) {
    throw new Error(error[0].message);
  }
};
