import { GET_EXPENSE_LIST, UPDATE_EXPENSE_LIST } from "./expenseList.types";

const INITIAL_STATE = {
  expenseList: [],
};

const expenseReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    // Reducer used for fetching the expense list
    case GET_EXPENSE_LIST:
      return {
        ...state,
        expenseList: state.expenseList + 1,
      };

    // Reducer used for updating the existing expense list
    case UPDATE_EXPENSE_LIST:
      const updatedExpenseList = state.expenseList.concat(payload);
      return {
        ...state,
        expenseList: updatedExpenseList,
      };

    default:
      return state;
  }
};

export default expenseReducer;
