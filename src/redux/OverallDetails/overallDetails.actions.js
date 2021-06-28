import { CALCULATE_EXPENSE } from "./overallDetails.types";

// Acion used for calculating the overall expense and each's share
export const calculateExpense = (overallExpenseList) => {
  return {
    type: CALCULATE_EXPENSE,
    payload: overallExpenseList,
  };
};
