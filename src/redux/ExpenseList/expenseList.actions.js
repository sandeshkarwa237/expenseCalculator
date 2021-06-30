import {
  UPDATE_EXPENSE_LIST,
  UPDATE_TAB,
  CALCULATE_EXPENSE,
} from "./expenseList.types";

// Action used for calculating the overall expense and each's share
export const calculateExpense = (overallExpenseList) => {
  return {
    type: CALCULATE_EXPENSE,
    payload: overallExpenseList,
  };
};

// Action used for tab change
export const updateTab = (index) => {
  return {
    type: UPDATE_TAB,
    payload: index,
  };
};

// Action used for updating the existing expense list
export const updateExpenseList = (list) => {
  return {
    type: UPDATE_EXPENSE_LIST,
    payload: list,
  };
};
