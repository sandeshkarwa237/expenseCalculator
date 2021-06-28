import { combineReducers } from "redux";
import expenseReducer from "./ExpenseList/expenseList.reducer";
import overallExpenseReducer from "./OverallDetails/overallDetails.reducer";

// Clubbing all the reducer using combineReducer
const rootReducer = combineReducers({
  expense: expenseReducer,
  overallDetails: overallExpenseReducer,
});

export default rootReducer;
