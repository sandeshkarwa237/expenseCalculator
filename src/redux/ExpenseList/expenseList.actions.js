import { GET_EXPENSE_LIST, UPDATE_EXPENSE_LIST } from "./expenseList.types";

// Acion used for fetching the expense list
export const getExpenseList = () => {
  return {
    type: GET_EXPENSE_LIST,
  };
};

// Acion used for updating the existing expense list
export const updateExpenseList = (list) => {
  return {
    type: UPDATE_EXPENSE_LIST,
    payload: list,
  };
};
